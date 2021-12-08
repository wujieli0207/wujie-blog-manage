import { IWebFormField } from "/@/components/WebForm/type";

const useFormField = () => {
  const formField: IWebFormField[] = [
    {
      value: "name",
      label: "姓名",
      type: "input",
      require: true,
      placeholder: "请输入姓名",
      other: {
        style: "width: 150px",
      },
    },
    {
      value: "grade",
      label: "年级",
      type: "select",
      require: true,
      placeholder: "请输入选择年级",
      selectValue: "value",
      selectLabel: "label",
      options: [
        {
          value: "1",
          label: "一年级",
        },
        {
          value: "2",
          label: "二年级",
        },
        {
          value: "3",
          label: "三年级",
        },
      ],
    },
    {
      value: "date",
      label: "入校时间",
      type: "date",
      require: true,
      placeholder: "请选择入校时间",
      other: {
        type: "daterange",
        format: "YYYY/MM/DD",
        "value-format": "YYYY/MM/DD",
      },
    },
    {
      value: "pass",
      label: "是否及格",
      type: "radio",
      require: true,
      selectValue: "value",
      selectLabel: "label",
      options: [
        {
          value: "0",
          label: "没及格",
        },
        {
          value: "1",
          label: "及格",
        },
      ],
    },
    {
      value: "hobby",
      label: "爱好",
      type: "checkbox",
      require: false,
      selectValue: "value",
      selectLabel: "label",
      options: [
        {
          value: "basketball",
          label: "篮球",
        },
        {
          value: "football",
          label: "足球",
        },
        {
          value: "pingpang",
          label: "乒乓球",
        },
      ],
    },
    {
      value: "desc",
      label: "简介",
      type: "textarea",
      require: false,
      placeholder: "请输入简介",
      other: {
        style: "width: 300px",
      },
    },
    {
      value: "isPass",
      label: "是否公开",
      type: "switch",
      require: true,
    },
  ];
  return { formField };
};

export default useFormField;
