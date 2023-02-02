import {globalConfigStore} from "@/store/modules/globalConfig";
import {getDarkColor, getLightColor} from "@/utils/theme";
const globalConfig = globalConfigStore()

export const useDark = ():any => {
		const body = document.documentElement;
		if (globalConfig.themeConfig.isDark){
			 body.setAttribute("class", "dark");
		}else {
			body.setAttribute("class", "");
		}
};

// 修改主题颜色
export const changePrimary = (val: string) => {
	if (!val) globalConfig.themeConfig.primary = '#409eff';
	document.documentElement.style.setProperty("--el-color-primary-dark-2", `${getDarkColor(globalConfig.primary, 0.1)}`);
	document.documentElement.style.setProperty("--geeker-main-bg-color",'#141414');
	document.documentElement.style.setProperty("--el-color-primary", globalConfig.primary);
	for(let i = 1; i <= 9; i ++){
		document.documentElement.style.setProperty(
			`--el-color-primary-light-${i}`,
			`${getLightColor(globalConfig.primary, i / 10)}`
		);
	}
};
