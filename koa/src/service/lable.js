const connection = require('../app/database.js')

class LabelService {
	async save(name){
		const statement = `INSERT INTO label (name) VALUES (?)`
		const [result] = await connection.execute(statement,[name])
		return result
	}
	async query(name){
		const statement = `SELECT * FROM label WHERE name = (?)`
		const [result] = await connection.execute(statement,[name])
		return result
	}
}


module.exports = new LabelService()
