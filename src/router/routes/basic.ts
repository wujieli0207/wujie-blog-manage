import { LAYOUT, REDIRECT_NAME } from "/@/router/constant";
import { AppRouteRecordRaw } from "/@/router/types";

export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  path: "/redirect",
  name: "RedirectTo",
  component: LAYOUT,
  meta: {
    title: REDIRECT_NAME,
  },
  children: [
    {
      path: "/redirect/:path(.*)",
      name: REDIRECT_NAME,
      component: () => import("/@/views/sys/redirect/index.vue"),
      meta: {
        title: REDIRECT_NAME,
      },
    },
  ],
};
