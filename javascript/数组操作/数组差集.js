// 引用类型
function difference(arr1, arr2, key) {
  const map = new Map();
  arr1.forEach((val) => map.set(val[key]));
  return arr2.filter((val) => !map.has(val[key]));
}

// 原始数据类型
function differenceBase(arr1, arr2) {
  const map = new Map();
  arr1.forEach((val) => map.set(val));
  return arr2.filter((val) => !map.has(val));
}