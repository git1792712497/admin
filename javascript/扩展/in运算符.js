const o1 = {'foo': 0};
console.log('foo' in o1); // true

//如果指定的属性位于对象或其原型链中，“in”运算符将返回true。


const o2 = {};
console.log('foo' in o2); // false


const o3 = Object.create(o1);
console.log('foo' in o3); // true
