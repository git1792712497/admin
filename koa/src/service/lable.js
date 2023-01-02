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
	//关联
	async relevancy(momentId,labelId){
		const statement = `INSERT INTO moment_label (moment_id,label_id) VALUES (?,?)`
		const [result] = await connection.execute(statement,[momentId,labelId])
		return result
	}
	
	async hasRelevancy(momentId,labelId){
		const statement = `SELECT * FROM moment_label WHERE moment_id = ? && label_id = ?`
		const [result] = await connection.execute(statement,[momentId,labelId])
		return !!result.length
	}
}


module.exports = new LabelService()
