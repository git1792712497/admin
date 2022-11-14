// 导出
export var num = 1

// 导出函数
export function num(){

}

// 导出类

export class person{

}

// 放对象里导出
export{}


// 匿名导出(只能有一个)
export default aaa
// 然后导入时
import sss from "加位置"

// 导入
import {flag,sum} from "./a模块"



// 全部导入
import * as 名称 from  "什么位置"




//type="module" 模块化开发



{/* <script src="./a模块.js" type="module"></script>
<script src="./b模块.js" type="module"></script>
<script src="./main.js" type="module"></script> */}