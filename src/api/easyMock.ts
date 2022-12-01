import { easyMock } from "@/axios/config";

export function getChinaMapData():any{
	return easyMock.get({
		url:`/map/chinaMapData`,
	})
}

export function getYunNanMapData():any{
	return easyMock.get({
		url:`/map/yunNan`,
	})
}