<template>
	<el-card>
    <template #header><TopSearch @addMenu="AddMenuDialogRef.openDialog()"/></template>
    <AddMenuDialog @refresh="run" ref="AddMenuDialogRef"/>
		<el-table v-loading="loading" size="large" border :data="menuList" row-key="id">
			<el-table-column prop="title" label="菜单名称" width="250"/>
      <el-table-column prop="icon" label="菜单图标" width="100" align="center">
        <template #default="{row}">
          <el-button :icon="row.icon"></el-button>
        </template>
      </el-table-column>
	    <el-table-column prop="path" label="路由路径" width="200"/>
	    <el-table-column prop="component" label="组件路径" width="200"/>
	    <el-table-column prop="sort" label="排序"/>
	    <el-table-column prop="type" label="菜单类型" width="100">
        <template #default="{row}">
          <el-tag type="success" v-if="row.type === 1">目录</el-tag>
          <el-tag v-if="row.type === 2">菜单</el-tag>
          <el-tag type="warning" v-if="row.type === 3">按钮</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="230">
        <template #default="{row}">{{$formatTime(row.createTime)}}</template>
      </el-table-column>
      <el-table-column prop="updateTime" label="修改时间" width="230">
        <template #default="{row}">{{$formatTime(row.updateTime)}}</template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200" align="center">
        <template #default="{row}">
          <el-button link type="primary" size="small" @click="AddMenuDialogRef.openDialog(row)">编辑 <el-icon><Edit /></el-icon></el-button>
          <el-popconfirm title="是否确认删除?" @confirm="handleDelete(row.id)">
            <template #reference>
              <el-button link type="danger" size="small"  v-auth="['deleteMenu']">删除<el-icon><Delete /></el-icon></el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
	  </el-table>
	</el-card>
</template>

<script setup lang="ts" name="menuSystem">
import TopSearch from "./childComponents/TopSearch.vue";
import {getMenuListApi,getDeleteMenuApi} from "./api/index";
import AddMenuDialog from './childComponents/AddMenuDialog.vue'
import {generateMenuTree} from '@/utils/handleMenu'
import { useRequest } from 'vue-request';
import {menuStore} from '@/store/modules/menu'
let AddMenuDialogRef = shallowRef()
const { data, run ,loading} = useRequest(getMenuListApi);

const menuList = computed(() => data.value && generateMenuTree(data.value.data.sort((x,y) => x.sort - y.sort)))
provide('menuList',menuList)

const handleDelete = async id => {
  await getDeleteMenuApi(id)
  run()
  menuStore().setMenuList()
}
</script>

<style scoped lang="less">
:deep(.el-button){
  border: none;
}
</style>
