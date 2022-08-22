import { createApp } from 'vue'
import App from './App.vue'
import {router} from '@/router'
import {pinia} from "@/store";
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(Avue)
app.use(pinia)
app.use(router)
app.mount('#app')
