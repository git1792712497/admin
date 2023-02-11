<template>
  <a-card title="ant-design-table分页多选">
    <a-table
        row-key="id"
        :rowSelection="rowSelection"
        :pagination="false"
        :loading="loading"
        :dataSource="data?.data"
        :columns="columns">
    </a-table>
    <a-pagination class="mt-6 text-right" v-model:pageSize="pageSize" v-model:current="current" :total="data?.total" showQuickJumper show-less-items />
  </a-card>
</template>

<script setup lang="ts" name="antDesignTable">
import { getMenuListApi } from "@/views/system/menu/api";
import { usePagination } from 'vue-request';
import {useTableSelect} from '@/hooks/useTableSelect'

const {rowSelection,selectedRowKeys,selectedRowData} = useTableSelect()

const {data,loading,pageSize,current} = usePagination(getMenuListApi,{
  defaultParams:[{limit:10,offset:1}],
  pagination: {
    currentKey: 'offset',
    pageSizeKey: 'limit',
    totalKey: 'total',
  },
})











const columns =  [
  {
    title: '菜单名称',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '菜单图标',
    dataIndex: 'icon',
    key: 'icon',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
]
</script>

<style scoped lang="less">

</style>
