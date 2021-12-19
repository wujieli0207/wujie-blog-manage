<template>
  <el-card header="Markdown 编辑器">
    <h1></h1>
    <markdown ref="markdownRef" v-model:value="markdownValue" />
  </el-card>
  <el-card header="Markdown 转 HTML 效果演示">
    <markdown-viewer :value="markdownValue" />
  </el-card>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Markdown, MarkdownViewer, MarkDownActionType } from "/@/components/Markdown";
  export default defineComponent({
    name: "Markdown",
    components: {
      Markdown,
      MarkdownViewer,
    },
    setup: (props, context) => {
      const markdownRef = ref<Nullable<MarkDownActionType>>(null);
      const markdownValue = ref("");

      return {
        markdownRef,
        markdownValue,
      };
    },
  });
</script>
