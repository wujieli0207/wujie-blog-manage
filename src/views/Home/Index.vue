<template>
  <div class="home">
    <page-view />
    <github-submit />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import PageView from "./components/PageView/Index.vue";
  import GithubSubmit from "./components/GithubSubmit/Index.vue";
  export default defineComponent({
    name: "Home",
    components: {
      PageView,
      GithubSubmit,
    },
    // setup: (props, context) => {},
  });
</script>

<!-- <style scoped lang="scss"></style> -->
