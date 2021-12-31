import type { ComponentPublicInstance } from "vue";

declare global {
  type Nullable<T> = T | null;

  declare type Recordable<T = any> = Record<string, T>;
}
