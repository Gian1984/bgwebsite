import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import VueCookieComply from 'vue-cookie-comply'
import 'vue-cookie-comply/dist/style.css'
import i18n from './i18n'



createApp(App).use(i18n).use(store).use(router).use(VueCookieComply).mount('#app')
