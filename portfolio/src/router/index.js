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
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/stack",
      name: "stack",
      component: () => import("../views/StackView.vue"),
    },
    {
      path: "/commercial",
      name: "commercial",
      component: () => import("../views/CommercialView.vue"),
    },
  ],
});

export default router;
