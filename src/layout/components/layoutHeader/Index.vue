<template>
  <div class="header">
    <div class="header_left">
      <!-- 折叠按钮 -->
      <div class="header__left-collapse">
        <Icon icon="line-md:menu-fold-left" />
        <Icon icon="line-md:menu-fold-right" />
      </div>
    </div>
    <div class="header__right">
      <!-- 用户昵称、头像与下拉菜单 -->
      <el-dropdown>
        <div class="header__right-avator">
          <el-avatar size="medium" :src="avatar" />
          <div class="header__right-avator-name">{{ userInfo.userName }}</div>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import { Icon } from "@iconify/vue";
  import useState from "./hooks/useState";
  import avatar from "/@/assets/images/avatar.jpg";
  export default defineComponent({
    name: "LayoutHeader",
    components: {
      Icon,
    },
    setup: (props, context) => {
      const { isCollapse, userInfo } = useState();

      return {
        avatar,
        isCollapse,
        userInfo,
      };
    },
  });
</script>

<style scoped lang="scss">
  .iconify {
    color: $--color-white;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    background-color: $--color-backbround;

    .header__right-avator {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 2vw;

      .header__right-avator-name {
        margin: 0 1vw;
        color: $--color-white;
      }
    }
  }
</style>
