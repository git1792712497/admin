import {utils} from 'xlsx'
/**
 * 获取表头（通用方式）
 */
export const getHeaderRow = sheet => {
	 const headers = []
	 const range = utils.decode_range(sheet['!ref'])
	 let C
	 const R = range.s.r
	 for (C = range.s.c; C <= range.e.c; ++C) {
			const cell = sheet[utils.encode_cell({c: C, r: R})]
			let hdr = 'UNKNOWN ' + C
			if (cell && cell.t) hdr = utils.format_cell(cell)
			headers.push(hdr)
	 }
	 return headers
}

/**
 * 解析 excel 导入的时间格式
 */
const formatDate = (number: number) => {
	 if (!number && typeof Number(number) === 'number') return
	 const time: any = new Date((number - 1) * 24 * 3600000 + 1)
	 time.setYear(time.getFullYear() - 70)
	 const year = time.getFullYear() + ''
	 const month: any = time.getMonth() + 1 + ''
	 const date: any = time.getDate() - 1 + ''
	 return year + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date)
}

export const object = {'订单编号': 'orderNo', '下单时间': 'orderDate', '详细地址': 'address', '收件人': 'receiver', '收件人电话': 'receiverPhone'}

export function formatExcel(list: any[]) {
	 const result = []
	 list.forEach(item => {
			let obj: any = {}
			Object.keys(item).forEach(key => {
				 if (object[key]) obj[object[key]] = item[key]
			})
			if (obj.orderDate) obj.orderDate = formatDate(obj.orderDate)
			result.push(obj)
	 })
	 return result
}

//JSON转excel接收二维数组
export function formatJson(list: any[]) {
	 return list.map(item => {
			return Object.keys(object).map(key => {
				 return item[object[key]]
			})
	 })
}





