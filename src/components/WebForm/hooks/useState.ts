import { ref } from "vue";

const useState = () => {
  const webFormRef = ref(null);

  return {
    webFormRef,
  };
};

export default useState;
