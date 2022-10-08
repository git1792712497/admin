<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
      <nav class="flex justify-between">
        <strong><el-button type="primary" @click="onSummit">提交</el-button></strong>
        <el-link type="primary" target="_blank" href="https://www.npmjs.com/package/@toast-ui/editor">
          https://www.npmjs.com/package/@toast-ui/editor
        </el-link>
      </nav>
    </template>
    <main class="markdown">
    
    </main>
  </el-card>
</template>

<script setup lang="ts" name="markdown">
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/zh-cn';
import {onMounted} from "vue";
import {EditorCore} from "@toast-ui/editor/types/editor";

let editor: EditorCore
onMounted(() => {
  const el = document.querySelector('.markdown') as HTMLHtmlElement
  editor = new Editor({
    el,
    height:'100%',
    previewStyle:'vertical',
    language:'zh-CN'
  })
  editor.getMarkdown()
})

const onSummit = () => {
  console.log(editor.getHTML())
  editor.reset()
}
</script>

<style scoped lang="less">

</style>