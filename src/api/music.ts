import { music } from "@/axios/config";


// 通过ip确定位置
export function getBanner(){
	return music.get({
		url:`/banner`
	})
}