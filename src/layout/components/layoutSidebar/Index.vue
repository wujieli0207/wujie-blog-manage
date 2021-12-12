<template>
  <div class="sidebar">
    <!-- logo -->
    <div class="sidebar__logo">
      <el-avatar shape="square" size="large" :src="avatar" />
      <div class="sidebar__logo-name">博客管理后台</div>
    </div>
    <!-- 侧边菜单栏 -->
    <el-menu>
      <!-- 支持一级菜单栏 -->
      <template v-for="item in sidebarItems">
        <!-- 不包含二级菜单 -->
        <template v-if="!item.secondItem">
          <el-menu-item :key="item.index" :index="item.index">
            <template #title>
              <Icon :icon="item.icon" />
              {{ item.title }}
            </template>
          </el-menu-item>
        </template>
        <!-- 包含二级标签菜单 -->
        <template v-if="item.secondItem">
          <el-sub-menu :key="item.index" :index="item.index">
            <template #title>
              <Icon :icon="item.icon" />
              {{ item.title }}
            </template>

            <template v-for="secItem in item.secondItem">
              <!-- 不包含三级标签 -->
              <template v-if="!secItem.thirdItem && secItem">
                <el-menu-item :key="secItem.index" :index="secItem.index">
                  <template #title>
                    <Icon :icon="secItem.icon" />
                    {{ secItem.title }}
                  </template>
                </el-menu-item>
              </template>

              <!-- 包含三级标签 -->
              <template v-if="secItem.thirdItem && secItem">
                <el-sub-menu :key="secItem.index" :index="secItem.index">
                  <template #title>
                    <Icon :icon="secItem.icon" />
                    {{ secItem.title }}
                  </template>
                  <template v-for="thiItem in secItem.thirdItem">
                    <el-menu-item v-if="thiItem" :key="thiItem.index" :index="thiItem.index">
                      <template #title>
                        <Icon :icon="thiItem.icon" />
                        {{ thiItem.title }}
                      </template>
                    </el-menu-item>
                  </template>
                </el-sub-menu>
              </template>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import avatar from "/@/assets/images/avatar.jpg";
  import { Icon } from "@iconify/vue";
  import useState from "./hooks/useState";
  export default defineComponent({
    name: "layoutSidebar",
    components: {
      Icon,
    },
    setup: (props, context) => {
      const { sidebarItems } = useState();
      return {
        avatar,
        sidebarItems,
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
