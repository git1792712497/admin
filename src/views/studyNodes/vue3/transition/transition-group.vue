<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
      <el-button type="primary" @click="insert">随机一个位置插入一个元素</el-button>
      <el-button type="primary" @click="reset">随机变化位置</el-button>
    </template>

    <TransitionGroup tag="ul" name="fade" class="container">
      <div v-for="(item,index) in items" class="item" :key="item">
        {{ item }}
        <button class="itemBtn" @click="remove(index)">x</button>
      </div>
    </TransitionGroup>
  </el-card>
</template>

<script setup lang="ts">
import { shuffle } from 'lodash-es'

const items = ref([1, 2, 3, 4, 5])

const remove = (index) => items.value.splice(index,1)

const insert = () => {
  const i = Math.round(Math.random() * items.value.length)
  items.value.splice(i, 0, items.value.length)
}

const reset = () => items.value = shuffle(items.value)
</script>



<style scoped>
.item {
  color: #000;
}
.itemBtn {
  color: #000;
  padding: 3px 10px;
  border: 1px solid #333;
  margin-left: 30px;
}
.container {
  position: relative;
  padding: 0;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>
