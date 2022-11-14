//forEach没有返回值

let arr = [{name:'李白'},{name:'关羽'},{name:'张飞'}]

arr.forEach((item,index) => {
    item.age = 20
})

console.log(arr)