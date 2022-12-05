// https://github.com/vbenjs/vite-plugin-compression

/*gzip or brotli压缩*/

import viteCompression from "vite-plugin-compression";

export default function (){
	return viteCompression({
		verbose: true,
		disable: false,
		threshold: 10240,
		algorithm: "gzip",
		ext: ".gz"
	})
}