//every 用于测试数组中的所有元素是否满足条件,返回布尔值,如果是空数组返回就是true

// let arr = ['python','java','js','c++']
let arr = [{age:'22'},{age:'21'}]
// let result = arr.every((item,index,arr)=>{
//     return item.length>1
// })
//
// console.log(result);

let a = arr.every(item=>item.age === '21')

console.log(a)
