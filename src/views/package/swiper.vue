<template>
  <el-card shadow="hover" :body-style="{height:'100%'}" style="height: 100%;">
    <template #header>
        <nav class="flex justify-between">
          <strong>轮播图</strong>
          <el-link type="primary" target="_blank" href="https://swiperjs.com/demos">vue-awesome-swiper</el-link>
        </nav>
    </template>
    <swiper
        :slidesPerView="3"
        :centeredSlides="true"
        :spaceBetween="30"
        :pagination="{type: 'fraction'}"
        :navigation="true"
        :modules="[Pagination,Navigation]">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
    </swiper>
  </el-card>
</template>
<script setup lang="ts">
// pnpm add swiper vue-awesome-swiper
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


</script>
<style scoped lang="less">
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #beb230;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin: 20px auto;
}
</style>
