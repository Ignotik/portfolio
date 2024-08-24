import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/MainView.vue"),
    },
    {
      path: "/about",
      name: "about",
    },
    {
      path: "/project",
      name: "project",
    },
  ],
});

export default router;
