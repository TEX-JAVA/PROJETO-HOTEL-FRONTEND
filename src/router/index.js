import { createRouter, createWebHistory } from 'vue-router'

import HotelMainPage from '../components/HotelMainPage.vue'
import HotelAbout from '../components/HotelAbout.vue'
import HotelReservations from '../components/HotelReservations.vue'
import HotelAccommodations from '../components/HotelAccommodations.vue'
import HotelGastronomia from '../components/HotelGastronomia.vue'
import HotelContact from '../components/HotelContact.vue'

const routes = [
    { path: '/', component: HotelMainPage },
    { path: '/sobre', component: HotelAbout },
    { path: '/reservas', component: HotelReservations },
    { path: '/acomodacoes', component: HotelAccommodations },
    { path: '/gastronomia', component: HotelGastronomia },
    { path: '/contato', component: HotelContact },
]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
})

export default router