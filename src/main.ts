import { createApp } from 'vue'
import App from './App.vue'
import {pinia} from "@/store";
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import * as Icons from "@element-plus/icons-vue";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {directives} from '@/directives'
import {router} from '@/router'

// element dark(内置暗黑模式)
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element dark(自定义暗黑模式)
import "@/assets/style/dark.less";

const app = createApp(App)
// 注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key]);
});


app.config.globalProperties.$foo = () => {
	console.log('全局函数')
}

app.use(directives) //自定义指令
app.use(Antd)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(Avue)
app.mount('#app')
