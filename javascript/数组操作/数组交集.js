let arr1 = [{age:1}]
let arr2 = [{age:1}]

//数组对象值相等
function intersect(arr1, arr2, key) {
  const map = new Map();
  arr1.forEach((val) => map.set(val[key]));
  return arr2.filter((val) => map.has(val[key]));
}

// 原始数据类型
function intersectBase(arr1, arr2) {
  const map = new Map();
  arr1.forEach((val) => map.set(val));
  return arr2.filter((val) => map.has(val));
}

console.log(intersect(arr1,arr2,'age'));