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
import {saveAs} from "file-saver";

const onText = () => {
  const blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
  // 参数1：支持的类型：blob（二进制）、File（文件）、Url（url链接）
  // 参数2：文件类型
  saveAs(blob, "hello world.txt");
}


/*a标签只能做get请求，所有url有长度限制
无法获取下载进度
无法在header中携带token做鉴权操作
跨域限制
download的属性是HTML5新增的属性 href属性的地址必须是非跨域的地址否则download就会不起作用
无法判断接口是否返回成功
IE兼容问题*/


/*
file-saver 可以下载txt、png、pdf等类型文件
可以在header中携带token做鉴权操作
可以获取文件下载进度
可以判断接口是否返回成功*/
</script>

<style lang="less" scoped>

</style>