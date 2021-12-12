import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("/@/layout/Index.vue"),
    meta: {
      title: "主页",
    },
  },
];

export default routes;
