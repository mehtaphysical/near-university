<template>
  <h1>Home Page</h1>
  <p v-if="user">
    {{ user.email }} <router-link to="/courses">Go to courses</router-link>
  </p>
  <button v-else @click="signin()">signin</button>
</template>

<script>
import { useSession } from "../composables/firebase";
import { signin } from "../services/firebase";

export default {
  name: "Home",
  methods: {
    signin() {
      signin();
    },
  },
  setup() {
    const user = useSession();

    return { user };
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
