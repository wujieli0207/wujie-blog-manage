import { ref, reactive } from "vue";
import { ILoginInfo } from "../type";

const useState = () => {
  const loginRef = ref(null);

  const loginInfo = reactive<ILoginInfo>({
    userName: "wujieli",
    password: "123456",
  });

  const loginRules = {
    userName: {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
    password: {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  };
  return { loginRef, loginInfo, loginRules };
};
export default useState;
