<template>
  <div class="pb-4">
    <el-button type="primary">查询</el-button>
    <el-button type="primary" @click="handleAddBlog">新增</el-button>
  </div>
  <blog-list />
  <el-dialog v-model="addVisible">
    <edit-blog v-model:visible="addVisible" />
  </el-dialog>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import useState from "./hooks/useState";
  import BlogList from "./components/BlogList/Index.vue";
  import EditBlog from "./components/EditBlog/Index.vue";
  export default defineComponent({
    name: "Blog",
    components: {
      BlogList,
      EditBlog,
    },
    setup: (props, context) => {
      const { addVisible } = useState();

      /**
       * @description 新增博客
       */
      const handleAddBlog = () => {
        addVisible.value = true;
      };

      return {
        addVisible,
        handleAddBlog,
      };
    },
  });
</script>
