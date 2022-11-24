import echarts from '../settings/echarts'

export function useEcharts(selector: string, theme: 'light' | 'dark' | 'default' = 'default') {
	const echartsInstance = echarts.init(document.querySelector(selector), theme, {renderer: 'svg'})
	
	function setOption(options) {
		echartsInstance.setOption(options)
	}
	
	function resize() {
		echartsInstance.resize({
			animation: {
				duration: 300,
				easing: 'quadraticIn',
			},
		});
	}
	
	return {
		setOption,
		echartsInstance,
		resize,
		echarts
	}
}