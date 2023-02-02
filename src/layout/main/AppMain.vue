<template>
  <router-view v-slot="{Component,route}">
    <transition appear mode="out-in" name="el-zoom-in-bottom">
      <keep-alive :include="keepAliveList">
        <el-scrollbar>
          <component :is="Component"></component>
        </el-scrollbar>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" name="AppMain" setup>
import { keepAliveList } from '@/router/utils/handleRouter'
</script>

