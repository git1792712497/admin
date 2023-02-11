
<template>
  <div>
    <button @click="openDialog">打开弹窗</button>
    <!--为了避免组件被页面其他元素影响，-->
    <teleport to="body">
      <Dialog ref="dialogRef"></Dialog>
    </teleport>
  </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue'
import Dialog from './Dialog.vue'
/*Teleport 组件只改变了渲染的 DOM 结构，它不会影响组件间的逻辑。
也就是说，如果 Teleport 包含了一个组件，那么该组件始终和这个使用了
Teleport 的组件保持逻辑上的父子关系。*/
const dialogRef: any = ref(null)
const openDialog = () => {
  dialogRef.value.toggleDialogStatus(true)
}
</script>
