<template>
  <div class="sidebar">
    <!-- logo -->
    <div class="sidebar__logo">
      <el-avatar shape="square" size="large" :src="avatar" />
      <div class="sidebar__logo-name">博客管理后台</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import avatar from "/@/assets/images/avatar.jpg";
  export default defineComponent({
    name: "layoutSidebar",
    setup: (props, context) => {
      return {
        avatar,
      };
    },
  });
</script>

<style scoped lang="scss">
  .sidebar {
    .sidebar__logo {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 8vh;
      background-color: $--color-backbround;

      .sidebar__logo-name {
        font-size: 1.1rem;
        font-weight: 600;
        color: $--color-white;
      }
    }
  }
</style>
