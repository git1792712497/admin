// Reflect.has 用于检查一个对象是否拥有某个属性， 相当于in 操作符 。



const obj = {
	age:21
}

const boolean = Reflect.has(obj,'age')

console.log('age' in obj);
console.log(boolean)
