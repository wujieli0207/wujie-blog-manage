import { reactive } from "vue";
import { userInfo } from "/@/global/userTypes";

const useState = () => {
  const userInfo = reactive<userInfo>({
    userName: "wujieli",
    userAvatar: "",
  });
  return { userInfo };
};
export default useState;
