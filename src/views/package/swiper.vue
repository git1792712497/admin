<template>
  <el-card shadow="hover">
    <template #header>
        <nav class="flex justify-between">
          <strong>轮播图</strong>
          <el-link type="primary" target="_blank" href="https://github.surmon.me/vue-awesome-swiper">vue-awesome-swiper</el-link>
        </nav>
    </template>
    <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </el-card>
</template>
<script setup lang="ts" name="swiper">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>
<style scoped lang="less">


</style>
