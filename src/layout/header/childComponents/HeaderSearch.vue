<template>
	<nav class="header-search">
		<i class="iconfont icon-search" @click="clickSearch"></i>
		<el-popover v-model:visible="isPopover" :width="200" placement="bottom" popper-class="popover" trigger="contextmenu">
			<template #reference>
				<div v-show="isShow" :class="{active:isShow}" class="form">
					<input ref="searchInput" v-model="value" class="input" placeholder="菜单搜索" type="text"> <span class="input-border"></span>
				</div>
			</template>
			<div v-for="item in searchOption" :key="item.path" class="hover-active">
				<strong>{{item.item.meta.title}}</strong>
			</div>
		</el-popover>
	</nav>
</template>
<script lang="ts" name="Search" setup>
import Fuse from "fuse.js";
import {routerArray} from "@/router";
import {onMounted,shallowRef,watch,ref} from 'vue'

onMounted(() => {
	const dom = document.querySelector('.el-popper') as HTMLHtmlElement
	dom.style.padding = '0px'
	searchInput.value.addEventListener('focus',() => {
		if(searchOption.value.length)isPopover.value = true
	})
	searchInput.value.addEventListener('blur',() => {
		isPopover.value = false
	})
})

const searchInput = shallowRef()
const value = shallowRef('')


let isShow = shallowRef(false)
const clickSearch = () => {
	isShow.value = !isShow.value
}

const fuse = new Fuse(routerArray,{
	// 是否按优先级进行排序
	shouldSort: true,
	// 匹配算法放弃的时机， 阈值 0.0 需要完美匹配（字母和位置），阈值 1.0 将匹配任何内容。
	threshold: 0.4,
	// 匹配长度超过这个值的才会被认为是匹配的
	minMatchCharLength: 1,
	// 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
	// name：搜索的键
	// weight：对应的权重
	keys: ['meta.title']
})


let searchOption = ref([])
let isPopover = shallowRef(false)
watch(value,newValue => {
	searchOption.value = fuse.search(newValue)
	console.log(fuse.search(newValue))
	searchOption.value.length ? isPopover.value = true : isPopover.value = false
})
</script>
<style lang="less" scoped>
@keyframes inputAnimate{
	0%{
		width: 0;
	}
	100%{
		width: 200px;
	}
}

.hover-active{
	width: 100%;
	box-sizing: border-box;
	padding: 0 10px;
	height: 40px;
	line-height: 40px;
	color: var(--el-color-primary);
}

.hover-active:hover{
	transition: all 0.3s;
	background: #f5f7fa !important;
}

.header-search{
	display: flex;
	align-items: center;
	font-size: 0 !important;
	
	.active{
		animation: 0.5s inputAnimate;
	}
	
	.icon-search{
		font-size: 22px;
		color: rgb(0 0 0 / 75%);
		cursor: pointer;
		margin-right: 5px;
	}
	
	.form{
		--width-of-input: 200px;
		--border-height: 1px;
		--border-before-color: rgb(58, 61, 66);
		--border-after-color: #5891ff;
		--input-hovered-color: #4985e01f;
		position: relative;
		width: var(--width-of-input);
	}
	
	.input{
		width: 100%;
		color: #282c34;
		font-size: 0.9rem;
		background-color: transparent;
		box-sizing: border-box;
		padding-inline: 0.5em;
		padding-block: 0.7em;
		border: none;
		border-bottom: var(--border-height) solid var(--border-before-color);
	}
	
	.input-border{
		position: absolute;
		background: var(--el-color-primary);
		width: 0;
		height: 2px;
		bottom: 0;
		left: 0;
		transition: 0.3s;
	}
	
	input:focus{
		outline: none;
	}
	
	input:focus ~ .input-border{
		width: 100%;
	}
}
</style>
