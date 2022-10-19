<template>
  <el-card>
    <template #header>
      h函数使用
    </template>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="修改url" :name="1">
          <el-button type="primary" @click="handleChangeUrl">按钮</el-button>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script setup lang="ts" name="methods">
let activeNames = shallowRef(1)

const handleChangeUrl = () => history.pushState(null,null,'/修改url')
</script>

<style scoped lang="less">

</style>