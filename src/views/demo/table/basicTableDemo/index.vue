<template>
  <div class="basic-table-demo">
    <basic-table
      :columns="columns"
      :data="tableData"
      :allowSelect="true"
      :showPaging="true"
      @select="handleSelect"
      @pagingChange="handlePagingChange"
    >
      <template #state="scope">
        <el-tag
          :type="
            scope.data.state === '成功' ? 'success' : scope.data.state === '失败' ? 'danger' : ''
          "
        >
          {{ scope.data.state }}
        </el-tag>
      </template>
      <template #thumb="scope">
        <el-image
          class="table-tdthumb"
          :src="scope.data.thumb"
          :preview-src-list="[scope.data.thumb]"
        />
      </template>
    </basic-table>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import BasicTable from "/@/components/BasicTable/index.vue";
  import useState from "./hooks/useState";
  import useBasicTableData from "./hooks/useBasicTableData";
  import useBasicTable from "./hooks/useBasicTable";

  export default defineComponent({
    name: "BasicTableDemo",
    components: {
      BasicTable,
    },
    setup: () => {
      const { columns } = useState();
      const { tableData } = useBasicTableData();
      const { handleSelect, handlePagingChange } = useBasicTable();

      return {
        columns,
        tableData,
        handleSelect,
        handlePagingChange,
      };
    },
  });
</script>
