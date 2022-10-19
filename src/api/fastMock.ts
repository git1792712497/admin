import {fastMock} from "@/axios/config";
export function getHistogramData():any{
	return fastMock.get({
		url:`/histogram`,
	})
}


export function getImageList(page = 0):any{
	return fastMock.get({
		url:`/images${page}`
	})
}