<template>
  <el-card shadow="hover" :body-style="{height:'100%'}">
    <template #header>
      <strong>element-plus 分页选择</strong>
    </template>
    <el-table ref="tableRef" @selection-change="selectionChange" @select-all="selectAll"  @select="selectItem" size="large" v-loading="loading" :data="data" row-key="id" border highlight-current-row stripe>
      <el-table-column type="selection" :reserve-selection="true" width="45" />
      <el-table-column label="订单编号" prop="orderNo" show-overflow-tooltip width="250"/>
      <el-table-column label="下单时间" prop="orderDate" show-overflow-tooltip width="180"/>
      <el-table-column label="详细地址" prop="address" show-overflow-tooltip width="350"/>
      <el-table-column label="收件人" prop="receiver" show-overflow-tooltip/>
      <el-table-column label="收件人电话" prop="receiverPhone" show-overflow-tooltip/>
    </el-table>
    <br>
    <footer class="flex justify-end">
      <el-pagination @size-change="sizeChange" @current-change="currentChange" :total="total" background  layout="total, sizes, prev, pager, next, jumper"/>
    </footer>
  </el-card>
</template>

<script setup lang="ts" name="pageSelection">
import { getOrderList } from "@/api/order";

const params = {
  type_equal: 1,
  current: 1,
  size: 10,
  queryType: 'seller'
}
let loading = shallowRef(false)
const tableRef = shallowRef(null)
let tableData = reactive({
  total:0,
  data:[]
})
const {total,data} = toRefs(tableData)

const getOrderData = async () => {
  loading.value = true
  const res = await getOrderList(params)
  tableData.total = res.data.total
  tableData.data = res.data.records
  loading.value = false
}
onMounted(getOrderData)
const currentChange = page => {
  params.current = page
  getOrderData()
  console.log(page)
}
const sizeChange = page => {
  params.size = page
  getOrderData()
}

const selectItem = (data,row) => {
  console.log(data)
  console.log(row)
}
const selectAll = data => {
  // console.log(data)
}

const selectionChange = (data) => {
  console.log(data)
}
const handleClick = () => {

}

</script>

<style scoped lang="less">

</style>