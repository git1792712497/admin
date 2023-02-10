//分页选择切换成失效hooks

export let selectedRowKeys = ref([])
export let selectedRowData = ref([])
export function getSelectData(){
  let selectData = []
  selectedRowKeys.value.forEach(id => {
    const findValue = selectedRowData.value.find(item => item?.id === id)
    findValue && selectData.push(findValue)
  })
  return JSON.parse(JSON.stringify(selectData))
}

export function useTableSelect():any{
  const clearKeys = () => selectedRowKeys.value = []
  const rowSelection = computed(() => {
    return {
      preserveSelectedRowKeys:true,
      selectedRowKeys: computed(() => selectedRowKeys.value),
      onSelect(record, selected,selectedRows) {
        if (selected){
          selectedRowKeys.value.push(selected?.id)
          selectedRowData.value.push(...selectedRows)
        }else {
          selectedRowKeys.value.splice(selectedRowKeys.value.findIndex(id => id === record?.id),1)
        }
      },
      onSelectAll(selected,selectedRows,changeRows){
        if (selected){
          selectedRows.forEach(item => {
            selectedRowKeys.value.push(toRaw(item)?.id)
          })
          selectedRowData.value.push(...selectedRows)
        }else {
          changeRows.forEach(item => {
            selectedRowKeys.value.splice(selectedRowKeys.value.findIndex(id => id === toRaw(item)?.id),1)
          })
        }
      },
      onChange(keys) {
        selectedRowKeys.value = keys;
      },
    };
  });
  return{
    rowSelection,
    clearKeys
  }
}

