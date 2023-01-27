<template>
    <header>
        <router-link to="/">
            <a href="./index.html">
                <img src="../assets/global/logo.png" alt="imagem de logo" />
                <p>Hotel H</p>
            </a>
        </router-link>

        <nav>
            <ul class="flex">
                <li v-for="(name, index) in navBtns" v-bind:key="index">
                    <router-link :to="name.refTo">
                        <img :src="name.icon" alt="icone de sobre" />
                        <p>{{ name.text }}</p>
                    </router-link>
                </li>
            </ul>
        </nav>
        <HotelHeaderLogin />
        <HotelHeaderSidebar />
    </header>
</template>

<script>
import HotelHeaderLogin from "./HotelHeaderLogin.vue"
import HotelHeaderSidebar from "./HotelHeaderSidebar.vue"

export default {
    name: "HotelHeader",
    data() {
        return {
            navBtns: {
                sobre: {
                    icon: "/src/assets/global/icons/house-solid.svg",
                    text: "Sobre",
                    refTo: "/sobre"
                },
                acomodacoes: {
                    icon: "/src/assets/global/icons/bed-solid.svg",
                    text: "Acomodações",
                    refTo: "/acomodacoes"
                },
                gastronomia: {
                    icon: "/src/assets/global/icons/utensils-solid.svg",
                    text: "Gastronomia",
                    refTo: "/gastronomia"
                },
                reservas: {
                    icon: "/src/assets/global/icons/star-solid.svg",
                    text: "Reservas",
                    refTo: "/reservas"
                },
                contato: {
                    icon: "/src/assets/global/icons/envelope-solid.svg",
                    text: "Contato",
                    refTo: "/contato"
                }
            }
        }
    },
    components: {
        HotelHeaderLogin,
        HotelHeaderSidebar
    },
};
</script>

<style lang="sass" scoped>
   @import "../assets/scss/global/global.scss"

</style>