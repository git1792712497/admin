<template>
  <BigScreenZoom>
    <main class="screen-bg">
      <div class="header"></div>

      <div class="left-top">

      </div>

      <div class="left-bottom">

      </div>

      <div class="right-top">

      </div>

      <div class="right-center">

      </div>
      <div class="right-bottom">

      </div>

      <div class="center">

      </div>
      <div class="bottom">

      </div>
    </main>
  </BigScreenZoom>
</template>
<script lang="ts" setup name="BigScreenZoom">
import BigScreenZoom from '@/components/bigScreen/BigScreenZoom.vue'
</script>


<style scoped>
.screen-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #070a3c;
  background-image: url(@/assets/images/bg.png);
}

.header {
  position: absolute;
  top: 21px;
  left: 0;
  width: 100%;
  height: 56px;

  background-image: url(@/assets/images/bg_header.svg);
}

.left-top {
  /* 定位 */
  position: absolute;
  left: 16px;
  top: 116px;
  width: 536px;
  height: 443px;

  /* 背景 */
  background-image: url(@/assets/images/bg_left-top.svg);
}

.left-bottom {
  /* 定位 */
  position: absolute;
  left: 16px;
  bottom: 49px;
  height: 443px;
  width: 536px;
  /* 背景 */
  background-image: url(@/assets/images/bg_left_bottom.svg);
}

.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;

  background-image: url(@/assets/images/bg_right_top.svg);
}

.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;

  background-image: url(@/assets/images/bg_right_center.svg);
}

.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(@/assets/images/bg_right_bottom.svg);
}
.center {
  position: absolute;
  right: 540px;
  bottom: 272px;
  width: 823px;
  height: 710px;

  /* border: 2px solid pink; */
}

.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;

  background-image: url(@/assets/images/bg_bottom.svg);
}
</style>
