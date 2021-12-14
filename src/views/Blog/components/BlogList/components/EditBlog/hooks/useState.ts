import { ref } from "vue";
import { IBlogProp } from "../../../type";
import { blogStateEnum } from "/@/enums/blogEnum";

const useState = () => {
  const form = ref<IBlogProp>({
    blogId: "",
    blogTitle: "",
    blogAbstract: "",
    blogBanner: "",
    blogState: blogStateEnum.edit,
  });
  return { form };
};
export default useState;
