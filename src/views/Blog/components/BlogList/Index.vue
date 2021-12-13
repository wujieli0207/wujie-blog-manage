<template>
  <div class="blog-list">
    <basic-table :columns="columns" :data="blogList" :allow-select="true" :show-paging="true">
      <template #blogState="scope">
        <el-tag
          :type="
            scope.data.blogState === '已发布'
              ? 'success'
              : scope.date.blogState === '未发布'
              ? 'danger'
              : ''
          "
          >{{ scope.data.blogState }}
        </el-tag>
      </template>
      <template #blogBanner="scope">
        <el-image
          class="table-tdthumb"
          :src="scope.data.blogBanner"
          :preview-src-list="[scope.data.blogBanner]"
        />
      </template>
      <!-- #handle="scope" -->
      <template>
        <el-button type="text">编辑属性</el-button>
        <el-button type="text">编辑文章</el-button>
        <el-button type="text" class="red">删除</el-button>
      </template>
    </basic-table>
  </div>
</template>

<script lang="ts">
  import axios from "axios";
  import { defineComponent, onMounted } from "vue";
  import useState from "./hooks/useState";
  import BasicTable from "/@/components/BasicTable/index.vue";
  export default defineComponent({
    name: "BlogList",
    components: {
      BasicTable,
    },
    setup: () => {
      const { columns, blogList } = useState();

      onMounted(() => {
        loadBlogList();
      });

      const loadBlogList = () => {
        axios.get("/api/blog/getBlogList").then((res) => {
          blogList.value = res.data.data.blogList;
        });
      };

      return {
        columns,
        blogList,
      };
    },
  });
</script>

<style scoped lang="scss">
  .red {
    color: $--color-red;
  }
</style>
