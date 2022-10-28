import {utils,writeFile} from 'xlsx'
import type { WorkBook } from 'xlsx';
import type { JSON2SheetOpts, WritingOptions } from 'xlsx';
export interface JsonToSheet<T = any> {
	data: T[];
	header?: T;
	filename?: string;
	json2sheetOpts?: JSON2SheetOpts;
	write2excelOpts?: WritingOptions;
}

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

//处理时间
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
function getCellWidth(value) {
	// 判断是否为null或undefined
	if (value) {
		if (/.*[\u4e00-\u9fa5]+.*$/.test(value)) {
			// 中文的长度
			const chineseLength = value.match(/[\u4e00-\u9fa5]/g).length;
			// 其他不是中文的长度
			const otherLength = value.length - chineseLength;
			return chineseLength * 2.1 + otherLength * 1.2;
		} else {
			value = value.toString()
			return value.replace(/[\u0391-\uFFE5]/g, 'aa').length
		}
	} else {
		return 4;
	}
}

function setColumnWidth(data, worksheet, min = 4) {
	const obj = {};
	worksheet['!cols'] = [];
	data.forEach((item) => {
		Object.keys(item).forEach((key) => {
			const cur = item[key];
			obj[key] = Math.max(obj[key] ?? min,getCellWidth(cur))
		});
	});
	Object.keys(obj).forEach((key) => {
		worksheet['!cols'].push({
			wch: obj[key],
		});
	});
}

export function jsonToExcel<T = any>({data,header,filename = '表.xlsx',json2sheetOpts = {},write2excelOpts = { bookType: 'xlsx' }}: JsonToSheet<T>) {
	let arrData = [...data]
	for (let key in header){
		if (!header[key])delete header[key]
	}
	if (Object.keys(header).length) {
		arrData = data.map(item => {
			let tmp:any = {}
			for(let key in header) {
				tmp[key] = item[key]
			}
			return tmp
		});
		arrData.unshift(header);
		json2sheetOpts.skipHeader = true;
	}
	const worksheet = utils.json_to_sheet(arrData, json2sheetOpts);
	setColumnWidth(arrData, worksheet);
	const workbook: WorkBook = {
		SheetNames: [filename],
		Sheets: {
			[filename]: worksheet,
		},
	};
	writeFile(workbook, filename, write2excelOpts);
}




