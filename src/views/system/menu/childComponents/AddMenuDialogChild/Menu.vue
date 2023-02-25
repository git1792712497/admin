<template>
  <el-form ref="formRef" :model="basicForm" status-icon :rules="menuRules" label-width="80px">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="菜单名称" prop="title">
          <el-input v-model="basicForm.title" clearable autofocus placeholder="请输入菜单标题" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="菜单标识" prop="name">
          <el-input v-model="basicForm.name" clearable autofocus placeholder="请输入菜单标识" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="父级菜单" prop="parentId">
      <el-tree-select @clear="basicForm.path = undefined" @current-change="({path}) => basicForm.path = path" v-model="basicForm.parentId" :data="menuList" check-strictly clearable :props="{ label: 'title', children: 'children', value: 'id' }" style="width: 100%;"/>
    </el-form-item>
    <el-form-item label="菜单路由" prop="path">
      <el-input v-model="basicForm.path" clearable placeholder="请输入路由path或http外链地址"/>
    </el-form-item>
    <el-form-item label="组件路径" prop="component">
      <el-input v-model="basicForm.component" clearable placeholder="请输入组件路径">
        <template #prepend>@/views</template>
      </el-input>
    </el-form-item>
    <el-form-item label="活跃菜单" prop="activePath">
      <el-input v-model="basicForm.activePath" clearable placeholder="请输入当前激活菜单路径"/>
    </el-form-item>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="菜单图标" prop="icon">
          <IconSelect class="w-full" v-model="basicForm.icon"/>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="菜单排序" prop="sort">
          <el-input-number v-model="basicForm.sort" placeholder="菜单序号" style="width: 100%;"/>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="是否外链" prop="isLink">
          <el-radio-group v-model="basicForm.isLink">
            <el-radio-button :label="1">开启</el-radio-button>
            <el-radio-button :label="0">关闭</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="菜单状态" prop="hidden">
          <el-radio-group v-model="basicForm.hidden">
            <el-radio-button :label="1">显示</el-radio-button>
            <el-radio-button :label="0">隐藏</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="开启全屏" prop="fullScreen">
          <el-radio-group v-model="basicForm.fullScreen">
            <el-radio-button :label="1">开启</el-radio-button>
            <el-radio-button :label="0">关闭</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="缓存菜单" prop="keepAlive">
          <el-radio-group v-model="basicForm.keepAlive">
            <el-radio-button :label="1">开启</el-radio-button>
            <el-radio-button :label="0">关闭</el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts" name="Menu">
import IconSelect from '@/components/iconSelect/index.vue'
import { basicForm, useValidate } from '../../hooks/useAddMenuForm'
import {menuRules} from '../../options/rules'
import { ref } from "vue";
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
