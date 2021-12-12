import { ref, reactive } from "vue";
import type { ISidebarItem } from "../type";

const useState = () => {
  const sidebarItems = ref<ISidebarItem[]>([
    {
      icon: "ant-design:home-outlined",
      index: "/home",
      title: "系统首页",
    },
    {
      icon: "ic:outline-article",
      index: "2",
      title: "博客管理",
      secondItem: [
        {
          index: "/blogList",
          title: "博客列表",
        },
        {
          index: "/blogEdit",
          title: "博客编辑",
        },
      ],
    },
    {
      icon: "iconoir:profile-circled",
      index: "/profile",
      title: "个人中心",
    },
    {
      icon: "ic:outline-article",
      index: "4",
      title: "一级菜单示例",
      secondItem: [
        {
          index: "4.1",
          title: "二级菜单",
        },
        {
          index: "4.2",
          title: "三级菜单示例",
          thirdItem: [
            {
              index: "4.2.1",
              title: "三级菜单1",
            },
            {
              index: "4.2.2",
              title: "三级菜单2",
            },
          ],
        },
      ],
    },
  ]);
  return { sidebarItems };
};
export default useState;
