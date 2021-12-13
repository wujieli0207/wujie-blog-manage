import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";

const blogListNum = 6;
const blogList = [];

for (let i = 0; i < blogListNum; i++) {
  blogList.push(
    Mock.mock({
      blogId: i,
      blogTitle: "@ctitle(15)",
      blogAbstract: "@cword(100)",
      blogBanner: Mock.Random.image("800x600"),
      blogState: "已发布",
    })
  );
}

export default [
  {
    url: "/api/blog/getBlogList",
    method: "get",
    response: () => {
      return {
        code: 1, // 1-查询成功
        data: { blogList },
      };
    },
  },
] as MockMethod[];
