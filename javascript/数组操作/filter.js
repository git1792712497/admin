//filter用于素组过滤,返回新数组,接收一个回调函数,接收三个参数
//第一个参数遍历的每一项
//第二个参数素组索引
//第三个被遍历的数组本身

let array = [{id:1},{id:2},{id:3},{id:4}];
let newArray = [{id:1},{id:4}];

let array1 = array.filter(function (item,index,arr){
    // 要求返回一个布尔类型
    if(newArray.find(value => value.id === item.id))return item
})

console.log(array1);

