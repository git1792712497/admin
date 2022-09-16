<template>
	 <el-input v-model="input" placeholder="Please input">
      <template #append>
	      <el-button type="primary" v-copy="input">复制指令</el-button>
      </template>
    </el-input>
</template>

<script setup lang="ts" name="copy">
import {ref} from "vue";

let input = ref()
</script>

<style scoped lang="less">

</style>
