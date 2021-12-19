import { EBlogState } from "/@/enums/blogEnum";

export interface IBlogProp {
  blogId: string;
  blogTitle: string;
  blogAbstract: string;
  blogBanner: string;
  blogState: EBlogState;
  mdArticle: string;
  htmlArticle: string;
}
