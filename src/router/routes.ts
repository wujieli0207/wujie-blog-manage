import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "layout",
    component: () => import("/@/layout/Index.vue"),
    meta: {
      title: "主页",
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("/@/views/Home/Index.vue"),
        meta: {
          title: "系统首页",
        },
      },
      {
        path: "/blog",
        name: "blog",
        component: () => import("/@/views/Blog/Index.vue"),
        meta: {
          title: "博客管理",
        },
      },
      {
        path: "/personalCenter",
        name: "personalCenter",
        component: () => import("/@/views/PersonalCenter/Index.vue"),
        meta: {
          title: "个人中心",
        },
      },
    ],
  },
];

export default routes;
