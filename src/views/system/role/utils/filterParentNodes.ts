// 过滤父节点回显el-tree


export function filterParentNodes(echoNode:number[],treeNode:any []) {
  let nodes = []
  echoNode.forEach(value => {
    function findValue(data){
      data.forEach(item => {
        if (value === item.id && !item.children){
          nodes.push(item.id)
        }else {
          item.children && findValue(item.children)
        }
      })
    }
    findValue(treeNode)
  })
  return nodes
}

