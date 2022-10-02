import { viteMockServe } from 'vite-plugin-mock'

export default function (){
	return viteMockServe({mockPath: 'mock',localEnabled: true})
}