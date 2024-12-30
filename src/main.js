import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SvgIcon from '@/components/SvgIcon/SvgIcon.js'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
