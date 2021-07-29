<template>
  <div class="hello">
    <ul>
      <li v-for="lesson of course.lessons" :key="lesson.title">
        <router-link :to="`/courses/${course.id}/lessons/${lesson.title}`">{{
          lesson.title
        }}</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useCourse } from "../composables/firebase";

export default {
  name: "CoursesPage",
  setup() {
    const { params } = useRoute();
    const course = useCourse(params.id);

    return {
      course,
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
