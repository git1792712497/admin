//这种是同步导入的解析完才会执行后面的
import {message,title} from './C.js'


console.log(message,title)


//异步的
import('./C.js').then(result => {
	console.log(result)
})


//es11新增
console.log(import.meta)



const div = document.querySelector('div')
console.log(div)
