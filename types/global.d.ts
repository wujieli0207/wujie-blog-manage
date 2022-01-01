import type { ComponentPublicInstance } from "vue";

declare global {
  declare type Nullable<T> = T | null;

  declare type Recordable<T = any> = Record<string, T>;
}
