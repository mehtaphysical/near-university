<template>
  <header>
    <nav class="flex items-center justify-between flex-wrap bg-green-500 p-4">
      <router-link
        to="/"
        class="flex items-center flex-no-shrink text-white mr-6"
      >
        <img
          class="w-8"
          alt="Vue logo"
          src="https://avatars.githubusercontent.com/u/85355517?s=200"
        />
        <span class="font-semibold text-xl tracking-tight"
          >NEAR University</span
        >
      </router-link>
      <div
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-white"
      >
        <div class="text-sm flex-grow">
          <router-link
            :to="`/courses/${course.id}`"
            v-for="course of courses"
            :key="course.id"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
            >{{ course.title }}</router-link
          >
        </div>
        <div>
          <p v-if="user">{{ user.email }}</p>
          <button
            v-else
            @click="signin()"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  </header>
  <router-view />
</template>

<script>
import { useCourses, useSession } from "./composables/firebase";
import { signin } from "./services/firebase";

export default {
  name: "App",
  methods: {
    signin() {
      signin();
    },
  },
  setup() {
    const user = useSession();
    const courses = useCourses();

    return { user, courses };
  },
};
</script>
