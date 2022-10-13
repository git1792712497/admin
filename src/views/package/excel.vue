<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <el-space>
          <el-upload :http-request="upload" :show-file-list="false">
            <template #trigger>
              {{tableData.length}}
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
import {getHeaderRow, formatExcel, formatJson} from '@/utils/excel'
import {object} from '@/utils/excel'
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

const handleExcelExport = async () => {
  const header = Object.keys(object)
  console.log(header)
  const body = formatJson(unref(tableData))
  console.log(body)
  console.time('时间')
  const workSheet = utils.aoa_to_sheet([header,...body]);
  const workBook =  utils.book_new();
  utils.book_append_sheet(workBook, workSheet, "数据报表");
  writeFile(workBook, "订单导出.xlsx");
  console.timeEnd('时间')
}
</script>

<style lang="less" scoped>

</style>