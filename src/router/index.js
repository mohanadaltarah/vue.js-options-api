import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: MainPage,
    meta: {
      title: "Home",
    },
  },
  {
    name: "About",
    path: "/about",
    component: AboutPage,
    meta: {
      title: "About",
      description: "This is the description og the page",
    },
  },
  {
    name: "Profile",
    path: "/profile/:id/:username",
    component: ProfilePage,
    meta: {
      title: "Profile",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
