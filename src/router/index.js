import { createRouter, createWebHistory } from 'vue-router'
import main from '../components/MainRouter.vue'
import productCard from '../components/Product-card.vue'
import productsList from '../components/Products-list.vue'
import cart from '../components/Cart.vue'
const routes = [
    {
        path: '/',
        name: "Main",
        component: main,
    },
    {
        path: '/product',
        name: 'Product',
        component: productCard,
    },
    {
        path: '/products',
        name: 'products',
        component: productsList,
    },
    {
        path: '/cart',
        name: 'cart',
        component: cart,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router