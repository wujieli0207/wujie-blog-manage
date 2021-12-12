import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const sidebarCollapse = ref(true);

  const handleCollapse = (data: boolean): void => {
    sidebarCollapse.value = data;
  };

  return {
    sidebarCollapse,
    handleCollapse,
  };
});
