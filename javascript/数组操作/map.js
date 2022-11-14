//map用于映射,接收一个匿名函数,函数里接收三个参数,返回一个新数组
// 第一个参数,是素组的每一项
// 第有二个参数,是下标索引
//第三个参数是原素组本身

let array = [
    {name:'李白',age:21},
    {name:'张飞',age:32}
];

let array1 = array.map(function (item,index,arr){
    //返回的会被增添到新数组中
    return {
    
    }
})

console.log(array1)
