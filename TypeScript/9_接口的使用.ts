//interface定义对象类型
interface type{
	readonly name:string, //readonly只读属性
	age:number,
	flag:boolean
}
const info:type = {
	name:'周龙权',
	age:21,
	flag:true
}

//索引类型
interface Interface {
	[name:string]:number
}
const language:Interface = {
	'C':1996,
	'java':1978,
	'JS':1999,
}
