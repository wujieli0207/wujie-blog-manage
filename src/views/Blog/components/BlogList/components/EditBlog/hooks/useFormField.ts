import { IWebFormField } from "/@/components/WebForm/type";

const useFormField = () => {
  const formField: IWebFormField[] = [
    {
      value: "blogId",
      label: "博客编号",
      type: "input",
      require: false,
    },
    {
      value: "blogTitle",
      label: "博客标题",
      type: "input",
      require: true,
    },
    {
      value: "blogAbstract",
      label: "博客摘要",
      type: "textarea",
      require: true,
    },
    {
      value: "blogBanner",
      label: "博客封面",
      type: "textarea",
      require: true,
    },
    {
      value: "blogState",
      label: "博客状态",
      type: "radio",
      require: true,
      selectValue: "value",
      selectLabel: "label",
      options: [
        {
          value: "0",
          label: "未发布",
        },
        {
          value: "1",
          label: "已发布",
        },
      ],
    },
  ];
  return { formField };
};
export default useFormField;
