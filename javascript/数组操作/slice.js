//slice 用于剪切数组,不会从原数组中删除元素,可以接收两个参数(起始参数和结束),
// 传负数就是往后截取,传一个正数前截取
//左开右闭区间
let array =[1,2,3,4,5,6];

let array1 = array.slice(-3);

console.log(array1)
