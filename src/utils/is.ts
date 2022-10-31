//判断数据类型
export const isType = value => Object.prototype.toString.call(value).slice(8, -1).toLocaleLowerCase();
//检测平台
const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

