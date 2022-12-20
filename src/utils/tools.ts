//随机id
export let nanoid = (t = 21) => {
	return crypto.getRandomValues(new Uint8Array(t)).reduce(((t, e) => t += (e &= 63) < 36 ? e.toString(36) : e < 62 ? (e - 26).toString(36).toUpperCase() : e > 62 ? "-" : "_"), "");
}

//检测平台
export const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

//判断数据类型
export const isType = value => Object.prototype.toString.call(value).slice(8, -1).toLocaleLowerCase();

//数组转对象
export function arrayToObject(arr, key, val) {
	return arr.reduce((obj, item) => {
		if (item[key])obj[item[key]] = item[val];
		return obj;
	}, {});
}
