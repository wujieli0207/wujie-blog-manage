import { IWebFormField } from "/@/components/WebForm/type";
import { EFormType } from "/@/enums/componentEnum";

const useFormField = () => {
  const formField: IWebFormField[] = [
    {
      value: "blogId",
      label: "博客编号",
      type: EFormType.INPUT,
      require: false,
      other: {
        disabled: true,
      },
    },
    {
      value: "blogTitle",
      label: "博客标题",
      type: EFormType.INPUT,
      require: true,
    },
    {
      value: "blogAbstract",
      label: "博客摘要",
      type: EFormType.TEXTAREA,
      require: true,
    },
    {
      value: "blogBanner",
      label: "博客封面",
      type: EFormType.UPLOAD,
      require: true,
    },
    {
      value: "blogState",
      label: "博客状态",
      type: EFormType.RADIO,
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
