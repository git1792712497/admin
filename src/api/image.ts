import { image } from '@/axios/config'

export function getImageList(params?):any{
	return image.get({
		url:`/napi/photos`,
		params,
	})
}