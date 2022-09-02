<template>
	<div>
		<div>{{obj}}</div>
		<button @click="handelClick">按钮</button>
	</div>
</template>
<script setup>
import { reactive, ref, toRef } from "vue";

const obj = reactive({
	age:22
})


const demo = toRef(obj,"age")


function handelClick () {
	obj.age = 100000
}
</script>

