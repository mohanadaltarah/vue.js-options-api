import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
