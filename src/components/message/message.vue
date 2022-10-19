<template>
  <transition name="message">
    <div class="message" :style="style.error" v-show="isShow">
      <span class="text">{{text}}</span>
    </div>
  </transition>
</template>
<script lang="ts" setup name="message">
import {onMounted, ref} from "vue";

const props = defineProps({
  text:{
    type:String,
    default:'这是消息提示'
  }
})

let isShow = ref(false)

onMounted(() => {
  isShow.value = true
  console.log(props.text)
})

const style = {
  warn: {
    color: '#E6A23C',
    backgroundColor: 'rgb(253, 246, 236)',
    borderColor: 'rgb(250, 236, 216)'
  },
  error: {
    color: '#F56C6C',
    backgroundColor: 'rgb(254, 240, 240)',
    borderColor: 'rgb(253, 226, 226)'
  },
  success: {
    color: '#67C23A',
    backgroundColor: 'rgb(240, 249, 235)',
    borderColor: 'rgb(225, 243, 216)'
  }
}

</script>

<style scoped lang="less">
.message-enter-from{
  transform: translateY(-100px);
  opacity: 0;
}
.message-enter-active{
  transition: all 1s;
}
.message-enter-to{
  transform: none;
  opacity: 1;
}

.message {
  width: 300px;
  height: 50px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 25px;
  line-height: 50px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  i {
    margin-right: 4px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
}
</style>