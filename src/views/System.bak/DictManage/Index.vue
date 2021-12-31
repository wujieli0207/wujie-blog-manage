<template>
  <div>
    <basic-table :columns="columns" :data="dictList" :show-paging="true">
      <template #handle="scope">
        <el-button type="text" @click="handleDict(scope.data.id, 'edit')">编辑</el-button>

        <el-button type="text" @click="handleDict(scope.data.id, 'delete')"
          ><span class="text-red-500">删除</span></el-button
        >
      </template>
    </basic-table>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from "vue";
  import axios from "axios";
  import BasicTable from "/@/components/BasicTable/index.vue";
  import useState from "./hooks/useState";
  export default defineComponent({
    name: "DictManage",
    components: {
      BasicTable,
    },
    setup: (props, context) => {
      const { columns, dictList } = useState();

      onMounted(() => {
        loadBlogList();
      });

      /**
       * @description 加载博客列表
       */
      const loadBlogList = () => {
        axios.get("/api/dict/findAll").then((res) => {
          if (res.data.code === 0) {
            dictList.value = res.data.data.list;
          }
        });
      };

      const handleDict = (blogId: string, handle: "edit" | "delete"): void => {
        if (handle === "edit") {
          console.log("blogId: ", blogId);
        }
        if (handle === "delete") {
          axios.post(`/api/dict/remove/${blogId}`).then((res) => {
            if (res.data.code === 0) {
              loadBlogList();
            }
          });
        }
      };

      return {
        columns,
        dictList,
        handleDict,
      };
    },
  });
</script>
