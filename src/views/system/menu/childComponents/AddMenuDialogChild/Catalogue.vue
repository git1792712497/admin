<template>
  <el-form ref="formRef" :model="basicForm" status-icon :rules="catalogueRules" label-width="80px">
    <el-form-item label="目录名称" prop="title">
      <el-input v-model="basicForm.title" clearable autofocus placeholder="请输入目录标题" />
    </el-form-item>
    <el-form-item label="父级目录" prop="parentId">
      <el-tree-select @clear="basicForm.path = ''" @current-change="({path}) => basicForm.path = path" v-model="basicForm.parentId" :data="menuList" check-strictly clearable :props="{ label: 'title', children: 'children', value: 'id' }" style="width: 100%;"/>
    </el-form-item>
    <el-form-item label="目录路由" prop="path">
      <el-input v-model="basicForm.path" clearable placeholder="请输入路由路径"/>
    </el-form-item>
    <el-form-item label="目录图标" prop="icon">
      <IconSelect class="w-full" v-model="basicForm.icon"/>
    </el-form-item>
    <el-form-item label="目录排序" prop="sort">
      <el-input-number v-model="basicForm.sort" :min="0" placeholder="目录序号" style="width: 100%;"/>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts" name="Catalogue">
import IconSelect from '@/components/iconSelect/index.vue'
import {basicForm} from '../../hooks/useAddMenuForm'
import {catalogueRules} from '../../options/rules'
import { ref } from "vue";
import { FormInstance } from "element-plus";
import {useValidate} from '../../hooks/useAddMenuForm'


const formRef = ref<FormInstance>()

const menuList = inject('menuList')

function validate() {
  return useValidate(formRef)
}
defineExpose({
  validate
})
</script>

<style scoped lang="less">

</style>
