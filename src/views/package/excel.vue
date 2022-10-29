<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <el-space>
          <el-upload :http-request="upload" :show-file-list="false">
            <template #trigger>
              <el-button type="primary">excel导入</el-button>
            </template>
          </el-upload>
          <el-button type="primary" @click="handleExcelExport">excel导出</el-button>
        </el-space>
        <div class="flex justify-between">
          <el-link href="https://www.npmjs.com/package/xlsx" target="_blank" type="primary">excel导入导出</el-link>
        </div>
      </nav>
    </template>
    <el-table :data="tableData" :row-key="row => row.orderNo" border highlight-current-row stripe>
      <el-table-column label="订单编号" prop="orderNo" show-overflow-tooltip width="250"/>
      <el-table-column label="下单时间" prop="orderDate" show-overflow-tooltip width="180"/>
      <el-table-column label="详细地址" prop="address" show-overflow-tooltip/>
      <el-table-column label="收件人" prop="receiver" show-overflow-tooltip/>
      <el-table-column label="收件人电话" prop="receiverPhone" show-overflow-tooltip/>
    </el-table>
  </el-card>
</template>

<script lang="ts" name="excel" setup>
import {excelToJson,jsonToExcel} from '@/utils/excel'
import type {UploadRequestOptions} from 'element-plus'
import { getOrderList } from "@/api/fastMock";

let tableData = ref<any>([])

const header = {
  orderNo:'订单编号',
  orderDate:'下单时间',
  address:'详细地址',
  receiver:'收件人',
  receiverPhone:'收件人电话'
}

const upload = async ({file}: UploadRequestOptions) => {
   const data = await excelToJson(file,header)
  console.log(data)
  tableData.value.push(...data)
}

const handleExcelExport = async () => {
  const data = await getOrderList()
  jsonToExcel({data,header})
}
</script>

<style lang="less" scoped>

</style>