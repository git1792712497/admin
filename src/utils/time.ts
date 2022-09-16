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