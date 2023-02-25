<template>
  <el-card shadow="hover" ref="dom">
    <template #header>
      <nav class="flex justify-between">
        <span>页面打印</span>
        <el-link type="primary" target="_blank" href="">github地址</el-link>
      </nav>
    </template>
    <div class="text-right">
      <el-button type="primary" @click="onClickPrint">图片打印</el-button>
      <el-button type="primary" @click="onClickPages">分页打印</el-button>
    </div>
    <div id="print-cover-order">
      <div class="page">分页2</div>
      <div class="page">分页3</div>
      <div class="page">分页4</div>
    </div>
  </el-card>
</template>

<script>


</script>
<script lang="ts" name="print" setup>
import printJS from 'print-js'


const onClickPrint = () => {
  printJS({
    printable:['https://api.kuaidi100.com/label/getImage/20221125/23869323723F45AFAF7766D3478576AA','https://api.kuaidi100.com/label/getImage/20221125/23869323723F45AFAF7766D3478576AA'],
    type: 'image',
    imageStyle: 'width:306px;height:525px;margin:auto'
  })
}

const onClickPages = () => {
  printJS({
    printable:'print-cover-order',
    type: 'html',
    targetStyles:['*'],
  })
}

</script>

<style lang="less" scoped>
.page {page-break-after:always;}
</style>
