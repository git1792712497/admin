<template>
  <router-view v-slot="{Component,route}">
    <transition appear mode="out-in" name="el-zoom-in-bottom">
      <el-scrollbar>
        <keep-alive :include="menu.keepAliveRouter">
          <component :is="Component"></component>
        </keep-alive>
      </el-scrollbar>
    </transition>
  </router-view>
</template>

<script lang="ts" name="AppMain" setup>
import {menuStore} from "@/store/modules/menu";
const menu = menuStore()
</script>

