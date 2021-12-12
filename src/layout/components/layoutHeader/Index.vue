<template>
  <div class="header">
    <div class="header_left">
      <!-- 折叠按钮 -->
      <div
        class="header__left-collapse"
        @click="appStore.handleCollapse(!appStore.sidebarCollapse)"
      >
        <Icon class="collapse" v-if="appStore.sidebarCollapse" icon="line-md:menu-fold-left" />
        <Icon class="collapse" v-if="!appStore.sidebarCollapse" icon="line-md:menu-fold-right" />
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
  import { defineComponent, onMounted } from "vue";
  import { Icon } from "@iconify/vue";
  import useState from "./hooks/useState";
  import avatar from "/@/assets/images/avatar.jpg";
  import { useAppStore } from "/@/store/modules/app";
  export default defineComponent({
    name: "LayoutHeader",
    components: {
      Icon,
    },
    setup: () => {
      const { userInfo } = useState();
      const appStore = useAppStore();

      onMounted(() => {
        // 屏幕宽度小于 1500 折叠侧边栏
        if (document.body.clientWidth < 1500) {
          appStore.handleCollapse(!appStore.handleCollapse);
        }
      });

      return {
        avatar,
        userInfo,
        appStore,
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

    .header__left-collapse {
      display: flex;
      align-items: center;

      .collapse {
        width: 4vw;
        height: 4vh;
      }
    }

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
