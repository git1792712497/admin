<template>
  <div class="form">
    <input ref="input" v-model="value" :placeholder="placeholder" class="input" type="text">
    <span class="input-border"></span>
  </div>
</template>

<script lang="ts" name="Search" setup>
import {computed, onMounted, shallowRef} from "vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: '请输入内容'
  },
  modelValue: {
    type: [String, Number]
  }
})
const value = computed({
  set(value) {
    emit('update:modelValue', value)
  },
  get() {
    return props.modelValue
  }
})

const input = shallowRef()

const emit = defineEmits(['update:modelValue', 'focus', 'blur'])
onMounted(() => {
  input.value.addEventListener('focus', (e) => {
    emit('focus', e)
  })
  input.value.addEventListener('blur', (e) => {
    emit('blur', e)
  })
})
</script>

<style lang="less" scoped>
.form {
  --width-of-input: 200px;
  --border-height: 1px;
  --border-before-color: rgb(58, 61, 66);
  --border-after-color: #5891ff;
  --input-hovered-color: #4985e01f;
  position: relative;
  width: var(--width-of-input);
}

.input {
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

.input-border {
  position: absolute;
  background: var(--el-color-primary);
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  transition: 0.3s;
}

input:focus {
  outline: none;
}

input:focus ~ .input-border {
  width: 100%;
}
</style>