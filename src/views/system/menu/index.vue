<template>
	<el-card>
    <template #header><TopSearch @addMenu="addMenuDialogRef.openDialog()"/></template>
    <AddMenuDialog @refresh="run" :menuData="menuList" ref="AddMenuDialogRef"/>
		<el-table v-loading="loading" size="large" border :data="menuList" row-key="id">
			<el-table-column prop="title" label="菜单名称" width="180"/>
      <el-table-column prop="icon" label="菜单图标" width="100">

      </el-table-column>
	    <el-table-column prop="path" label="路由路径"/>
      <el-table-column prop="createTime" label="创建时间"/>
      <el-table-column prop="updateTime" label="修改时间"/>
      <el-table-column fixed="right" label="操作" width="200" align="center">
        <template #default="{row}">
          <el-button link type="primary" size="small" @click="AddMenuDialogRef.openDialog(row)">编辑 <el-icon><Edit /></el-icon></el-button>
          <el-popconfirm title="是否确认删除?" @confirm="handleDelete(row.id)">
            <template #reference>
              <el-button link type="danger" size="small">删除<el-icon><Delete /></el-icon></el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
	  </el-table>
	</el-card>
</template>

<script setup lang="ts" name="index">
import TopSearch from "./childComponents/TopSearch.vue";
import {getMenuListApi,getDeleteMenuApi} from "./api/index";
import AddMenuDialog from './childComponents/AddMenuDialog.vue'
import {generateMenuTree} from '@/utils/handleMenu'
import { useRequest } from 'vue-request';

let AddMenuDialogRef = shallowRef()
const { data, run ,loading} = useRequest(getMenuListApi);
const menuList = computed(() => data.value && generateMenuTree(data.value.data))

const handleDelete = async id => {
  await getDeleteMenuApi(id)
  run()
}
</script>

<style scoped lang="less">

</style>
