import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.config.globalProperties.baseurl = 'http://127.0.0.1:8000/api'
app.mount('#app')