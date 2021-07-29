import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import App from "./App";

const router = createRouter({
  routes,
  history: createWebHistory(),
});

createApp(App)
  .use(router)
  .mount("#app");
