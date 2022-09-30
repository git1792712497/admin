<template>
  <router-view v-slot="{Component,route}">
    <transition appear mode="out-in" name="el-zoom-in-bottom">
      <keep-alive :include="keepAliveList">
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" name="content" setup>
import {keepAliveList} from '@/router'
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
}
</style>
