<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <strong>文件下载</strong>
        <el-link href="https://github.com/eligrey/FileSaver.js" target="_blank" type="primary">file-saver</el-link>
      </nav>
    </template>

    <el-button type="primary" @click="onText">文本下载</el-button>
  </el-card>
</template>

<script lang="ts" name="download" setup>
import FileSaver from "file-saver";


const onText = () => {
  const blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
  // 参数1：支持的类型：blob（二进制）、File（文件）、Url（url链接）
  // 参数2：文件类型
  FileSaver.saveAs(blob, "hello world.txt");
}
</script>

<style lang="less" scoped>

</style>