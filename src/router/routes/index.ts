import { AppRouteRecordRaw } from "/@/router/types";
import { REDIRECT_ROUTE } from "/@/router/routes/basic";
import { PageEnum } from "/@/enums/pageEnum";

const modules = import.meta.globEager("./modules/**/*.ts");

const routeModuleList: AppRouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];

export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: "Root",
  },
};

export const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () => import("/@/views/sys/login/Login.vue"),
  meta: {
    title: "登录",
  },
};
export const layoutRoute: AppRouteRecordRaw = {
  path: "/layout",
  name: "Layout",
  component: () => import("/@/layouts/default/index.vue"),
  meta: {
    title: "test",
  },
};

export const basicRoutes = [RootRoute, LoginRoute, layoutRoute, REDIRECT_ROUTE];
