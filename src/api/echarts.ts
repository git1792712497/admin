import {fastMock} from "@/axios/config";
export function getHistogramData():any{
	return fastMock.get({
		url:`/histogram`,
	})
}