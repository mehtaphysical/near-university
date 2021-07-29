<template>
  <div class="hello">
    <ul>
      <li v-for="course of courses" :key="course.id">
        <router-link :to="`/courses/${course.id}`">{{
          course.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { useCourses } from "../composables/firebase";

export default {
  name: "CoursesPage",
  setup() {
    const courses = useCourses();

    return {
      courses,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
