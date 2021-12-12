<template>
  <div class="layout">
    <div class="layout__left">
      <layout-sidebar />
    </div>
    <div class="layout__right">
      <layout-header />
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import LayoutHeader from "./components/layoutHeader/Index.vue";
  import LayoutSidebar from "./components/layoutSidebar/Index.vue";
  export default defineComponent({
    name: "Layout",
    components: {
      LayoutHeader,
      LayoutSidebar,
    },
  });
</script>
<style lang="scss" scoped>
  .layout {
    display: flex;
    width: 100vw;
    height: 100vh;

    .layout__left {
      width: 15vw;
    }

    .layout__right {
      width: 100%;
    }
  }
</style>
