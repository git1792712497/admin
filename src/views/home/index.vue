<template>
  <el-card ref="dom" :body-style="{height:'100%'}" shadow="hover" style="height: 100%;">
    <template #header>

    </template>
    <Loading>
      <template v-slot:icon>
        aaaaa
      </template>
    </Loading>
  </el-card>
</template>
<script lang="ts" setup>
import Loading from './Loading.vue'
</script>
<style>

</style>
