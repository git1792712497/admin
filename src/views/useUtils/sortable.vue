<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <strong>拖拽排序</strong>
        <el-link href="https://github.com/SortableJS/Sortable" target="_blank" type="primary">
          https://github.com/SortableJS/Sortable
        </el-link>
      </nav>
    </template>
    <el-table ref="tableRef" :data="tableData" :row-key="row => row.id" border stripe highlight-current-row>
      <el-table-column type="index" label="序号" width="60" align="center"/>
      <el-table-column prop="createTime" label="创建时间" width="250" show-overflow-tooltip/>
      <el-table-column prop="orderNo" label="订单编号" width="250" show-overflow-tooltip/>
      <el-table-column prop="address" label="地址" width="200" show-overflow-tooltip/>
      <el-table-column prop="receiverPhone" label="电话" width="150" show-overflow-tooltip/>
      <el-table-column prop="receiver" label="收件人" width="100" show-overflow-tooltip/>
      <el-table-column prop="totalMoney" label="总金额" width="100" show-overflow-tooltip/>
    </el-table>
  </el-card>
</template>

<script lang="ts" name="sortable" setup>
import Sortable from 'sortablejs';
import {getOrderList} from "@/api/order";
import {onMounted, shallowRef} from "vue";

let tableData = shallowRef([])
getOrderList({queryType:'seller'}).then(({data}) => {
  tableData.value = data.records
})

const tableRef = shallowRef(null)

onMounted(() => {
  const el = tableRef.value.$el.querySelector('.el-table__body > tbody')
  Sortable.create(el,{
    ghostClass:'sortable',
    animation: 500,
    onEnd({newIndex,oldIndex}){
      console.log(newIndex,'新')
      console.log(oldIndex,'旧')
    }
  })
})


</script>

<style lang="less" scoped>
:deep(.sortable){
  background: #95bba1;
}
</style>