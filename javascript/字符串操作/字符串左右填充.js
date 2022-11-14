const str = 'abc'

//在字符串前填充padStart(填充后字符串长度,填充内容),
//在字符串后填充padEnd(填充后字符串长度,填充内容),
let newStr = str.padEnd(10,'a').padStart(5,'b')
console.log(newStr)



console.log('1'.slice(0,1));