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
