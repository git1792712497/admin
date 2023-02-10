<template>
  <el-card shadow="hover" :body-style="{height:'100%'}">
    <template #header>
      <strong>element-plus 分页选择</strong>
    </template>
    <el-table v-loading="loading" :data="data?.data" ref="tableRef" @selection-change="selectionChange" @select-all="selectAll"  @select="selectItem" size="large"  row-key="id" border highlight-current-row stripe>
      <el-table-column type="selection" :reserve-selection="true" width="45" />
      <el-table-column prop="title" label="菜单名称" width="150"/>
      <el-table-column prop="icon" label="菜单图标" width="100" align="center"/>
      <el-table-column prop="path" label="路由路径" width="200"/>
      <el-table-column prop="component" label="组件路径" width="200"/>
      <el-table-column prop="sort" label="排序"/>
      <el-table-column prop="type" label="菜单类型" width="100"/>
      <el-table-column prop="createTime" label="创建时间" width="230">
        <template #default="{row}">{{$formatTime(row.createTime)}}</template>
      </el-table-column>
      <el-table-column prop="updateTime" label="修改时间" width="230">
        <template #default="{row}">{{$formatTime(row.updateTime)}}</template>
      </el-table-column>
    </el-table>
    <br>
    <footer class="flex justify-end">
      <el-pagination v-model:current-page="current" v-model:page-size="pageSize" :total="data?.total ?? 0" background  layout="total, sizes, prev, pager, next, jumper"/>
    </footer>
  </el-card>
</template>

<script setup lang="ts" name="pageSelection">
import { getMenuListApi } from "@/views/system/menu/api";
import { usePagination } from 'vue-request';

const {data,loading,pageSize,current} = usePagination(getMenuListApi,{
  defaultParams:[{limit:10,offset:1}],
  pagination: {
    currentKey: 'offset',
    pageSizeKey: 'limit',
    totalKey: 'total',
  },
})


const selectItem = (data,row) => {
 console.log(data)
 console.log(row)
}
const selectAll = data => {
 console.log(data)
}

const selectionChange = (data) => {
 console.log(data)
}
</script>

<style scoped lang="less">

</style>
