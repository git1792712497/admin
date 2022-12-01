<template>
  <el-card shadow="hover" ref="dom">
    <template #header>
      <nav class="flex justify-between">
        <span>页面打印</span>
        <el-button type="primary" @click="onClickPrint">打印</el-button>
      </nav>
    </template>
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

</script>

<style lang="less" scoped>
.page {page-break-after:always;}
</style>