import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { useAuthStore } from "@/store/authStore"; // Ensure correct path
import HomePage from "@/views/HomePage.vue"; // Updated
import LoginPage from "@/views/LoginPage.vue"; // Updated
import DashboardPage from "@/views/DashboardPage.vue"; // Updated

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: HomePage }, // Updated
  { path: "/login", component: LoginPage }, // Updated
  {
    path: "/dashboard",
    component: DashboardPage,
    meta: { requiresAuth: true },
  }, // Updated
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
