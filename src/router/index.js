import Vue from "vue"
import vueRouter from "vue-router"

Vue.use(vueRouter)

import Index from '../views/Index.vue'
import Invoice from '../views/invoice-details.vue'

// import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        name: 'invoice-details',
        path: '/:id',
        component: Invoice
    },
]


const router = new vueRouter({
    routes,
    mode: 'history'
})

export default router;