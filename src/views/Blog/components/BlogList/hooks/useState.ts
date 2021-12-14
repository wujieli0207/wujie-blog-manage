import { ref } from "vue";
import { IBlogProp } from "../type";
import { IBasicColumnProp } from "/@/components/basicTable/type";

const useState = () => {
  const columns: IBasicColumnProp[] = [
    {
      prop: "blogId",
      label: "博客编号",
      width: 100,
      align: "center",
    },
    {
      prop: "blogTitle",
      label: "博客标题",
      width: 250,
      align: "center",
    },
    {
      prop: "blogAbstract",
      label: "博客摘要",
      width: 200,
      align: "center",
    },
    {
      prop: "blogBanner",
      label: "博客封面（查看大图）",
      width: 150,
      align: "center",
      slot: {
        body: "blogBanner",
      },
    },
    {
      prop: "blogState",
      label: "博客状态",
      width: 100,
      align: "center",
      slot: {
        body: "blogState",
      },
    },
    {
      prop: "handle",
      label: "操作",
      width: 300,
      align: "center",
      slot: {
        body: "handle",
      },
    },
  ];

  // 博客列表
  const blogList = ref<IBlogProp[]>([]);

  // 是否展示编辑框
  const editVisible = ref(false);

  // 已选中的博客Id
  const selectedBlogId = ref("");

  return { columns, blogList, editVisible, selectedBlogId };
};
export default useState;
