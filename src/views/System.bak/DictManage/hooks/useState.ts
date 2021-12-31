import { ref } from "vue";
import { IDictColumn } from "../type";
import { IBasicColumnProp } from "/@/components/BasicTable/type";

const useState = () => {
  const columns: IBasicColumnProp[] = [
    {
      prop: "dictType",
      label: "字典类型",
      width: 200,
      align: "center",
    },
    {
      prop: "dictCode",
      label: "字典编码",
      width: 200,
      align: "center",
    },
    {
      prop: "dictValue",
      label: "字典值",
      width: 200,
      align: "center",
    },
    {
      prop: "dictDesc",
      label: "字典描述",
      width: 300,
      align: "center",
    },
    {
      prop: "handle",
      label: "操作",
      width: 300,
      align: "center",
      slot: {
        body: "handle",
      },
    },
  ];

  // 博客列表
  const dictList = ref<IDictColumn[]>([]);
  return { columns, dictList };
};
export default useState;
