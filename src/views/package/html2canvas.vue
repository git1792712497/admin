<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
        <nav class="flex justify-between">
          <el-button type="primary" @click="handleClick">截屏</el-button>
          <el-link type="primary" target="_blank" href="https://html2canvas.hertzen.com/">html2canvas</el-link>
        </nav>
    </template>
    <main class="w-80 h-80 bg-blue-200" id="html2canvas-box">

    </main>
  </el-card>
</template>

<script setup lang="ts" name="html2canvas">
import html2canvas from "html2canvas";
import type {Options} from 'html2canvas'

// 生成快照
const convertToImage = (container, options?: Options) => {
  // 设置放大倍数
  const scale = window.devicePixelRatio;

  // 传入节点原始宽高
  const width = container.offsetWidth;
  const height = container.offsetHeight;

  // html2canvas配置项
  const ops = {
    scale,
    width,
    height,
    useCORS: true,//表示允许跨域资源共享,注意不能与 allowTaint 同时配置为 true
    allowTaint: false,
    ...options
  };

  return html2canvas(container, ops).then(canvas => {
    // 返回图片的二进制数据
    return canvas.toDataURL("image/png");
  });
}

// 调用函数，取到截图的二进制数据，对图片进行处理（保存本地、展示等）
// 截图不全 => 截图之前将页面滚动到顶部

const handleClick = async () => {
  const imgBlobData = await convertToImage(document.querySelector('#html2canvas-box'));
  console.log(imgBlobData)
}
</script>

<style scoped lang="less">

</style>
