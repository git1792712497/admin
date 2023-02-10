<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>消息提示hooks</template>
    <el-button type="success" @click="handleSuccess">Success</el-button>
    <el-button type="info" @click="handleInfo">Info</el-button>
    <el-button type="warning" @click="handleWarning">Warning</el-button>
    <el-button type="danger" @click="handleError">error</el-button>
  </el-card>
</template>

<script setup lang="ts" name="message">
import useMessage from '@/hooks/useMessage'

const handleSuccess = () => {
  useMessage.success('success')
}

const handleInfo = () => {
  useMessage.info('info')
}

const handleWarning = () => {
  useMessage.warning('warning')
}

const handleError = () => {
  useMessage.error('error')
}
</script>

<style scoped lang="less">

</style>
