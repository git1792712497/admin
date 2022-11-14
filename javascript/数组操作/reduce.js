//reduce() 用于数组中值累加,累加对象数组里的值,将二维数组转化为一维,计算数组中每个元素出现的次数
// 第一个参数是个匿名函数,第二个参数是累加器初始值

//然后匿名函数里又接受四个参数
//第一个参数是(累加器)初始值或计算结束后返回的值(必选),第一次执行返回的值
//第二个参数是当前元素(必选)
//第三个参是当前元素索引(可选)
//第四个参数是源数组(可选)


let array = [{a:11},{a:2},{a:3}]

// array.reduce(function (){},100)

let value = array.reduce(function (value,item,index,arr){
    return value + item.a
},0)
console.log(value)

//reduceRight()则是从数组最后一项开始遍历
