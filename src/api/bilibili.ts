import {bilibili} from "@/axios/config";

// 通过ip确定位置
export function getLocation(){
	return bilibili.get({
		url:`/web/generic/country/list`,
		params:{
			appkey:'1d8b6e7d45233436',
			appsec:'560c52ccd288fed045859ed18bffd973'
		}
	})
}