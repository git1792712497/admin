// find返回满足条件的第一个元素,
// findIndex则是返回索引,不存在返回-1,接收一个函数要求返回布尔类型值
let array =[1,23,4,5,5];

let arr = array.find(function (item,index,arr){
    return item === 0
})

console.log(arr)

let s = ['js','jsp','dd','wd'];

let  result = s.filter(item =>item.indexOf('d') === 0 )

console.log(result.toString());
