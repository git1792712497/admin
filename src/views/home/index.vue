<template>
<div>
	<el-button type="primary" @click="handClick">按钮</el-button>
</div>
</template>

<script lang="ts" setup name="index">
import {_debounce} from '@/utils/debounce'

const handClick = _debounce(() => {
	console.log('防抖')
},1000,true)
</script>

<style scoped lang="less">

</style>
