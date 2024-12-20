import { createApp } from 'vue'
import './assets/styles.css'
import App from './App.vue'
import router from './router/router.ts'

const app = createApp(App)

app.use(router)
app.mount('#app')
