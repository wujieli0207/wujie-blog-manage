import { ref } from "vue";

const useState = () => {
  const pageViewRef = ref<HTMLDivElement | null>(null);
  return { pageViewRef };
};
export default useState;
