let num: number = 1

let str: string = 'str'

let flag: boolean = true

let arr: number[] =  [1,2,3,4,5]

let obj = {
	name:'李白',
	age:21
}

let n2: null = null

let n1:undefined = undefined

let app: any = 'app'

let message: unknown = 'unknown' //unknown类型的值只能赋值给any和unknown

// Symbol('Symbol')

//never类型

//tuple元组类型,多种元素的组合
//可以知道元组里面每个元素类型
const info:[string,number,boolean] = ['周龙权',18,true]


//函数类型(开发中一般不写,会自动推导)
function sum(num1: number,num2: number) :number{
	return  num1 + num2
}


// type用于类型别名
type IDType = string | number | boolean //联合类型
function type(id: IDType){
	console.log(id)
}
