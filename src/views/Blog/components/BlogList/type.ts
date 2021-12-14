import { blogStateEnum } from "/@/enums/blogEnum";

export interface IBlogProp {
  blogId: string;
  blogTitle: string;
  blogAbstract: string;
  blogBanner: string;
  blogState: blogStateEnum;
}
