import { createRouter, createWebHashHistory } from "vue-router";
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
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
