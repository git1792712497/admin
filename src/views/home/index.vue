<template>
  <el-button type="primary" @click="handle">更新</el-button>
</template>

<script lang="ts" name="player" setup>
import { update } from "@/views/home/demo";
const handle = () => {
  update({content:'aaaaaaabbbbbbbbbbbbaaaaa'}).then(res => {
    console.log(res)
  })
}

</script>

<style lang="less" scoped>

</style>
