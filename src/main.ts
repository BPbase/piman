import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import componentsPlugin from './components/main'

import './assets/style.css'

const app = createApp(App)

app.use(router)
app.use(componentsPlugin)
app.mount('#app')
