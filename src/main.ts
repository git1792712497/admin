import { createApp } from 'vue'
import App from './App.vue'
import pinia from "@/store";
import router from '@/router'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import components from "@/components";
import directives from '@/directives'
import {formatTime} from '@/utils/time'
import VueLuckyCanvas from '@lucky-canvas/vue'
import VueFullPage from 'vue-fullpage.js'

const app = createApp(App)

//样式重置
import 'normalize.css'
// element dark(内置暗黑模式)
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element dark(自定义暗黑模式)
import "@/assets/style/dark.less";
//svgIcon
import 'virtual:svg-icons-register'
// tailwind.css
import "@/assets/style/tailwind.css"
// ElMessage和notification组件样式要手动导入
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-notification.css'
// 注册element Icons组件
import * as Icons from "@element-plus/icons-vue";
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key]);
});


app.config.globalProperties.$formatTime = formatTime

app.config.errorHandler = (err,vm,info) => {
	console.error('全局异常处理',err)
	console.log('全局异常处理',vm)
	console.log('全局异常处理',info)
}

app.use(Avue)
app.use(components) //组件
app.use(directives) //自定义指令
app.use(pinia)
app.use(router)
app.use(VueLuckyCanvas)
app.use(VueFullPage)
app.mount('#app')
