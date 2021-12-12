import { MockMethod } from "vite-plugin-mock";

const menuList = [
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
];

export default [
  {
    url: "/api/menu/getMenuList",
    method: "get",
    response: () => {
      return {
        code: 1, // 1-查询成功
        data: { menuList },
      };
    },
  },
] as MockMethod[];
