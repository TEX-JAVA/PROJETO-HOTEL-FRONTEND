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
                <li>
                    <router-link to="/sobre">
                        <a href="./sobre">
                            <img src="../assets/global/icons/house-solid.svg" alt="icone de sobre" />
                            <p>Sobre</p>
                        </a>
                    </router-link>
                </li>
                <li>
                    <a href="./pages/acomodacoes.html">
                        <img src="../assets/global/icons/bed-solid.svg" alt="icone de acomodações" />
                        <p>Acomodacões</p>
                    </a>
                </li>
                <li>
                    <a href="#gastronomia">
                        <img src="../assets/global/icons/utensils-solid.svg" alt="icone de gastronomia" />
                        <p>Gastronomia</p>
                    </a>
                </li>
                <li>
                    <router-link to="/reservas">
                        <a href="./pages/reserva.html">
                            <img src="../assets/global/icons/star-solid.svg" alt="icone de top ofertas" />
                            <p>Reservas</p>
                        </a>
                    </router-link>
                </li>
                <li>
                    <a href="./pages/contato.html">
                        <img src="../assets/global/icons/envelope-solid.svg" alt="icone de contato" />
                        <p>Contato</p>
                    </a>
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
    components: {
        HotelHeaderLogin,
        HotelHeaderSidebar
    }
};
</script>

<style lang="sass" scoped>
   @import "../assets/scss/global/global.scss"

</style>