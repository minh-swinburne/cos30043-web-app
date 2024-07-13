import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import vuetify from './plugins/vuetify'
import firebase from './plugins/firebase'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')

// console.log('Hello from main.js')
