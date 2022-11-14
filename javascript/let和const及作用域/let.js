//let 关键字不能重复声明
// let a = 1
// let a = 2


//let 关键字具有块级作用域,(块级作用域,全局作用域,函数作用域, 严格模式中的eval作用域)
// var有变量提升,let没有,不能在声明前使用



let app = {

}

if (app.name === undefined){
	console.log('aaa')
}