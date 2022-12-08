
function computed(n){
  return n <= 2 ? 1 : computed(n-1) + computed(n-2)
}

var onmessage = (event) => {
  console.time('计算时长')
  const number = computed(event.data)
  postMessage(number)
  console.timeEnd('计算时长')
}

