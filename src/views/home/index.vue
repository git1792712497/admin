<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>

    </template>

    {{$foo}}
    <Loading/>
  </el-card>
</template>

<script lang="ts" setup>
import Loading from './Loading.vue'

</script>
