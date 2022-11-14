const timeFromDate = date => date.toTimeString().slice(0, 8);
// console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0)));
// Result: "17:30:00"
console.log(timeFromDate(new Date()));
// Result: 返回当前时间



//计算两个日期之间的间隔
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

dayDif(new Date("2021-11-3"), new Date("2022-2-1"))  // 90
