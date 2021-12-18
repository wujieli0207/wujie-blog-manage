import { ElMessage } from "element-plus";

const useMessage = () => {
  const info = (msg: string) => {
    ElMessage.info(msg);
  };

  const success = (msg: string) => {
    ElMessage.success(msg);
  };

  const error = (msg: string) => {
    ElMessage.error(msg);
  };
  return { info, success, error };
};

export default useMessage;
