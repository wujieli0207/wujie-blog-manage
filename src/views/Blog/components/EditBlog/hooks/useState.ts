import { ref } from "vue";
import { IBlogProp } from "../../../type";
import { EBlogState } from "/@/enums/blogEnum";

const useState = () => {
  const form = ref<IBlogProp>({
    blogId: "",
    blogTitle: "",
    blogAbstract: "",
    blogBanner: "",
    blogState: EBlogState.edit,
    mdArticle: "",
    htmlArticle: "",
  });
  return { form };
};
export default useState;
