<template>
  <el-card shadow="hover">
    <template #header>
      <el-button type="primary" @click="handleClick">跳转按钮</el-button>
    </template>
  </el-card>
</template>
<script lang="ts" setup name="test">

import {useRouter} from "vue-router";

const router = useRouter()
const handleClick = () => {
  router.push({
    path:`/directives/test6666/deep/detail`,
    query:{
      aa:'a'
    }
  })
}
</script>
<style scoped lang="less"></style>
