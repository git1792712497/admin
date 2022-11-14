function add(num1:number,num2:number):number
function add(num1:string,num2:string):string

function add(num1:any,num2:any):any{
	return num1 + num2
}

let result1 = add(1,2)
console.log(result1)

let result2 = add('a','b')
console.log(result2)

//联合类型和函数重载
