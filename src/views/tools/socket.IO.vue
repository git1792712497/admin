<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
      <nav class="flex justify-between">
        <strong>Socket.IO</strong>
        <el-link type="primary" target="_blank" href="https://socket.io/zh-CN/">官网</el-link>
      </nav>
    </template>

    <main class="flex justify-between">
      <el-input v-model="value"></el-input>
      <el-button type="primary" @click="handleSend">发送</el-button>
    </main>

  </el-card>
</template>

<script setup lang="ts" name="socket.IO">
import { io } from "socket.io-client";
const socket = io(import.meta.env.VITE_SOCKET);
import { ElMessage } from "element-plus";
let value = shallowRef()

const handleSend = () => {
  // 向服务器发送消息
  socket.emit("hello", value.value);
}

// 从服务器接收消息
socket.on("hello from server", (...args) => {
  ElMessage({
    type:'success',
    message:args.flat(1)[0]
  })
});
</script>

<style scoped lang="less">

</style>
