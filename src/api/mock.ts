import {mock} from "@/axios/config";
export function getChinaMapData():any{
	return mock.get({
		url:`/mock/chinaMapData`,
	})
}

export function getYunNanMapData():any{
	return mock.get({
		url:`/mock/yunNanData`,
	})
}