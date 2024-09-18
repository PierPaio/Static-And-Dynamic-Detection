import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'boxicons/css/boxicons.min.css'
import './assets/App.css'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app');
