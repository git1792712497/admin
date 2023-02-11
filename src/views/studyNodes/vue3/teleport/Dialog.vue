<template>
  <div class="pagination-container">

    <div v-show="showDialog" class="dialog">

      <div class="dialog-content">

        <div>我是一个弹窗</div>
        <button @click="toggleDialogStatus(false)">关闭弹窗</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from 'vue'

// 控制弹窗是否显示
const showDialog = ref(false)

// 切换弹窗显示状态
const toggleDialogStatus = val => {
  showDialog.value = val
}
defineExpose({
  toggleDialogStatus,
})
</script>

<style lang="scss">
.dialog {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dialog-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 360px;
  height: 300px;
}

</style>
