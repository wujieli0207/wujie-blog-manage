import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const isShowSidebar = ref(false);

  const handleCollapse = (data: boolean): void => {
    isShowSidebar.value = data;
  };

  return {
    isShowSidebar,
    handleCollapse,
  };
});
