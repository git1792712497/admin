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
    <el-table :data="tableData" :row-key="row => row.id" border highlight-current-row stripe>
      <el-table-column label="菜单标题" prop="title" show-overflow-tooltip width="250"/>
      <el-table-column label="菜单图标" prop="icon" show-overflow-tooltip width="180"/>
      <el-table-column label="创建时间" prop="createTime" show-overflow-tooltip/>
      <el-table-column label="更新时间" prop="updateTime" show-overflow-tooltip/>
    </el-table>
  </el-card>
</template>

<script lang="ts" name="excel" setup>
import {excelToJson,jsonToExcel} from '@/utils/excel'
import type {UploadRequestOptions} from 'element-plus'
import { getMenuListApi } from "@/views/system/menu/api";

const header = {
  title:'菜单标题',
  icon:'菜单图标',
  createTime:'创建时间',
  updateTime:'更新时间',
}

let tableData = ref([])
getMenuListApi({limit:10}).then(({data}) => {
  tableData.value = data
})

const upload = async ({file}: UploadRequestOptions) => {
  console.time('导入时间')
  const data = await excelToJson(file,header)
  console.log(data,'导入')
  console.timeEnd('导入时间')
  tableData.value.push(...data)
}

const handleExcelExport = async () => {
  jsonToExcel({data:tableData.value,header})
  console.timeEnd('下载时间')
}
</script>

<style lang="less" scoped>

</style>
