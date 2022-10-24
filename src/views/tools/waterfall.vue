<template>
  <el-card shadow="hover" header="波浪指令效果（v-waves）作用于 div" class="mt15">
    <template #header>
      <strong>瀑布流</strong>
    </template>
    <div class="waterfall-first">
      <div class="waterfall-first-item" v-for="item in 100" :key="item">
        <div class="flex justify-center">
          {{ item }}
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts" name="waterfall">

</script>

<style scoped lang="less">
.waterfall-first {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(188px, 1fr));
  grid-gap: 0.25em;
  grid-auto-flow: row dense;
  grid-auto-rows: 20px;
  .waterfall-first-item {
    width: 100%;
    background: var(--el-color-primary);
    color: var(--el-color-white);
    transition: all 0.3s ease;
    border-radius: 3px;
    &:nth-of-type(3n + 1) {
      grid-row: auto / span 5;
    }
    &:nth-of-type(3n + 2) {
      grid-row: auto / span 6;
    }
    &:nth-of-type(3n + 3) {
      grid-row: auto / span 8;
    }
    &:hover {
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      transition: all 0.3s ease;
      cursor: pointer;
    }
  }
}
</style>