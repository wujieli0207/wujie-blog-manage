import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/basicTableDemo",
    name: "basicTableDemo",
    component: () => import("/@/views/demo/table/basicTableDemo/index.vue"),
    meta: {
      title: "基本表格演示demo",
    },
  },
  {
    path: "/WebFormDemo",
    name: "WebFormDemo",
    component: () => import("/@/views/demo/form/WebFormDemo/index.vue"),
    meta: {
      title: "Web 端表单演示demo",
    },
  },
];

export default routes;
