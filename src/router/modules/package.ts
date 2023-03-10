import {RouteRecordRaw} from "vue-router";

export default [
	 {
			path: '/package',
			name: 'package',
			meta: {
				 index: 3,
				 title: '第三方库',
				 icon: 'Handbag'
			},
			children: [
				 {
						path: 'driver',
						name: 'driver',
						component: () => import('@/views/package/driver.vue'),
						meta: {
							 title: '功能引导',
							 icon: 'Menu'
						}
				 },
				 {
						path: 'fuse',
						name: 'fuse',
						component: () => import('@/views/package/fuse.vue'),
						meta: {
							 title: '模糊搜索',
							 icon: 'Menu'
						}
				 },
				{
					path: 'download',
					name: 'download',
					component: () => import('@/views/package/download.vue'),
					meta: {
						title: '文件下载',
						icon: 'Menu'
					}
				},
				 {
						path: 'excel',
						name: 'excel',
						component: () => import('@/views/package/excel.vue'),
						meta: {
							 title: 'excel导入导出',
							 icon: 'Menu'
						}
				 },
				 {
						path: 'print',
						name: 'print',
						component: () => import('@/views/package/print.vue'),
						meta: {
							 title: '页面打印',
							 icon: 'Menu'
						}
				 },
				 {
						path: 'sortable',
						name: 'sortable',
						component: () => import('@/views/package/sortable.vue'),
						meta: {
							 title: '拖拽排序',
							 icon: 'Menu'
						}
				 },
				 {
						path: 'wangEditor',
						name: 'wangEditor',
						component: () => import('@/views/package/wangEditor.vue'),
						meta: {
							 title: '富文本编辑器',
							 icon: 'Menu'
						}
				 },
				{
					path: 'watermark',
					name: 'watermark',
					component: () => import('@/views/package/watermark.vue'),
					meta: {
						title: '水印',
						icon: 'Menu'
					}
				},
				{
					path: 'countUp',
					name: 'countUp',
					component: () => import('@/views/package/countUp.vue'),
					meta: {
						title: '数值滚动',
						icon: 'Menu'
					}
				},
				{
					path: 'barcode',
					name: 'barcode',
					component: () => import('@/views/package/barcode.vue'),
					meta: {
						title: '条形码',
						icon: 'Menu'
					}
				},
				{
					path: 'qrcode',
					name: 'qrcode',
					component: () => import('@/views/package/qrcode.vue'),
					meta: {
						title: '二维码',
						icon: 'Menu'
					}
				},
				{
					path: 'howler',
					name: 'howler',
					component: () => import('@/views/package/howler.vue'),
					meta: {
						title: '音频处理',
						icon: 'Menu'
					}
				},
				{
					path: 'player',
					name: 'player',
					component: () => import('@/views/package/player.vue'),
					meta: {
						title: '西瓜视频播放器',
						icon: 'Menu'
					}
				},
				{
					path: 'swiper',
					name: 'swiper',
					component: () => import('@/views/package/swiper.vue'),
					meta: {
						title: '滑动切换',
						icon: 'Menu'
					}
				},
				{
					path: 'fullpage',
					name: 'fullpage',
					component: () => import('@/views/package/fullpage.vue'),
					meta: {
						title: '全屏滚动',
						icon: 'Menu'
					}
				},
				{
					path: 'cropper',
					name: 'cropper',
					component: () => import('@/views/package/cropper.vue'),
					meta: {
						title: '图片裁切',
						icon: 'Menu'
					}
				},
				{
					path: 'tippy',
					name: 'tippy',
					component: () => import('@/views/package/tippy.vue'),
					meta: {
						title: '气泡提示',
						icon: 'Menu'
					}
				},
				{
					path: 'typed',
					name: 'typed',
					component: () => import('@/views/package/typed.vue'),
					meta: {
						title: '打字效果',
						icon: 'Menu'
					}
				},
				{
					path: 'gasp',
					name: 'gasp',
					component: () => import('@/views/package/gsap.vue'),
					meta: {
						title: 'gasp动画',
						icon: 'Menu'
					}
				},
				{
					path: 'scrollReveal',
					name: 'scrollReveal',
					component: () => import('@/views/package/scrollReveal.vue'),
					meta: {
						title: '滚动动画',
						icon: 'Menu'
					}
				},
				{
					path: 'waves',
					name: 'waves',
					component: () => import('@/views/package/waves.vue'),
					meta: {
						title: '波纹效果',
						icon: 'Menu'
					}
				},
				{
					path: 'hover.css',
					name: 'hover.css',
					component: () => import('@/views/package/hover.css.vue'),
					meta: {
						title: 'hover.css',
						icon: 'Menu'
					}
				},
				{
					path: 'localForage',
					name: 'localForage',
					component: () => import('@/views/package/localForage.vue'),
					meta: {
						title: 'localForage存储',
						icon: 'Menu'
					}
				},
			]
	 }
] as RouteRecordRaw[]
