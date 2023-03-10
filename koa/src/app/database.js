const mysql = require('mysql2')


// 1.创建连接池
const connectionPool = mysql.createPool({
	host: 'mysql.sqlpub.com',
	port: 3306,
	database: 'mysql1792712497',
	user: 'mysql1792712497',
	password: '4282275013f61a6d',
	connectionLimit: 10 //最大连接池
})


// 2.获取连接是否成功
connectionPool.getConnection((err, connection) => {
	// 1.判断是否有错误信息
	if (err) {
		console.log('获取连接失败~', err)
		return
	}
	// 2.获取connection, 尝试和数据库建立一下连接
	connection.connect(err => {
		if (err) {
			console.log('和数据库交互失败', err)
		} else {
			console.log('数据库连接成功')
		}
	})
})

//3_获取连接池中连接对象(promise)
const connection = connectionPool.promise()


module.exports = connection
