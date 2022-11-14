//replace用于字符串替换,只会替换第一个,要替换全部用正则

let str = "李白-world-李白"

let str1 = str.replace(/李白/g,'abc')

// g是全局,i是忽略大小写

let str2 = str.replaceAll('w','b')

console.log(str2);

console.log(str1)
