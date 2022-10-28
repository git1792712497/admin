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
      <el-table-column label="订单编号" prop="orderNo" show-overflow-tooltip width="180"/>
      <el-table-column label="下单时间" prop="orderDate" show-overflow-tooltip width="180"/>
      <el-table-column label="详细地址" prop="address" show-overflow-tooltip/>
      <el-table-column label="收件人" prop="receiver" show-overflow-tooltip/>
      <el-table-column label="收件人电话" prop="receiverPhone" show-overflow-tooltip/>
    </el-table>
  </el-card>
</template>

<script lang="ts" name="excel" setup>
import {utils,writeFile,read} from 'xlsx'
import {getHeaderRow, formatExcel,jsonToExcel} from '@/utils/excel'
import type {UploadRequestOptions} from 'element-plus'
import {unref} from "vue";
import order from '@/assets/json/order.json'

let tableData = ref(order)
const upload = ({file}: UploadRequestOptions) => {
  const fileReader = new FileReader()
  fileReader.readAsArrayBuffer(file)
  fileReader.onload = e => {
    const excelData = e.target.result
    //1_解析后的数据
    const workbook = read(excelData, {type: 'array'})
    //2_获取第一张表工作簿的名称
    const firstSheetName = workbook.SheetNames[0]
    //3_读取第一张表数据
    const workSheet = workbook.Sheets[firstSheetName]
    //4_解析数据表头
    const excelHeader = getHeaderRow(workSheet)
    //5_解析数据体
    const excelBody = utils.sheet_to_json(workSheet)

    tableData.value = formatExcel(excelBody)
  }
}


const handleExcelExport = () => {
  const data = toRaw(unref(tableData))
  const header = {
    orderNo:'订单编号',
    orderDate:'下单时间',
    address:'详细地址',
    receiver:'收件人',
    receiverPhone:'收件人电话'
  }
  jsonToExcel({data,header})
}
</script>

<style lang="less" scoped>

</style>