<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
      <nav class="flex justify-between">
        <strong>Socket.IO</strong>
        <el-link type="primary" target="_blank" href="https://socket.io/zh-CN/">官网</el-link>
      </nav>
    </template>
    <main class="w-full h-3/5 overflow-y-auto p-4 box-border shadow-md">
      <template v-for="(item,index) in message" :key="index">
        <nav v-if="item.flag" class="flex mb-1 items-center justify-end">
          <strong class="mr-2 message myself">{{item.value}}</strong>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
        </nav>
        <nav v-else class="flex mb-1 items-center justify-start">
          <el-avatar class="mr-2" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
          <strong class="message">{{item.value}}</strong>
        </nav>
      </template>
    </main>
    <footer class="mt-8">
      <el-input v-model="value" type="textarea" :rows="4" maxlength="300" show-word-limit placeholder="请输入内容"></el-input>
      <el-button class="mt-4" type="primary" @click="handleSend">发送</el-button>
    </footer>
  </el-card>
</template>

<script setup lang="ts" name="socket.IO">
import { io } from "socket.io-client";
const socket = io(import.meta.env.VITE_SOCKET);
let value = shallowRef()

// 向服务器发送消息
let message = ref([
  {
    value:'在另一个浏览器打开此页面即可开始聊天!',
    flag:true
  },
  {
    value:'嗨喽,你好鸭!',
    flag:false
  }
])
const handleSend = () => {
  message.value.push({flag:true,value:value.value})
  socket.emit("message", value.value);
  value.value = ''
}
socket.on("server", (args) => {
  message.value.push({flag:false,value:args})
});

</script>

<style scoped lang="less">
.message {
  background-color: #f0f2f5;
  margin-left: 8px;
  line-height: 32px;
  max-width: calc(100% - 100px);
  border-radius: 3px;
  display: inline-block;
  position: relative;
  padding: 0 12px;
  box-sizing: border-box;
}

.myself.message::before {
  border-right: 0;
  border-left: 6px solid #f0f2f5;
  left: unset;
  right: -6px;
}
.message::before {
  content: ' ';
  border-left: 0px solid #f0f2f5;
  border-top: 6px solid transparent;
  border-right: 6px solid #f0f2f5;
  border-bottom: 6px solid transparent;
  position: absolute;
  left: -6px;
  top: 12px;
}
</style>
