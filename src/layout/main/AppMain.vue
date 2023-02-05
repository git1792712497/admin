<template>
  <el-scrollbar noresize>
    <router-view v-slot="{Component,route}">
      <transition appear mode="out-in" name="el-zoom-in-bottom">
        <keep-alive :include="menu.keepAliveRouter">
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </el-scrollbar>
</template>

<script lang="ts" name="AppMain" setup>
import {menuStore} from "@/store/modules/menu";
const menu = menuStore()
</script>

