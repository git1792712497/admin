<template>
<div>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
      <nav class="flex justify-between">
        <strong>虚拟滚动</strong>
        <el-link type="primary" target="_blank" href="https://github.com/Akryum/vue-virtual-scroller">github地址</el-link>
      </nav>
    </template>
    <RecycleScroller
        class="scroller"
        :items="list"
        :item-size="32"
        key-field="id"
        v-slot="{ item }">
      <div class="user">
        {{ item.name }}
      </div>
    </RecycleScroller>
  </el-card>
</div>
</template>

<script setup lang="ts" name="virtualScroller">
// pnpm add vue-virtual-scroller@next
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import { RecycleScroller } from 'vue-virtual-scroller'
let list = new Array(1000000).fill({}).map((item,index) => ({name:`Row ${index}(small)`,id:index}))
</script>

<style scoped lang="less">
.scroller {
  height: 600px;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
