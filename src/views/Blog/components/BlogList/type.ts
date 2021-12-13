import { blogStateEnum } from "/@/enums/blogEnum";

export interface IBlogList {
  blogId: number | string;
  blogTitle: string;
  blogAbstract: string;
  blogBanner: string;
  // blogState: "编辑中" | "已发布";
  blogState: blogStateEnum;
}
