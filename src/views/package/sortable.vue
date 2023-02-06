<template>
  <section>
    <el-card shadow="hover">
      <template #header>
        <nav class="flex justify-between">
          <strong>拖拽排序</strong>
          <el-link href="https://github.com/SortableJS/vue.draggable.next" target="_blank" type="primary">
            https://github.com/SortableJS/vue.draggable.next
          </el-link>
        </nav>
      </template>
      <Draggable v-model="lists" animation="300" chosen-class="chosen" force-fallback="true" item-key="name" @change="change">
        <template #item="{ element, index }">
          <div class="item-single">{{ element.name }} {{ index }}</div>
        </template>
      </Draggable>
    </el-card>
  </section>
</template>

<script lang="ts" name="sortable" setup>
import Draggable from 'vuedraggable'


const lists = shallowRef([
  { people: "cn", id: 1, name: "第一" },
  { people: "cn", id: 2, name: "第二" },
  { people: "cn", id: 3, name: "第三" },
  { people: "cn", id: 4, name: "第四" }
])


const change = (evt): void => {
  console.log ("evt: ", evt);
};
</script>

<style lang="less" scoped>
:deep(.sortable) {
  background: #95bba1;
}

.item-single {
  font-size: 1.5em;
  height: 77px;
  text-align: center;
  line-height: 85px;
  border: 1px solid #e5e4e9;
  cursor: move;
}
</style>
