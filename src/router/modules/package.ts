import {RouteRecordRaw} from "vue-router";

export const Package: RouteRecordRaw[] = [
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
					path: 'gridLayout',
					name: 'gridLayout',
					component: () => import('@/views/package/gridLayout.vue'),
					meta: {
						title: '栅格布局',
						icon: 'Menu'
					}
				},
				 {
						path: 'markdown',
						name: 'markdown',
						component: () => import('@/views/package/markdown.vue'),
						meta: {
							 title: 'markdown编辑器',
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
					path: 'svgIcon',
					name: 'svgIcon',
					component: () => import('@/views/package/svgIcon.vue'),
					meta: {
						title: 'svg图标',
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
					path: 'veeValidate',
					name: 'veeValidate',
					component: () => import('@/views/package/veeValidate.vue'),
					meta: {
						title: '表单校验',
						icon: 'Menu'
					}
				},
			]
	 }
]
