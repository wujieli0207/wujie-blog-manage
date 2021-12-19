<template>
  <div class="edit-blog">
    <div class="edit-blog__form">
      <web-form :form-field="formField" v-model="form" />
    </div>
    <div class="edit-blog__article-md">
      <markdown v-model:value="form.mdArticle" />
    </div>
    <div class="edit-blog_btn">
      <el-button type="primary" @click="submitBlogForm">提交</el-button>
      <el-button type="primary">取消</el-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from "vue";
  import axios from "axios";
  import WebForm from "/@/components/WebForm/index.vue";
  import useState from "./hooks/useState";
  import useFormField from "./hooks/useFormField";
  import { Markdown } from "/@/components/Markdown";
  export default defineComponent({
    name: "EditBlog",
    components: {
      WebForm,
      Markdown,
    },
    props: {
      blogId: {
        type: String,
        required: true,
      },
      editVisible: {
        type: Boolean,
        required: true,
      },
    },
    setup: (props, context) => {
      const { form } = useState();
      const { formField } = useFormField();

      onMounted(() => {
        loadBlogForm(props.blogId);
      });

      /**
       * @description 加载表单信息
       */
      const loadBlogForm = (blogId: string) => {
        axios.post("/api/blog/getBlogList", { blogId: blogId }).then((res) => {
          form.value = res.data.data.blogList;
          console.log("form.value: ", form.value);
        });
      };

      /**
       * @description 提交博客编辑信息
       */
      const submitBlogForm = (): void => {
        axios.post("/api/blog/submitBlogForm", { blogForm: form.value }).then((res: any) => {
          console.log("res: ", res);
          context.emit("update:editVisible", false);
        });
      };

      return {
        form,
        formField,
        submitBlogForm,
      };
    },
  });
</script>
