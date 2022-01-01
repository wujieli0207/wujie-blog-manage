<template>
  <router-view>
    <template #default="{ Component, route }">
      <transition>
        <!-- TODO 实现路由基础跳转 -->
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </template>
  </router-view>
</template>

<script lang="ts" setup></script>
