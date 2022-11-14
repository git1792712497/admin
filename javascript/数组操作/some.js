//some用于检测数组中是否有一个满足条件的元素,返回值是布尔值,找打第一个就终止
//接受一个函数作为参数
//
let array = [1,2,3,4,5];

let value = array.some(item => item === 1)
console.log(value)