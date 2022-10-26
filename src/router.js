import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/index.vue'
import productCard from '@/views/Product-card.vue'
import productsList from '@/views/Products-list.vue'
import cart from '@/views/Cart.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: "index",
            component: index,
        },
        {
            path: '/product/:id',
            name: 'Product',
            component: productCard,
        },
        {
            path: '/products/:id',
            name: 'products',
            component: productsList,
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart,
        }
    ]
})

export default router