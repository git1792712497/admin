<template>
  <div>
    <el-button type="primary" @click="handle">按钮</el-button>
  </div>
</template>

<script setup>

import {ElMessage} from "element-plus";


const handle = () => {
  ElMessage.success('唱歌')
}
</script>

<style scoped>

</style>