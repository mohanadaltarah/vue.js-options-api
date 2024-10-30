import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import SiteWishlist from "@/views/SiteWishlist.vue";
import SiteCourses from "@/views/SiteCourses.vue";
import NotFound from "@/views/NotFound.vue";

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
    path: "/profile/:id/:name",
    component: ProfilePage,
    meta: {
      title: "Profile",
    },
    children: [
      {
        name: "courses",
        path: "courses",
        component: SiteCourses,
      },
      {
        name: "wishlist",
        path: "wishlist",
        component: SiteWishlist,
      },
    ],
  },
  {
    name: "not-found",
    path: "/:pathMatch(.*)*",
    component: NotFound,
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
