<template>
 <NuxtLayout name="default">
   <h1>nuxt3</h1>
 </NuxtLayout>
</template>


<script setup lang="ts">
import { useUserStore } from "~/store/user";

const nuxtApp = useNuxtApp()
if (process.client){
  console.log(nuxtApp.$formatTime())
}

const userStore = useUserStore()
const counter = useCounter()
</script>
