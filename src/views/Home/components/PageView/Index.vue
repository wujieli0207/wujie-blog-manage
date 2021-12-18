<template>TODO 博客访问量柱状图</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import useState from "./hooks/useState";
  export default defineComponent({
    name: "PageView",
    setup: (props, context) => {
      const { pageViewRef } = useState();

      return {
        pageViewRef,
      };
    },
  });
</script>
