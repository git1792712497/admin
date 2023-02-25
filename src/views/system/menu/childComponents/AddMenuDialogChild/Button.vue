<template>
  <el-form ref="formRef" :model="basicForm" status-icon :rules="buttonRules" label-width="80px">
    <el-form-item label="按钮名称" prop="title">
      <el-input v-model="basicForm.title" clearable autofocus placeholder="请输入按钮名称" />
    </el-form-item>
    <el-form-item label="按钮标识" prop="name">
      <el-input v-model="basicForm.name" clearable autofocus placeholder="请输入按钮权限标识" />
    </el-form-item>
    <el-form-item label="父级菜单" prop="parentId">
      <el-tree-select @clear="basicForm.path = ''" @current-change="({path}) => basicForm.path = path" v-model="basicForm.parentId" :data="menuList" check-strictly clearable :props="{ label: 'title', children: 'children', value: 'id' }" style="width: 100%;"/>
    </el-form-item>
    <el-form-item label="按钮排序" prop="sort">
      <el-input-number v-model="basicForm.sort" placeholder="按钮序号" style="width: 100%;"/>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts" name="Button">
import {basicForm,useValidate} from '../../hooks/useAddMenuForm'
import {buttonRules} from '../../options/rules'
import { FormInstance } from "element-plus";

const menuList = inject('menuList')

const formRef = ref<FormInstance>()

function validate() {
  return useValidate(formRef)
}
defineExpose({
  validate
})
</script>

<style scoped lang="less">

</style>
