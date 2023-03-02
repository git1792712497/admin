//随机id
export let nanoid = (t = 21) => {
	return crypto.getRandomValues(new Uint8Array(t)).reduce(((t, e) => t += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e > 62 ? "-" : "_"), "");
}

//检测平台
export const detectDeviceType = () => navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? 'Mobile' : 'Desktop';

//数组转对象
export function arrayToObject(arr, key, val) {
	return arr.reduce((obj, item) => {
		if (item[key])obj[item[key]] = item[val];
		return obj;
	}, {});
}

//判断数据类型
const isType = value => Object.prototype.toString.call(value)
export const isFunction = (val) => isType(val) === '[object Function]'
export const isAsync = (val) => isType(val) === '[object AsyncFunction]'
export const isObject = (val) => val !== null && typeof val === 'object'
export const isString = (val) => typeof val === 'string'
export const isNumber = (val) => typeof val === 'number'
export const isBigInt = (val) => typeof val === 'bigint'
export const isBoolean = (val) => typeof val === 'boolean'
export const isRegExp = (val) => isType(val) === '[object RegExp]'
export const isDate = (val) => val instanceof Date
export const isMap = (val) => isType(val) === '[object Map]'
export const isSet = (val) => isType(val) === '[object Set]'
export const isPromise = (val) => isType(val) === '[object Promise]'
export const isSymbol = (val) => typeof val === 'symbol'
export const isEmpty = (val: any): val is boolean => !val && val !== 0;
