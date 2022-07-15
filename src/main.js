import { createApp } from 'vue'
import XJsonView from '../packages/index'
import App from './App.vue'

const app = createApp(App)
app.use(XJsonView).mount('#app')
