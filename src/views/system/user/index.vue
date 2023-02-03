<template>
  <el-card>
    <template #header><TopSearch @addRole="handleAddRole"/></template>
    <AddUserDialog @refresh="run" ref="AddUserDialogRef"/>
    <el-table v-loading="loading" size="large" border :data="data.data" row-key="id">
      <el-table-column prop="username" label="用户名称" width="180"/>
      <el-table-column prop="password" label="用户密码" width="180"/>
      <el-table-column prop="roleName" label="所属角色" width="180"/>
      <el-table-column prop="createTime" label="创建时间"/>
      <el-table-column prop="updateTime" label="修改时间"/>
      <el-table-column fixed="right" label="操作" width="200" align="center">
        <template #default="{row}">
          <el-button link type="primary" size="small">编辑 <el-icon><Edit /></el-icon></el-button>
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
import AddUserDialog from "./childComponents/AddUserDialog.vue";
import {getUserDeleteApi,getUserListApi} from "./api/index";
import {useRequest} from "vue-request";
const {run,loading,data} = useRequest(getUserListApi)

const handleDelete = async id => {
  await getUserDeleteApi(id)
  await run()
}

const AddUserDialogRef = shallowRef()
const handleAddRole = () => AddUserDialogRef.value.openDialog()
</script>

<style scoped lang="less">

</style>
