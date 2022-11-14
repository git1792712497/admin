let object = {
  age:21
}

object.__proto__ = {
  name:'21'
}
//es13 判断对象上是否有这个属性,不会查找原型
console.log(Object.hasOwn(object,'name'));