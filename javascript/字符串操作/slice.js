//slice 用于剪切数组,不会从原数组中删除元素,可以接收两个参数(起始参数和结束),传负数就是往后截取

let str = '530381200003052311';

let newStr = str.slice(-4);

console.log(newStr)

console.log(str)