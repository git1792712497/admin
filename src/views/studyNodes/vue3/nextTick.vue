<template>
  <div class="demo">
    <p class="name">{{ name }}</p>
    <el-button @click="modify">修改</el-button>
  </div>
</template>
<script lang="ts" setup>
/*
nextTick本质就是创建了一个微任务（不考虑setTimeout），将其回调推入微任务队列。
vue中一个事件循环中的所有dom更新操作也是一个微任务，
两者属于同一优先级，执行先后只于入队的先后有关，换句话说，如果你先写了nextTick，
再写赋值语句（在此之前没有触发dom更新的操作），那在nextTick中获取的可就不是更新后的dom了
由于nextTick先进入微任务队列，所以回调先于dom更新执行，
所以是获取的dom仍旧是旧的更新前的dom*/
import {ref,nextTick} from "vue";

const name = ref("111");

const modify = () => {
  name.value = "222"; // 关键的赋值语句，如果注释掉，结果就大不一样了
  nextTick(() => {
    const text = document.querySelector<HTMLElement>(".name")!.innerText;
    console.log(text);
  });
  name.value = "333";
};
</script>
