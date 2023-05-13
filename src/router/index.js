import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes.js";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

const paths = routes.map((route) => route.path);

router.beforeEach((to, from, next) => {
  if (!paths.includes(to.path)) next({ path: "/feed" });
  next();
});

export default router;
