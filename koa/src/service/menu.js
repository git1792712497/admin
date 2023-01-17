const connection = require('../app/database.js')

class MenuService {
	async save(menu) {
		console.log(menu)
		// 2.拼接statement,预处理语句
		const statement = 'INSERT INTO menu SET ?;'
		// 3.执行sql语句
		const [result] = await connection.query(statement, [menu])

		return result
	}
	
	async deleteRoleById(id) {
		const statement = `DELETE role FROM WHERE id = ?`
		const [result] = await connection.execute(statement, [id])
		return result
	}
	
	async query() {
		// 2.拼接statement,预处理语句
		const statement = `SELECT * FROM menu`
		// 3.执行sql语句
		const [result] = await connection.execute(statement)
		
		return result
	}
}



module.exports = new MenuService()
