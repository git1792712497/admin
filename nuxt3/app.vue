<template>
 <NuxtLayout name="default">
   <NuxtPage/>
   <el-button type="primary">按钮</el-button>
 </NuxtLayout>
</template>


<script setup lang="ts">
import {ElButton} from "element-plus";
import { useUserStore } from "~/store/user";

const nuxtApp = useNuxtApp()
if (process.client){
  console.log(nuxtApp.$formatTime())
}

const userStore = useUserStore()
const counter = useCounter()
</script>
