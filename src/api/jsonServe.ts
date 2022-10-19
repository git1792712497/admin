import { jsonServer } from "@/axios/config";

export function getList(params?):any{
	return jsonServer.get({
		url:`/posts`,
		params,
	})
}

export function getAddData(data){
	return jsonServer.post({
		url:`/posts`,
		data,
	})
}

export function getUpdate(data){
	return jsonServer.patch({
		url:`/posts/${data.id}`,
		data
	})
}

export function getDelete(data){
	return jsonServer.delete({
		url:`/posts/${data.id}`,
		data,
	})
}