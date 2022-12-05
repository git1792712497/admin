import fs from 'fs-extra'
let data = fs.readFileSync('./.env.production') //fs读取文件
console.log(data.toString().slice(1,10))

const time = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()

const str = `VITE_TIME=${time}` + '\n' + '文件操作' + ''

fs.writeFile('./.env.production',str, (err) => {
  if (err) {
    console.log('写入失败', err)
  } else {
    console.log('版本号写入成功')
  }
})
