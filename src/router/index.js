import { createRouter, createWebHistory } from 'vue-router'

import HotelMainPage from '../components/HotelMainPage.vue'
import HotelAbout from '../components/HotelAbout.vue'
import HotelReservations from '../components/HotelReservations.vue'

const routes = [
    { path: '/', component: HotelMainPage },
    { path: '/sobre', component: HotelAbout },
    { path: '/reservas', component: HotelReservations },

]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
})

export default router