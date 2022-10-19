import { music } from "@/axios/config";

export function getArtist(params):any{
	return music.get({
		url:`/artist/list`,
		params
	})
}

