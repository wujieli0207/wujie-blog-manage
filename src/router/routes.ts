import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import("/@/views/Login/Index.vue"),
  },
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
      {
        path: "/dictManage",
        name: "dictManage",
        component: () => import("/@/views/System/DictManage/Index.vue"),
        meta: {
          title: "字典管理",
        },
      },
      {
        path: "/markdownEditor",
        name: "markdownEditor",
        component: () => import("/@/views/Demo/Editor/Markdown/Index.vue"),
        meta: {
          title: "Markdown 编辑器 Demo",
        },
      },
    ],
  },
];

export default routes;
