<template>
  <div class="edit-blog">
    <div class="edit-blog__form">
      <web-form :form-field="formField" v-model="form" />
    </div>
    <div class="edit-blog_btn">
      <el-button type="primary">提交</el-button>
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
  export default defineComponent({
    name: "EditBlog",
    components: {
      WebForm,
    },
    props: {
      blogId: {
        type: String,
        required: true,
      },
    },
    setup: (props) => {
      const { form } = useState();
      const { formField } = useFormField();

      onMounted(() => {
        loadBlogForm(props.blogId);
      });

      const loadBlogForm = (blogId: string) => {
        console.log("blogId: ", blogId);
        axios.post("/api/blog/getBlogList", { blogId: blogId }).then((res) => {
          form.value = res.data.data.blogList;
          console.log("form.value: ", form.value);
        });
      };

      return {
        form,
        formField,
      };
    },
  });
</script>
