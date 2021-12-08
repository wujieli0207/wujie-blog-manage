<template>
  <el-pagination
    background
    v-bind="$attrs"
    :onSizeChange="handleSizeChange"
    :onCurrentChange="handleCurrentChange"
    :current-page="pagination.page"
    :page-size="pagination.pageSize"
    :total="pagination.total"
    :layout="layout"
    :page-sizes="pageSizes"
  />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "BasicPagination",
    props: {
      pagination: {
        type: Object,
        default: () => ({
          page: 1,
          pageSize: 10,
          total: 100,
        }),
      },
      layout: {
        type: String,
        default: "prev, pager, next, jumper, ->, total",
      },
      pageSizes: {
        type: Array,
        default: () => [10, 20, 50],
      },
    },
    setup: (props, context) => {
      /**
       * @description 改变每页个数
       */
      const handleSizeChange = (pageSize: string): void => {
        context.emit("pagingChange", {
          type: "pageSize",
          val: pageSize,
        });
      };

      /**
       * @description 改变每页个数
       */
      const handleCurrentChange = (page: string): void => {
        context.emit("pagingChange", {
          type: "pageSize",
          val: page,
        });
      };

      return {
        handleSizeChange,
        handleCurrentChange,
      };
    },
  });
</script>
