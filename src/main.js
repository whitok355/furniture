import { createApp } from 'vue'
import Router from '@/router'
import Store from '@/store/store'
import App from '@/App.vue'

createApp(App)
    .use(Router)
    .use(Store)
    .mount('#app')
