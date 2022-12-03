<template>
  <div>
    <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
      <template #header>

      </template>
      <h1 v-for="i in 100">{{i}}</h1>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
/*tabel => 1启用0停用 => 关联专家领域(多)
按钮 => 关联专家领域 => 弹框(table(已关联列表=>新增关联按钮,删除)领域选择 =>)*/
</script>
<style scoped></style>
