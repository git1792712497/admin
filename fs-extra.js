import fs from 'fs-extra'
let data = fs.readFileSync('./.env') //fs读取文件
console.log(data.toString().slice(1,10))

const time = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()

const str = `VITE_TIME=${time}` + '\n'

fs.writeFile('./.env',str, (err) => {
  if (err) {
    console.log('写入失败', err)
  } else {
    console.log('版本号写入成功')
  }
})
