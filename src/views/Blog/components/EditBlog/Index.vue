<template>
  <div>
    <web-form :form-field="formField" v-model="form" />
  </div>
  <div>
    <el-button type="primary">预览博客</el-button>
    <markdown v-model:value="form.mdArticle" />
  </div>
  <div class="pl-0 pr-4 pt-4">
    <el-button type="primary" @click="submitBlogForm">提交</el-button>
    <el-button type="primary">取消</el-button>
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
      },
      visible: {
        type: Boolean,
        required: true,
      },
    },
    setup: (props, context) => {
      const { form } = useState();
      const { formField } = useFormField();

      onMounted(() => {
        if (props.blogId) {
          loadBlogForm(props.blogId);
        }
      });

      /**
       * @description 加载表单信息
       */
      const loadBlogForm = (blogId: string) => {
        axios.get(`/api/blog/findOne/${blogId}`).then((res) => {
          console.log("res.data.data: ", res.data.data);
          if (res.data.code === 0) {
            form.value = res.data.data;
          }
        });
      };

      /**
       * @description 提交博客编辑信息
       */
      const submitBlogForm = (): void => {
        axios.post("/api/blog/create", { blogForm: form.value }).then((res: any) => {
          console.log("res: ", res);
          context.emit("update:visible", false);
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
