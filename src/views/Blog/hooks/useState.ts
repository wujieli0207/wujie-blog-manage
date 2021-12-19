import { ref } from "vue";

const useState = () => {
  const addVisible = ref(false);
  return { addVisible };
};
export default useState;
