import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import AboutPage from "@/views/AboutPage.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: MainPage,
  },
  {
    name: "About",
    path: "/about",
    component: AboutPage,
    meta: {
      title: "About from Sirat",
      description: "This is the description og the page",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
