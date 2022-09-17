import App from './App.vue';
import store from './store';

// import { createApp } from 'vue'
import Vue from 'vue'
import router from './router/index.js'
import './assets/tailwind.css'
import './css/global.css';


// Vue.use(Router);
// Vue.config.productionTip = false;

// new Vue({
//     render: h => h(App),
//     router: Router
// }).$mount('#app')

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')