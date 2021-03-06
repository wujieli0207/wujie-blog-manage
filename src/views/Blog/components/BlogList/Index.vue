<template>
  <div class="blog-list">
    <basic-table :columns="columns" :data="blogList" :allow-select="true" :show-paging="true">
      <template #blogState="scope">
        <el-tag :type="scope.data.blogState === '已发布' ? 'success' : 'info'"
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
        <el-button type="text" @click="handleBlog(scope.data.blogId, 'editBLog')">编辑</el-button>
        <el-button type="text" @click="handleBlog(scope.data.blogId, 'editBLog')">预览</el-button>
        <el-button type="text" class="red" @click="handleBlog(scope.data.blogId, 'delete')"
          >删除</el-button
        >
      </template>
    </basic-table>
    <el-dialog v-model="editVisible">
      <edit-blog :blog-id="selectedBlogId" v-model:visible="editVisible" />
    </el-dialog>
  </div>
</template>

<script lang="ts">
  import axios from "axios";
  import { defineComponent, onMounted } from "vue";
  import { ElMessageBox } from "element-plus";
  import useMessage from "/@/hooks/elementPlus/useMessage";
  import useState from "./hooks/useState";
  import BasicTable from "/@/components/BasicTable/index.vue";
  import EditBlog from "../EditBlog/Index.vue";
  export default defineComponent({
    name: "BlogList",
    components: {
      BasicTable,
      EditBlog,
    },
    setup: () => {
      const { columns, blogList, editVisible, selectedBlogId } = useState();

      const message = useMessage();

      onMounted(() => {
        loadBlogList();
      });

      /**
       * @description 加载博客列表
       */
      const loadBlogList = () => {
        axios.get("/api/blog/findAll").then((res) => {
          if (res.data.code === 0) {
            blogList.value = res.data.data.list;
          }
        });
      };

      /**
       * @description 操作博客数据
       */
      const handleBlog = (blogId: string, action: "editBLog" | "delete") => {
        if (action === "editBLog") {
          editVisible.value = true;
          selectedBlogId.value = blogId;
        }
        if (action === "delete") {
          ElMessageBox.confirm("确定是否要删除吗？", "warning", {
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            type: "warning",
          })
            .then(() => {
              axios.post(`/api/blog/remove/${blogId}`).then((res) => {
                loadBlogList();
                message.success("删除成功");
              });
            })
            .catch(() => {
              message.success("删除失败，请联系管理员！");
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
