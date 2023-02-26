<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
     <nav class="flex justify-between">
       <el-button type="primary" @click="show = !show">动画</el-button>
       <el-link type="primary" target="_blank" href="https://animista.net/">animista</el-link>
     </nav>
    </template>
    <!--default: 进入动效和离开动效，同时执行
    in-out: 先执行进入动效，再执行俩开动效
    out-in: 先执行离开动效，再执行进入动效-->
    <Transition leave-active-class="slide-out-bottom" enter-active-class="scale-in-ver-top">
      <div v-if="show" class="w-40 h-40 bg-amber-500">hello</div>
    </Transition>
  </el-card>
</template>

<script setup lang="ts" name="transition">
let show = shallowRef(true)
</script>

<style scoped lang="less">
.slide-out-bottom {
  -webkit-animation: slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}


@keyframes slide-out-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
}


.scale-in-ver-top {
  -webkit-animation: scale-in-ver-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: scale-in-ver-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes scale-in-ver-top {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
    transform-origin: 100% 0%;
    opacity: 1;
  }
}
</style>
