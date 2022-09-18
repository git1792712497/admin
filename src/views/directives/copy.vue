<template>
  <el-card shadow="hover">
    <template #header>
      复制指令
    </template>
    <el-input v-model="input" placeholder="Please input">
      <template #append>
        <el-button v-copy="input" type="primary">复制指令</el-button>
      </template>
    </el-input>
  </el-card>
</template>

<script lang="ts" name="copy" setup>
import {ref} from "vue";

let input = ref()




</script>

<style lang="less" scoped>

</style>
