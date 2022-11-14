async function foo(){
  console.log(1)
  await foo2()
  console.log(3)
}

async function foo2(){
  console.log(4)
}

console.log(5)

setTimeout(() => {
  console.log(6)
})

foo()

new Promise(resolve => {
  console.log(7)
  resolve()
}).then(() => {
  console.log(8)
})

console.log(9)