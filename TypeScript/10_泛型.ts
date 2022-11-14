//在定义函数时,先不决定参数的类型,而是调用的时候以参数的形式告知参数是什么类型
// T是type缩写,K是key,V是value,E是element,O是object
function foo<T,E>(num1:T,num2:E):void{
	console.log(num1)
	console.log(num2)
}

//明确传入类型
foo<number,string>(100,'100')
foo<string,string>('aa','bb')

// 类型推到
foo(1,'a')


//泛型接口
interface Person<T1,T2>{
	name:T1,
	age:T2
}
const obj:Person<string, number> = {
	name:'周龙权',
	age:21
}

//类型约束
interface len{
	length:number
}

function getLen<T extends len>(args:T){
	return args.length
}

let res = getLen([1,2,3])
