import { kill } from "process";
import { AppRouteRecordRaw } from "../types";
import { PageEnum } from "/@/enums/pageEnum";

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

export const basicRoutes = [RootRoute, LoginRoute];
