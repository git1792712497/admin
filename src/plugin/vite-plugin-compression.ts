// https://github.com/vbenjs/vite-plugin-compression

/*gzip or brotli压缩*/

import viteCompression from "vite-plugin-compression";

export default function (){
	return viteCompression({
		verbose: true, //控制台输出压缩结果
		disable: true, //是否禁用
		threshold: 10240, //大于这个值进行压缩单位字节
		algorithm: "gzip",
		ext: ".gz",
		deleteOriginFile:false //压缩后是否删除原文件
	})
}