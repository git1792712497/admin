<template>
  <el-card shadow="hover">
    <template #header>
      <button @click="handle1">开始</button>
      <button @click="handle2">暂停</button>
    </template>
    <div class="vue div" ref="aaaaa">
      
    </div>


  </el-card>
</template>
<script lang="ts" setup>

const object = reactive({
  background:'red',
  time:'10s',
  start:'running'
})
const handle1 = () => {
  object.start = 'running'
}

const handle2 = () => {
  object.start = 'paused'
}


</script>


<style scoped lang="less">
.div{
  width: 100px;
  height: 100px;
  position: absolute;
  left: 10px;
  background:v-bind('object.background')
}


@keyframes move {
  0%{
    left: 1px;
  }
  100%{
    left: 700px;
  }
}

.vue{
  animation: move 10s linear;
  animation-play-state:v-bind('object.start');
}
</style>

