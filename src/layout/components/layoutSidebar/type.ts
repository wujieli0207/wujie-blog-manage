// 菜单栏基础内容
export type ISidebarItem = {
  index: string; // 路由或二级标题索引
  title: string; // 标题
  icon?: string;
  secondItem?: ISidebarItem[]; // 二级菜单内容
  thirdItem?: ISidebarItem[]; // 三级级菜单内容
};
