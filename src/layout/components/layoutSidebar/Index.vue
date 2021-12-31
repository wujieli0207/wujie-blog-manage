<template>
  <div class="sidebar">
    <!-- logo -->
    <div class="sidebar__logo">
      <el-avatar shape="square" size="large" :src="avatar" />
      <div class="sidebar__logo-name">博客管理后台</div>
    </div>
    <!-- 侧边菜单栏 -->
    <el-menu :collapse="appStore.isShowSidebar" :router="true">
      <!-- 支持一级菜单栏 -->
      <template v-for="item in sidebarItems" :key="item.index">
        <!-- 不包含二级菜单 -->
        <template v-if="!item.secondItem">
          <el-menu-item :route="item.index" :index="item.index">
            <template #title>
              <Icon :icon="item.icon" />
              {{ item.title }}
            </template>
          </el-menu-item>
        </template>
        <!-- 包含二级标签菜单 -->
        <template v-if="item.secondItem">
          <el-sub-menu :route="item.index" :index="item.index">
            <template #title>
              <Icon :icon="item.icon" />
              {{ item.title }}
            </template>

            <template v-for="secItem in item.secondItem" :key="secItem.index">
              <!-- 不包含三级标签 -->
              <template v-if="!secItem.thirdItem && secItem">
                <el-menu-item :route="secItem.index" :index="secItem.index">
                  <template #title>
                    <Icon :icon="secItem.icon" />
                    {{ secItem.title }}
                  </template>
                </el-menu-item>
              </template>

              <!-- 包含三级标签 -->
              <template v-if="secItem.thirdItem && secItem">
                <el-sub-menu :route="secItem.index" :index="secItem.index">
                  <template #title>
                    <Icon :icon="secItem.icon" />
                    {{ secItem.title }}
                  </template>
                  <template v-for="thiItem in secItem.thirdItem" :key="thiItem.indexs">
                    <el-menu-item v-if="thiItem" :route="thiItem.index" :index="thiItem.index">
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
  import { defineComponent, onMounted } from "vue";
  import avatar from "/@/assets/images/avatar.jpg";
  import { Icon } from "@iconify/vue";
  import useState from "./hooks/useState";
  import { useAppStore } from "/@/store/modules/app";
  import axios from "axios";
  export default defineComponent({
    name: "layoutSidebar",
    components: {
      Icon,
    },
    setup: (props, context) => {
      const { sidebarItems } = useState();
      const appStore = useAppStore();

      onMounted(() => {
        loadSidebar();
      });

      /**
       * @description 加载侧边菜单栏
       */
      const loadSidebar = (): void => {
        // axios.get("/api/menu/getMenuList").then((res) => {
        //   sidebarItems.value = res.data.data.menuList;
        // });

        sidebarItems.value = [
          {
            icon: "ant-design:home-outlined",
            index: "/home",
            title: "系统首页",
          },
          {
            icon: "ic:outline-article",
            index: "/blog",
            title: "博客管理",
          },
          {
            icon: "iconoir:profile-circled",
            index: "/personalCenter",
            title: "个人中心",
          },
          {
            index: "system",
            title: "系统管理",
            secondItem: [
              {
                index: "/dictManage",
                title: "字典管理",
              },
            ],
          },
          {
            index: "4",
            title: "一级菜单示例",
            secondItem: [
              {
                index: "4.1",
                title: "二级菜单",
              },
              {
                index: "4.2",
                title: "三级菜单示例",
                thirdItem: [
                  {
                    index: "4.2.1",
                    title: "三级菜单1",
                  },
                  {
                    index: "4.2.2",
                    title: "三级菜单2",
                  },
                ],
              },
            ],
          },
          {
            index: "5",
            title: "编辑器示例",
            icon: "el:file-edit",
            secondItem: [
              {
                index: "/markdownEditor",
                title: "markdown 编辑器",
              },
            ],
          },
        ];
      };
      return {
        avatar,
        sidebarItems,
        appStore,
        loadSidebar,
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
