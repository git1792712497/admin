<template>
  <div>
    <a-radio-button v-for="(item,index) in buttonArr" :key="item.name" @click="buttonArr[index].value = !buttonArr[index].value" v-model:checked="item.value">
      {{item.name}}
    </a-radio-button>
  </div>
</template>
<script lang="ts" class="home" setup>
let buttonArr = reactive([
  {
    value:false,
    name:'续存'
  },
  {
    value:false,
    name:'注销'
  },
  {
    value:false,
    name:'在业'
  },
])
const handle = () => {
  //提交
  console.log(buttonArr.filter(item => item.value));
}

</script>

