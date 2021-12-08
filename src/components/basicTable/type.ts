// Web 端表单参数配置项
export interface IBasicColumnProp {
  prop: string; // 属性
  label: string; // 标签
  width: number; // 宽度
  align?: "left" | "center" | "right"; // 位置
  slot?: any; // 插槽
}
