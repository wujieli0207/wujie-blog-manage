<template>
  <div class="basic-table">
    <el-table
      border
      size="small"
      :data="data"
      :row-key="rowKey"
      v-bind="$attrs"
      :selection-change="handleSelectionChange"
    >
      <el-table-column v-if="allowSelect" type="selection" width="55"></el-table-column>
      <template v-for="item in columns">
        <el-table-column v-if="item.slot" v-bind="item" :key="item.prop">
          <template #header>
            <slot :name="item.slot.header">{{ item.label || "自定义header" }}</slot>
          </template>
          <template #default="scope">
            <slot :name="item.slot.body" :data="scope.row">{{
              scope.row[item.prop] || "需要自定义"
            }}</slot>
          </template>
        </el-table-column>
        <el-table-column v-if="!item.slot" v-bind="item" :key="item.prop"></el-table-column>
      </template>
    </el-table>

    <pagination v-if="showPaging" :pagination="pagination" @pagingChange="handlePagingChange" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from "vue";
  import { IBasicColumnProp } from "./type";
  import Pagination from "/@/components/BasicPagination/index.vue";

  export default defineComponent({
    name: "BasicTable",
    components: {
      Pagination,
    },
    props: {
      allowSelect: {
        type: Boolean,
        default: false,
      },
      columns: {
        type: Array as PropType<IBasicColumnProp[]>,
        default: () => [],
      },
      data: {
        type: Array,
        default: () => [],
      },
      rowKey: {
        type: String,
        default: "id",
      },
      showPaging: {
        type: Boolean,
        default: false,
      },
      pagination: {
        type: Object,
        default: () => ({
          page: 1,
          pageSize: 10,
          total: 100,
        }),
      },
    },
    setup: (props, context) => {
      let multipleSelection = [];

      /**
       * @description 获取已选择表格的数据
       */
      const handleSelectionChange = (val?: Array<any>): void => {
        multipleSelection = val;
        context.emit("select", multipleSelection);
      };

      /**
       * @description 获取翻页数据
       * TODO 翻页数据待添加
       */
      const handlePagingChange = (option: any): void => {
        context.emit("pagingChange", option);
      };

      return {
        handleSelectionChange,
        handlePagingChange,
      };
    },
  });
</script>
