<template>
  <section>
    <el-card shadow="hover">
      <template #header>
        <nav class="flex justify-between">
          <strong>拖拽排序</strong>
          <el-link href="https://github.com/SortableJS/Sortable" target="_blank" type="primary">
            https://github.com/SortableJS/Sortable
          </el-link>
        </nav>
      </template>
      <el-table ref="tableRef" :data="tableData" :row-key="row => row.id" border highlight-current-row stripe>
        <el-table-column align="center" label="序号" type="index" width="60"/>
        <el-table-column label="创建时间" prop="createTime" show-overflow-tooltip width="250"/>
        <el-table-column label="订单编号" prop="orderNo" show-overflow-tooltip width="250"/>
        <el-table-column label="地址" prop="address" show-overflow-tooltip width="200"/>
        <el-table-column label="电话" prop="receiverPhone" show-overflow-tooltip width="150"/>
        <el-table-column label="收件人" prop="receiver" show-overflow-tooltip width="100"/>
        <el-table-column label="总金额" prop="totalMoney" show-overflow-tooltip width="100"/>
      </el-table>
    </el-card>
    <br>
    <el-card shadow="hover">
      <template #header>
        <nav class="flex justify-between">
          <strong>拖拽排序</strong>
          <el-link href="https://github.com/SortableJS/vue.draggable.next" target="_blank" type="primary">
            https://github.com/SortableJS/vue.draggable.next
          </el-link>
        </nav>
      </template>
      <Draggable v-model="lists" animation="300" chosen-class="chosen" force-fallback="true" item-key="name" @change="change">
        <template #item="{ element, index }">
          <div class="item-single">{{ element.name }} {{ index }}</div>
        </template>
      </Draggable>
    </el-card>
  </section>
</template>

<script lang="ts" name="sortable" setup>
import Draggable from 'vuedraggable'
import Sortable from 'sortablejs';
import { getOrderList } from "@/api/order";

let tableData = ref([])
getOrderList({queryType: 'seller'}).then((res: any) => {
  tableData.value = res?.data.records
})
const tableRef = shallowRef(null)
onMounted(() => {
  const el = tableRef.value.$el.querySelector('.el-table__body > tbody')
  Sortable.create(el, {
    ghostClass: 'sortable', animation: 500,
    onEnd({newIndex, oldIndex}) {
      console.log(newIndex, '新')
      console.log(oldIndex, '旧')
    }
  })
})

const lists = shallowRef([
  { people: "cn", id: 1, name: "第一" },
  { people: "cn", id: 2, name: "第二" },
  { people: "cn", id: 3, name: "第三" },
  { people: "cn", id: 4, name: "第四" }
])
const change = (evt): void => {
  console.log ("evt: ", evt);
};


</script>

<style lang="less" scoped>
:deep(.sortable) {
  background: #95bba1;
}



.item-single {
  font-size: 1.5em;
  height: 77px;
  text-align: center;
  line-height: 85px;
  border: 1px solid #e5e4e9;
  cursor: move;
}
</style>