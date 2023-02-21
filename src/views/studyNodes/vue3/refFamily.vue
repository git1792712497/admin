<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
        <strong>ref全家桶</strong>
    </template>

    {{state1}}
  </el-card>
</template>

<script setup lang="ts" name="refFamily">
const state = reactive({
  foo: 1,
  bar: 2
})
/*基于响应式对象上的一个属性，创建一个对应的 ref。
这样创建的 ref 与其源属性保持同步：
改变源属性的值将更新 ref 的值，反之亦然。*/
const fooRef = toRef(state, 'foo')
// 更改该 ref 会更新源属性
fooRef.value++
console.log(state.foo) // 2
// 更改源属性也会更新该 ref
state.foo++
console.log(fooRef.value) // 3


/*
stateAsRefs 的类型：{
  foo: Ref<number>,
  bar: Ref<number>
}
将一个响应式对象转换为一个普通对象*/
const stateAsRefs = toRefs(state)


/*shallowRef 对引用类型的值修改后不会改变*/
const state1 = shallowRef([])
// 不会触发更改
setTimeout(() => {
  state1.value.push(1)
},1000)

/*shallowReactive 只对根节点值做响应式*/
const state2 = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})
// 更改状态自身的属性是响应式的
state2.foo++
// 不是响应式的
state2.nested.bar++
</script>

<style scoped lang="less">

</style>
