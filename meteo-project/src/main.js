import { createApp } from 'vue'
import App from './App.vue'

import router from './router/router.js';



createApp(App).use(router).mount('#app');

//const app = createApp(App);
//app.use(router);
//app.mount('#app');
