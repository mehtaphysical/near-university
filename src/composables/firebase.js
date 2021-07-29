import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { auth, coursesCollection } from "../services/firebase";
import { fetchContent } from "../services/markdown";

export const useSession = () => {
  const user = ref();

  onMounted(() => {
    auth.onAuthStateChanged((session) => {
      user.value = session;
      console.log(session);
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

export const useCourse = (id) => {
  const course = ref({});

  const getCourse = async () => {
    const doc = await coursesCollection.doc(id).get();
    course.value = { id: doc.id, ...doc.data() };
  };

  onMounted(getCourse);
  watch([id], getCourse);

  return course;
};

export const useLesson = () => {
  const route = useRoute();
  const course = useCourse(route.params.id);
  const content = ref("");

  watch([course, () => route.params.title], async () => {
    const lesson = course.value.lessons?.find(
      (lesson) => lesson.title === route.params.title
    );
    if (lesson) content.value = await fetchContent(lesson.markdown);
  });

  return content;
};
