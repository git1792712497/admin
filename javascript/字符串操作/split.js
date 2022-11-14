// split() 方法用于把一个字符串分割成字符串数组
//第一个参数传字符串或正则,指定从什么地方分隔
//第二个参数切割后返回数组的长度
let string = 'http://gyyg.oss-cn-shenzhen.aliyuncs.com/upload/20220618/bb1c87d2f7b9a26e6da3b2fc1379f8c9.png'

let array = string.split('.') //分隔每个字符包括空格

console.log(array.at(-1))




