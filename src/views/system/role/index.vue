<template>
  <el-card>
    <template #header><TopSearch @addRole="handleAddRole"/></template>
    <AddRoleDialog @refresh="getRoleList" ref="AddRoleDialogRef"/>

    <el-table size="large" border :data="roleList" row-key="id">
      <el-table-column prop="name" label="角色名称" width="180"/>
      <el-table-column prop="description" label="角色描述" width="300"/>
      <el-table-column prop="createTime" label="创建时间"/>
      <el-table-column prop="updateTime" label="修改时间"/>
      <el-table-column fixed="right" label="操作" width="150">
        <template #default="{row}">
          <el-button link type="primary" size="small">编辑</el-button>
          <el-button link type="danger" size="small" @click="handleDelete(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup lang="ts" name="index">
import TopSearch from "./childComponents/TopSearch.vue";
import AddRoleDialog from "./childComponents/AddRoleDialog.vue";
import {getRoleListApi,getDeleteRoleApi} from "./api/index";
const AddRoleDialogRef = shallowRef()

let roleList = ref([])
const getRoleList = async () => {
  const {data} = await getRoleListApi()
  roleList.value = data
}
onMounted(getRoleList)

const handleDelete = async id => {
  await getDeleteRoleApi(id)
  getRoleList()
}
const handleAddRole = () => {
  AddRoleDialogRef.value.openDialog()
}
</script>

<style scoped lang="less">

</style>
