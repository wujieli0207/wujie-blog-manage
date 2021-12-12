import { ref, reactive } from "vue";
import { userInfo } from "/@/types/userTypes";

const useState = () => {
  const isCollapse = ref(false);
  const userInfo = reactive<userInfo>({
    userName: "wujieli",
    userAvatar: "",
  });
  return { isCollapse, userInfo };
};
export default useState;
