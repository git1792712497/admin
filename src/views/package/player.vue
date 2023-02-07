<template>
  <el-card :body-style="{height:'100%'}" shadow="hover" style="height: 100%;">
    <template #header>
      <nav class="flex justify-between">
        <strong>西瓜视频播放器</strong>
        <el-link href="https://v2.h5player.bytedance.com" target="_blank">西瓜视频</el-link>
      </nav>
    </template>
    <main id="player"></main>
  </el-card>
</template>

<script lang="ts" name="player" setup>
import Player from 'xgplayer'
onMounted(() => {
  let player = new Player({
    id: 'player',
    lang:'zh-cn',
    // 默认静音
    volume: 0,
    autoplay: false,
    url: "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4",
    //传入倍速可选数组
    playbackRate: [0.5, 0.75, 1, 1.5, 2, 3, 4, 5],
    fluid:false, //流体
    videoInit: true,
    download: true,
    pip: true,
  });
})
</script>

<style lang="less" scoped>

</style>
