<template>
  <section v-if="lesson">
    <div v-html="lesson.content" />
  </section>
</template>

<script>
import { useLesson } from "../composables/firebase";

export default {
  name: "Lesson",
  setup() {
    const lesson = useLesson();

    return {
      lesson,
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
