<template>
  <div v-html="getHtmlData" :class="$props.class" class="w-full"></div>
</template>

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import showdown from "showdown";
  export default defineComponent({
    name: "MarkdownViewer",
    props: {
      value: {
        type: String,
      },
      class: {
        type: String,
      },
    },
    setup: (props, context) => {
      const converter = new showdown.Converter();
      converter.setOption("tables", true);

      const getHtmlData = computed(() => converter.makeHtml(props.value || ""));
      return {
        getHtmlData,
      };
    },
  });
</script>
