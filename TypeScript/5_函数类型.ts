function foo(){

}

function bar(fun: ()=>void){

}

//定义函数时编写函数类型
type addType = (num1:number,num2:number) => number
const add: addType = (num1,num2) => {
	return num1 + num2
}

//函数类型
function calc(n1:number,n2:number,fn:(num1:number,num2:number)=>number){
	return fn(n1,n2)
}

const result1 = calc(20,30,function (a1,a2){
	return a1 + a2
})
console.log(result1)

const result2 = calc(20,30,function (a1,a2){
	return a1 * a2
})
console.log(result2)


function sum(...sum:number[]){
	console.log(sum)
}
sum(1,2,3,4,5)
