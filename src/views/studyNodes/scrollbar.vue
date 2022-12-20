<template>
  <el-card>
    <template #header>
      
      <nav class="flex justify-between">
        <span>滚动条样式</span>
        <el-button type="primary" @click="handleClick">平滑滚动</el-button>
      </nav>
    </template>
    <main class="main">
      <ol>
        <li v-for="item in 1000" :key="item"><h1>{{item}}</h1></li>
      </ol>
    </main>
  </el-card>
</template>

<script setup lang="ts" name="scrollbar">
const handleClick = () => {
  const el = document.querySelector('.main') as HTMLHtmlElement
  el.scrollTo(0,Math.random() * 25000)
}
</script>

<style scoped lang="less">
.main{
  width: 100%;
  height: 500px;
  border: 1px solid pink;
  overflow-y: auto;
  //平滑滚动属性
  scroll-behavior: smooth
}


/* 1,滚动条 */
::-webkit-scrollbar {
  width: 20px;          /* 纵向滚动条 宽度 */
  height: 15px;         /* 横向滚动条 高度 */
  background: pink;   /* 整体背景 */
  border-radius: 10px;  /* 整体 圆角 */
}
/* 2,滚动条两端的按钮 */
::-webkit-scrollbar-button{
  width: 30px;          /* 横向滚动条 宽度 */
  height: 20px;          /* 纵向滚动条 高度 */
  background: black;
  border-radius: 10px;
}
/* 3,外层轨道 */
::-webkit-scrollbar-track {
  //background: red;
  border-radius: 10px;
}
/* 4.内层轨道，它会覆盖外层轨道的样式。 */
::-webkit-scrollbar-track-piece {
  width: 5px;
  background-color:red;
  margin: 0 -2px 0;
}
/* 5,滑块 */
::-webkit-scrollbar-thumb {
  background: #b24b7e;
  width: 100px;
  transform: scale(0.5);
  border-radius: 10px;
}
/* 纵向滑块悬浮 */
::-webkit-scrollbar-thumb:vertical:hover {
  background: yellow;
}
/* 横向滑块悬浮 */
::-webkit-scrollbar-thumb:horizontal:hover {
  background: pink
}
/* 6,边角，两个滚动条交汇处 */
::-webkit-scrollbar-corner{
  background: blue;
}



</style>