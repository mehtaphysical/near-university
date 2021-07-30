import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { auth, coursesCollection } from "../services/firebase";
import { fetchContent } from "../services/markdown";

export const useSession = () => {
  const user = ref();

  onMounted(() => {
    auth.onAuthStateChanged((session) => {
      user.value = session;
    });
  });

  return user;
};

export const useCourses = () => {
  const courses = ref([]);

  onMounted(async () => {
    courses.value = (await coursesCollection.get()).docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });

  return courses;
};

export const useCourse = () => {
  const route = useRoute();
  const course = ref({});

  const getCourse = async () => {
    const doc = await coursesCollection.doc(route.params.id).get();
    course.value = { id: doc.id, ...doc.data() };
  };

  onMounted(getCourse);
  watch(() => route.params.id, getCourse);

  return course;
};

export const useLesson = () => {
  const route = useRoute();
  const course = useCourse(route.params.id);
  const lesson = ref();

  watch([course, () => route.params.title], async () => {
    const matchingLesson =
      course.value.lessons.find(
        (lesson) => lesson.title === route.params.title
      ) || course.value.lessons[0];

    if (matchingLesson) {
      lesson.value = {
        ...matchingLesson,
        content: await fetchContent(matchingLesson.markdown),
      };
    }
  });

  return lesson;
};
