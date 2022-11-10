<template>
  <el-card>
    <template #header>
      h函数使用
    </template>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="函数式组件用法" :name="1">
        <Demo @on-click="handleClick">
          <template #default>h函数</template>
        </Demo>
      </el-collapse-item>
      <el-collapse-item title="render函数" :name="2">
        <main class="hFunction">

        </main>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script lang="ts" name="hFunction" setup>
import {render} from "vue";

let activeNames = shallowRef(1)

const Demo = (props,ctx) => {
  return h('div',{
    class:['divBox'],
    onClick:() => {
      ctx.emit('on-click','盒子被点击')
    }
  },ctx.slots.default())
}
const handleClick = event => {
  console.log(event)
}


const div = h('div',{id:'div'},'渲染器')
onMounted(() => render(div,document.querySelector('.hFunction')))
</script>

<style lang="less" scoped>
.divBox{
  width: 100%;
  height: 100px;
  background: #c8ebfb;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>