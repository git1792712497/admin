
  console.time('test')
  let a = 0
  for (let index = 0; index < 1000000; index++) {
    a += 1
  }
  console.timeEnd('test')
