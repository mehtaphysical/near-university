<template>
  <div class="h-full grid grid-cols-8">
    <ul class="block h-full p-4 bg-green-500 text-white">
      <li v-for="lesson of course.lessons" :key="lesson.title">
        <router-link :to="`/courses/${course.id}/lessons/${lesson.title}`">{{
          lesson.title
        }}</router-link>
      </li>
    </ul>
    <section class="lesson col-span-7 p-4">
      <Lesson />
    </section>
  </div>
</template>

<script>
import Lesson from "../components/Lesson.vue";
import { useCourse } from "../composables/firebase";

export default {
  name: "CoursesPage",
  components: {
    Lesson,
  },
  setup() {
    const course = useCourse();

    return {
      course,
    };
  },
};
</script>
