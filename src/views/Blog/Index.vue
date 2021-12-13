<template>
  <div class="blog">
    <div class="blog__btn">
      <el-button type="primary">查询</el-button>
      <el-button type="primary">新增</el-button>
    </div>
    <div class="blog_list"><blog-list /></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import BlogList from "./components/BlogList/Index.vue";
  export default defineComponent({
    name: "Blog",
    components: {
      BlogList,
    },
    // setup: (props, context) => {},
  });
</script>

<style scoped lang="scss">
  .blog__btn {
    margin-bottom: 2vh;
  }
</style>
