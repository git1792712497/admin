<template>
  <el-card shadow="hover">
    <template #header>
        <nav class="flex justify-between">
          <strong>音频处理</strong>
          <el-link type="primary" target="_blank" href="https://github.com/goldfire/howler.js">howler.js</el-link>
        </nav>
    </template>
    <el-button type="primary" @click="onPlay">播放</el-button>
    <el-button type="primary" @click="onStop">暂停</el-button>
  </el-card>
</template>

<script setup lang="ts" name="howler">
import {Howl, Howler} from 'howler';

// 查看按钮音效
// 创建实例
let howl = new Howl({
  html5:true,
  /* 音频路径 可用相对路径 */
  src: ['http://127.0.0.1:5174/src/assets/audio/music.mp3','https://music.163.com/song/media/outer/url?id=33894312.mp3'],
  /* 是否循环播放 默认为 false */
  autoplay: false,
  /* 是否循环播放 默认为 false */
  loop: false,
  /* 设置声音大小，从 0.0 到 1.0 */
  volume: 1,

})

function onPlay() {
  /* 暂停音效 */
  howl.play()
}

function onStop() {
  howl.stop()
}
</script>

<style scoped lang="less">

</style>