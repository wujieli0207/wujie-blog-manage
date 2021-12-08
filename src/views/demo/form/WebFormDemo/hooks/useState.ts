import { ref } from "vue";

const useState = () => {
  const form = ref({
    name: "",
    grade: "",
    date: "",
    pass: "0",
    hobby: [],
    desc: [],
    isPublic: "0",
  });
  return { form };
};

export default useState;
