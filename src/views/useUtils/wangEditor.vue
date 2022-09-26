<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <el-button type="primary">富文本编辑器</el-button>
        <el-link type="primary" target="_blank" href="https://www.wangeditor.com/">wangEditor官网</el-link>
      </nav>
    </template>
    <div style="border: 1px solid #ccc">
      <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          mode="default"/>
      <Editor
          style="height: 500px; overflow-y: hidden;"
          v-model="valueHtml"
          :defaultConfig="editorConfig"
          mode="default"
          @onCreated="handleCreated"
      />
    </div>
  </el-card>
</template>

<script setup lang="ts" name="wangEditor">
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
// 编辑器实例，必须用 shallowRef


const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<style scoped lang="less">

</style>