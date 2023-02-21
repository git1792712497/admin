//分页选择切换成失效hooks

import {ref,computed} from 'vue'


export function useTableSelect<T>(){
  let selectedRowKeys = ref<string[]>([])
  let selectedRowData = ref<T[]>([])
  const clearKeys = () => selectedRowKeys.value.length = 0
  const rowSelection = computed(() => {
    return {
      preserveSelectedRowKeys:true,
      selectedRowKeys: computed(() => selectedRowKeys.value),
      onChange(keys,selectedRows) {
        selectedRowKeys.value = keys;
        selectedRowData.value = selectedRows
      },
    };
  });
  return{
    rowSelection,
    clearKeys,
    selectedRowKeys,
    selectedRowData
  }
}

