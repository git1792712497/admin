//判断数据类型
export const isType = value => Object.prototype.toString.call(value).slice(8, -1).toLocaleLowerCase();

