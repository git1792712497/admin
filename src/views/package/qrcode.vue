<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <strong>二维码</strong>
        <el-link href="https://github.com/soldair/node-qrcode" target="_blank" type="primary">qrcode</el-link>
      </nav>
    </template>
    <el-image :src="url"></el-image>

    
  </el-card>
</template>

<script lang="ts" name="qrcode" setup>
// npm install --save qrcode
import QRCode from 'qrcode'

let url = shallowRef()
QRCode.toDataURL('I am a pony!').then(res => {
  url.value = res
}).catch(err => {
  console.error(err)
})

</script>

<style lang="less" scoped>

</style>