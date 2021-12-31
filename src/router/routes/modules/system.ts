import { LAYOUT } from "/@/router/constant";
import { AppRouteRecordRaw } from "../../types";

const system: AppRouteRecordRaw = {
  path: "/system",
  name: "System",
  component: LAYOUT,
  redirect: "/system/account",
  meta: {
    orderNo: 2000,
    icon: "ion:settings-outline",
    title: "系统管理",
  },
  children: [
    {
      path: "account",
      name: "AccountManagement",
      component: () => import("/@/views/sys/account/index.vue"),
      meta: {
        title: "账号管理",
      },
    },
  ],
};

export default system;
