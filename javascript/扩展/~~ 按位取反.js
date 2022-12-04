/*
~~的作用是去掉小数部分,对于正数，向下取整；对于负数，向上取整；
与Math.floor()不同的是，它只是单纯的去掉小数部分，不论正负都不会改变整数部分
非数字取值为0，它具体为：*/

console.log(~~ null);      // => 0
console.log(~~ undefined); // => 0
console.log(~~ Infinity);  // => 0
console.log(~~ NaN);       // => 0
console.log(~~ 0);         // => 0
console.log(~~ {});        // => 0
console.log(~~ []);        // => 0
console.log(~~ (1/0));     // => 0
console.log(~~ false);     // => 0
console.log(~~ true);      // => 1
console.log(~~ 1.9);      // => 1
console.log(~~ -1.9);      // => -1
