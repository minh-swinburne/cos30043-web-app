import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import store from './plugins/store'
import router from './plugins/router'
import vuetify from './plugins/vuetify'
import firebase from './plugins/firebase'

import { registerServiceWorker } from './services/serviceWorker'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(vuetify)

app.mount('#app')

window.addEventListener('online', () => {
  router.push('/home')
})

// Call the service worker registration function
// registerServiceWorker();