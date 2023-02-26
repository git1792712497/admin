<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <strong>滚动动画</strong>
        <el-link href="https://github.com/jlmakes/scrollreveal" target="_blank" type="primary">scrollreveal.js</el-link>
      </nav>
    </template>
    <main>
      <section class="wrapper">
        <h1>Font Awesome字体图标</h1>
        <h3>Font Awesome为您提供可缩放的矢量图标，您可以使用CSS所提供的所有特性对它们进行更改。</h3>
        <div class="feature-list">
          <div class="feature-item">
            <i class="fa fa-flag"></i>
            <h4 class="item-tit">一个字库，675个图标</h4>
            <p>仅一个Font Awesome字库，就包含了与网页相关的所有形象图标。</p>
          </div>
          <div class="feature-item">
            <i class="fa fa-ban"></i>
            <h4 class="item-tit">无需依赖JavaScript</h4>
            <p>Font Awesome完全不依赖JavaScript，因此无需担心兼容性。</p>
          </div>
          <div class="feature-item">
            <i class="fa fa-arrows-alt"></i>
            <h4 class="item-tit">无限缩放</h4>
            <p>无论在任何尺寸下，可缩放的矢量图形都会为您呈现出完美的图标。</p>
          </div>
          <div class="feature-item">
            <i class="fa fa-microphone"></i>
            <h4 class="item-tit">如言语一般自由</h4>
            <p>Font Awesome完全免费，哪怕是商业用途。请查看许可。</p>
          </div>
          <div class="feature-item">
            <i class="fa fa-pencil"></i>
            <h4 class="item-tit">CSS控制</h4>
            <p>Font Awesome的矢量图标，将使您的网站在视网膜级的高分屏上大放异彩。</p>
          </div>
          <div class="feature-item">
            <i class="fa fa-eye"></i>
            <h4 class="item-tit">高分屏完美呈现</h4>
            <p>Font Awesome的矢量图标，将使您的网站在视网膜级的高分屏上大放异彩。</p>
          </div>
        </div>
      </section>
      <section class="wrapper">
        <h1>疫情速报</h1>
        <h3>记者从西宁市新冠肺炎疫情防控处置工作指挥部获悉，10月28日0时20分，西宁市新增3名新冠肺炎病毒核酸检测阳性人员</h3>
      </section>
    </main>
  </el-card>
</template>

<script setup lang="ts" name="scrollReveal">
import ScrollReveal from 'scrollreveal'

onMounted(() => {
  // 单个项的动画持续时间2s，从下往上，间隔400ms
  ScrollReveal().reveal('.feature-item', {
    distance: '480px',
    duration: 2000,
    interval: 400,
    origin:'left'
  });
})


/*
| 属性/方法 |  类型   |               示例值 | 说明                                                                                                  |
| --------- | :-----: | -------------------: | ----------------------------------------------------------------------------------------------------- |
| container | DOM/css 选择器 | window.document.documentElement | `html`是默认容器。值类型支持两种，一种是 DOM 对象，一种是 css 选择器                 |
| duration  | number  |                  600 | 持续时间.单位为 ms                                                                                    |
| reset     | boolean |                 true | 元素离开视口后返回初始位置, 等待下一次触发, 值为 false 时动画只触发一次                               |
| origin    | string  |             'bottom' | 指定动画方向。可选值 top,right,bottom,left |
| delay     | number  |                  500 | 动画开始前的延迟时间, 触发的动画 reset 永远不会使用延迟。                                             |
| distance  | string  |              '-50px' | 控制元素在显示时移动的距离。接受的单位 px,em,%                                                        |
| easing    | string  |        'ease-in-out' | 控制动画速度。可选值:ease ease-in ease-in-out ease-out step-start step-end steps() cubic-bezier()     |
| opacity   | number  |                  0.5 | 初始透明度                                                                      |
| rotate    | object  | { x: 0, y: 0, z: 0 } | 指定开始的旋转角度 |
| scale     | number  |                  0.8 | 指定在显示之前元素的大小。                                                                            |
| mobile    | boolean |                 true | 是否在移动端执行                                                                                      |
| beforeReveal |    function    |         (ele)=>console.log(ele) | 执行之前的回调函数                                                               |
| afterReveal  |    function    |         (ele)=>console.log(ele) | 执行之后的回调函数                                                               |
| viewOffset | object | { top: 0, right: 0, bottom: 0, left: 0 } | 增加viewport或容器边界，单位像素. `{ top: 48 }`, if you have a 48px tall fixed toolbar.                            |
| viewFactor | number | 0.20 | 0.20表示元素在产生动画之前，它的20%在viewport或容器的边界之内 |
*/

</script>

<style scoped lang="less">
//字体图标
@import "https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 80px 20px 20px;
}
.wrapper > h1 {
  font-size: 18px;
  color: var(--text-color-darker);
}
.wrapper > h1::after {
  content: '';
  display: block;
  height: 4px;
  background: var(--primary-color);
  width: 80%;
  margin: 20px auto;
}
.wrapper > h3 {
  font-size: 16px;
  color: var(--text-color-normal);
  margin: 20px auto 40px;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 120px 120px;
  column-gap: 5vw;
  row-gap: 20px;
}
.feature-item {
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 1fr 2fr;
  grid-template-areas:
          'icon title'
          'icon content';
}
.feature-item > i {
  grid-area: icon;
  font-size: 28px;
  color: var(--primary-color);
}
.feature-item > p {
  line-height: 24px;
}

@media screen and (max-width: 786px) {
  .feature-list {
    grid-template-columns: repeat(2, 1fr);
  }
  .feature-item {
    grid-template-columns: 40px 1fr;
  }
}
</style>
