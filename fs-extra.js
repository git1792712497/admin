const fs = require('fs-extra')
let data = fs.readFileSync('./.env') //fs读取文件

const time = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()

const str = `VITE_TIME=${time}` + '\n'

fs.writeFileSync('./.env',str, (err) => {
  if (err) {
    console.log('写入失败', err)
  } else {
    console.log('写入成功')
  }
})
