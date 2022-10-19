<template>
 <div class="waterfall">
    <el-button type="primary" @click="handleClick">按钮</el-button>
 </div>
</template>
<script lang="ts" setup>
import message from '@/components/message/message'

const handleClick = () => {
  message({type:'success',text:'成功'})
}
</script>


