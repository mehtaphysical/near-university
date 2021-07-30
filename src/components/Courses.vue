<template>
  <ul class="flex">
    <li
      v-for="course of courses"
      :key="course.id"
      class="border rounded w-1/3 text-center bg-black text-white"
    >
      <router-link :to="`/courses/${course.id}`">{{
        course.title
      }}</router-link>
    </li>
  </ul>
</template>

<script>
import { useCourses } from "../composables/firebase";

export default {
  name: "Courses",
  setup() {
    const courses = useCourses();

    return {
      courses,
    };
  },
};
</script>
