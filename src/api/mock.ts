import {mock} from "@/axios/config";
export function getTestData():any{
	return mock.get({
		url:`/mock/test`,
	})
}

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