export function generateMenuTree(source, id = 'id', parentId = 'parentId', children = 'children') {
  let cloneData = JSON.parse(JSON.stringify(source))
  return cloneData.filter(father => {
    let branchArr = cloneData.filter(child => father[id] === child[parentId])
    branchArr.length > 0 ? father[children] = branchArr : ''
    return father[parentId] === null // 如果不是第一层
  })
}
