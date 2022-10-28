export function arrayToObject(arr, key, val) {
  return arr.reduce((obj, item) => {
    if (item[key])obj[item[key]] = item[val];
    return obj;
  }, {});
}