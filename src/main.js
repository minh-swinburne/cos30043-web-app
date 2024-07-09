import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './vuetify'
import firebase from './firebase'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')

// console.log('Hello from main.js')
