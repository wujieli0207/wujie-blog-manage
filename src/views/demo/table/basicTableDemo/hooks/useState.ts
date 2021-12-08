import { reactive } from "vue";
import { IBasicColumnProp } from "/@/components/BasicTable/type";

const useState = () => {
  const columns: IBasicColumnProp[] = reactive([
    {
      prop: "id",
      label: "ID",
      width: 55,
      align: "center",
    },
    {
      prop: "name",
      label: "用户名",
      width: 200,
      align: "center",
    },
    {
      prop: "money",
      label: "账户余额",
      width: 300,
      align: "center",
    },
    {
      prop: "",
      label: "头像（查看大图）",
      width: 150,
      slot: {
        body: "thumb",
      },
    },
    { prop: "address", label: "地址", width: 200 },
    {
      prop: "state",
      label: "状态",
      width: 100,
      slot: {
        body: "state",
      },
    },
    { prop: "date", label: "注册时间", width: 100 },
  ]);

  return {
    columns,
  };
};

export default useState;
