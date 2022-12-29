const crypto = require('crypto')

function md5password(password) {
	const md5 = crypto.createHash('md5')
	//md5 16进制加密
  return md5.update(password).digest('hex')
}

module.exports = md5password
