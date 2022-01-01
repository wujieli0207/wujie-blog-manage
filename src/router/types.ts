import { defineComponent } from "vue";
import { RouteMeta, RouteRecordRaw } from "vue-router";
import { RoleEnum } from "/@/enums/roleEnum";

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import("*.vue")>)
  | (() => Promise<T>);

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta" | "children"> {
  name: string;
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[] | undefined;
  props?: Recordable;
  fullPath?: string;
}

export interface IMenu {
  name: string;
  path: string;
  icon?: string;
  paramPath?: string;
  disabled?: boolean;
  children?: IMenu[];
  orderNo?: number;
  roles?: RoleEnum[];
  meta?: Partial<RouteMeta>;
  tag?: IMenuTag;
  hideMenu?: boolean;
}

export interface IMenuTag {
  type?: "primary" | "error" | "warn" | "success";
  content?: string;
  dot?: boolean;
}
