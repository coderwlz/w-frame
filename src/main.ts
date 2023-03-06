import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import ColorPicker from 'colorpicker-v3' // 注册组件
import i18n from './language'
import App from './App.vue'
import router from './router'
import '@/mock'
import './assets/css/main.less'

import 'ant-design-vue/dist/antd.variable.min.css'

const app = createApp(App)
app.use(ColorPicker)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Antd)
app.mount('#app')
