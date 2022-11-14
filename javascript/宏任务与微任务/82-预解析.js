// js 引擎执行js分为,预解析,代码执行
//预解析:js引擎会把js里 var(变量) 和 function 提升到当前作用域的最前面
//然后按照代码书写顺序从上往下执行
//预解析:分为变量预解析(变量提升)函数预解析(函数提升)
// 变量提升就是 把所用变量声明提升到当前作用域最前面 ,不提升赋值
//函数提升就是把函数声明提升到最前面不调用函数

console.log(num1) //undefined
var num1 = 10;
//上面两行代码相当于
var num1;
console.log(num);
num1=10;

//可以执行
fn();
function fn(){
    console.log("预解析");
}

//表达式声明函数
fun();
var fun = function (){
    console.log("a")
}

