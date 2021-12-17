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
      <template #handle="scope">
        <el-button type="text" @click="handleBlog(scope.data.blogId, 'editProp')"
          >编辑属性</el-button
        >
        <el-button type="text" @click="handleBlog(scope.data.blogId, 'editArticle')"
          >编辑文章</el-button
        >
        <el-button type="text" class="red" @click="handleBlog(scope.data.blogId, 'delete')"
          >删除</el-button
        >
      </template>
    </basic-table>
    <el-dialog v-model="editVisible">
      <edit-blog :blog-id="selectedBlogId" v-model:editVisible="editVisible" />
    </el-dialog>
  </div>
</template>

<script lang="ts">
  import axios from "axios";
  import { defineComponent, onMounted } from "vue";
  import { ElMessage, ElMessageBox } from "element-plus";
  import useState from "./hooks/useState";
  import BasicTable from "/@/components/BasicTable/index.vue";
  import EditBlog from "./components/EditBlog/Index.vue";
  export default defineComponent({
    name: "BlogList",
    components: {
      BasicTable,
      EditBlog,
    },
    setup: () => {
      const { columns, blogList, editVisible, selectedBlogId } = useState();

      onMounted(() => {
        loadBlogList();
      });

      /**
       * @description 加载博客列表
       */
      const loadBlogList = () => {
        axios.post("/api/blog/getBlogList").then((res) => {
          blogList.value = res.data.data.blogList;
        });
      };

      /**
       * @description 操作博客数据
       */
      const handleBlog = (blogId: string, action: "editProp" | "editArticle" | "delete") => {
        if (action === "editProp") {
          editVisible.value = true;
          selectedBlogId.value = blogId;
        }
        if (action === "editArticle") {
          console.log("action: ", action);
          // axios.post("/api/blog/deleteBlog").then((res) => {
          //   blogList.value = res.data.data.blogList;
          // });
        }
        if (action === "delete") {
          ElMessageBox.confirm("确定是否要删除吗？", "提示", {
            type: "warning",
          })
            .then(() => {
              axios.post("/api/blog/deleteBlog", { blogId: blogId }).then((res) => {
                blogList.value = res.data.data.blogList;
                ElMessage.success("删除成功");
              });
            })
            .catch(() => {
              ElMessage.success("删除失败，请联系管理员！");
            });
        }
      };

      return {
        columns,
        blogList,
        editVisible,
        selectedBlogId,
        handleBlog,
      };
    },
  });
</script>

<style scoped lang="scss">
  .red {
    color: $--color-red;
  }
</style>
