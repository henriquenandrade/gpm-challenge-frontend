import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/appliances',
            name: 'ApplianceIndex',
            component: () => import('../views/appliances/ApplianceIndex.vue')
        },
        {
            path: '/appliances/create',
            name: 'ApplianceCreate',
            component: () => import('../views/appliances/ApplianceCreate.vue')
        },
        {
            path: '/appliances/:id/edit',
            name: 'ApplianceEdit',
            component: () => import('../views/appliances/ApplianceEdit.vue'),
            props: true
        }
    ]
})

export default router
