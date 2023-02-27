<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
      <nav class="flex justify-between">
        <strong>Socket.IO</strong>
        <el-link type="primary" target="_blank" href="https://socket.io/zh-CN/">官网</el-link>
      </nav>
    </template>
    <main class="w-full h-4/5 flex">
      <div class="w-2/4 border border-red-500 border-solid">

      </div>
      <div class="w-2/4 border border-red-500 border-solid">
        <el-timeline>
          <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp">
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </main>
    <footer class="flex justify-between mt-4">
      <el-input v-model="value" type="textarea" :rows="1" maxlength="300" show-word-limit placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="handleSend">发送</el-button>
    </footer>
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

const activities = [
  {
    content: 'Event start',
    timestamp: '2018-04-15',
  },
  {
    content: 'Approved',
    timestamp: '2018-04-13',
  },
  {
    content: 'Success',
    timestamp: '2018-04-11',
  },
]
</script>

<style scoped lang="less">

</style>
