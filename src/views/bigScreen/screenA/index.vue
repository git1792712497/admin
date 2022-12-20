<template>
  <BigScreenZoom>
    <main class="screen-bg">
      <header class="header"></header>

      <aside class="left-top">

      </aside>

      <aside class="left-bottom">

      </aside>

      <aside class="right-top">

      </aside>

      <div class="right-center">

      </div>
      <div class="right-bottom">

      </div>

      <div class="center">

      </div>
      <footer class="bottom">

      </footer>
    </main>
  </BigScreenZoom>
</template>
<script lang="ts" name="BigScreenZoom" setup>
import BigScreenZoom from '@/components/bigScreen/BigScreenZoom.vue'
/*
动画卡顿优化
定位创建新的渲染层,启用GPU加速,善于CSS3形变动画
少用渐变和高斯模糊,当不需要动画及时关闭动画
*/
</script>


<style scoped>
.screen-bg {
  background-color: #070a3c;
  background-image: url(./images/bg.png);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%; 
}

.header {
  background-image: url(./images/bg_header.svg);
  height: 56px;
  left: 0;
  position: absolute;
  top: 21px;
  width: 100%;
}

.left-top {
  /* 定位 */
  background-image: url(./images/bg_left-top.svg);
  height: 443px;
  left: 16px;
  position: absolute;
  top: 116px;

  /* 背景 */
  width: 536px;
}

.left-bottom {
  /* 定位 */
  background-image: url(./images/bg_left_bottom.svg);
  bottom: 49px;
  height: 443px;
  left: 16px;
  position: absolute;
  /* 背景 */
  width: 536px;
}

.right-top {
  background-image: url(./images/bg_right_top.svg);
  height: 327px;
  position: absolute;
  right: 17px;
  top: 96px;

  width: 519px;
}

.right-center {
  background-image: url(./images/bg_right_center.svg);
  height: 327px;
  position: absolute;
  right: 17px;
  top: 443px;

  width: 519px;
}

.right-bottom {
  align-items: center;
  background-image: url(./images/bg_right_bottom.svg);
  bottom: 49px;
  display: flex;
  height: 242px;
  justify-content: center;
  position: absolute;
  right: 17px;
  width: 519px;
}

.center {
  bottom: 272px;
  height: 710px;
  position: absolute;
  right: 540px;
  width: 823px;
}

.bottom {
  background-image: url(./images/bg_bottom.svg);
  bottom: 49px;
  height: 209px;
  position: absolute;
  right: 540px;

  width: 823px;
}
</style>
