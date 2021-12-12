import { ref, reactive } from "vue";
import type { ISidebarItem } from "../type";

const useState = () => {
  const sidebarItems = ref<ISidebarItem[]>();
  return { sidebarItems };
};
export default useState;
