export function relativeTime(time:number){
  const delta = (new Date().getTime() - time) / 1000
  if (delta / (60 * 60 * 24 * 365) > 1)return `${parseInt(String (delta / (60 * 60 * 24 * 365)))}年前`
  if (delta / (60 * 60 * 24 * 30) > 1)return `${parseInt(String (delta / (60 * 60 * 24 * 30)))}个月前`
  if (delta / (60 * 60 * 24 * 7) > 1)return `${parseInt(String (delta / (60 * 60 * 24 * 7)))}周前`
  if (delta / (60 * 60 * 24) > 1)return `${parseInt(String (delta / (60 * 60 * 24)))}天前`
  if (delta / (60 * 60) > 1) return `${parseInt(String (delta / (60 * 60)))}小时前`
  if (delta / 60 > 1) return `${parseInt(String (delta / 60))}分钟前`
  return '刚刚'
}


export function getTimeState() {
  // 获取当前时间
  let timeNow = new Date();
  // 获取当前小时
  let hours = timeNow.getHours();
  // 判断当前时间段
  if (hours >= 6 && hours <= 10) return `早上好 ⛅`;
  if (hours >= 10 && hours <= 14) return `中午好 🌞`;
  if (hours >= 14 && hours <= 18) return `下午好 🌞`;
  if (hours >= 18 && hours <= 24) return `晚上好 🌛`;
  if (hours >= 0 && hours <= 6) return `凌晨好 🌛`;
}