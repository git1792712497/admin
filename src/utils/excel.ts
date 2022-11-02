import {invert} from 'lodash-es'
import { read, utils, writeFile } from 'xlsx'
import type { WorkBook } from 'xlsx';
import type { JSON2SheetOpts, WritingOptions } from 'xlsx';
export interface JsonToSheet<T = any> {
	data: T[];
	header?: T;
	filename?: string;
	json2sheetOpts?: JSON2SheetOpts;
	write2excelOpts?: WritingOptions;
}

export function excelToJson(file:File,header:object):any{
	const fileReader = new FileReader()
	fileReader.readAsArrayBuffer(file)
	return new Promise(resolve => {
		fileReader.onload = e => {
			const excelData = e.target.result
			//1_解析后的数据
			const workbook = read(excelData, {type: 'array'})
			//2_获取第一张表工作簿的名称
			const firstSheetName = workbook.SheetNames[0]
			//3_读取第一张表数据
			const workSheet = workbook.Sheets[firstSheetName]
			//5_解析数据体
			const excelBody = utils.sheet_to_json(workSheet)
			//处理中文键
			resolve(formatExcel(excelBody,header))
		}
	})
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


//处理excel导入中文key
export function formatExcel(list: any[],object:object) {
	 const result = []
	 const invertObj = invert(object)
	 list.forEach(item => {
			let obj: any = {}
			Object.keys(item).forEach(key => {
				 if (invertObj[key]) obj[invertObj[key]] = item[key]
			})
			// if (obj.orderDate) obj.orderDate = formatDate(obj.orderDate)
			result.push(obj)
	 })
	 return result
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
		if (!header[key]){
			delete header[key]
		}
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




