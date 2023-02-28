<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
      <nav class="flex justify-between">
        <strong>Socket.IO</strong>
        <el-link type="primary" target="_blank" href="https://socket.io/zh-CN/">官网</el-link>
      </nav>
    </template>
    <main class="w-full h-4/5 overflow-y-auto">
      <template v-for="(item,index) in message" :key="index">
        <nav v-if="item.flag" class="flex mb-1 items-center justify-end">
          <strong class="mr-2">{{item.value}}</strong>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
        </nav>
        <nav v-else class="flex mb-1 items-center justify-start">
          <el-avatar class="mr-2" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
          <strong>{{item.value}}</strong>
        </nav>
      </template>
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
let value = shallowRef()

// 向服务器发送消息
let message = ref([])
const handleSend = () => {
  message.value.push({flag:true,value:value.value})
  socket.emit("message", value.value);
}
socket.on("server", (args) => {
  message.value.push({flag:false,value:args})
});

</script>

<style scoped lang="less">

</style>
