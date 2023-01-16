<template>
    <div class="sidebar">
        <input type="checkbox" id="slide-menu-sidebar" />
        <label for="slide-menu-sidebar" class="slide-menu-sidebar-label">
            <i class="fa-solid fa-bars" id="slide-btn"></i>
            <i class="fa-solid fa-xmark" id="slide-cancel"></i>
        </label>
        <div class="menu-sidebar">
            <ul class="menu-sidebar-lista">
                <li class="menu-sidebar-login">
                    <a href="#">
                        <label for="login_check" class="sidebar-login-label">
                            <i class="fa-solid fa-user"></i>
                            <p id="menu-sidebar-visitante">Login</p>
                        </label>
                    </a>
                </li>
                <li>
                    <a href="#sobre">
                        <i class="fa-solid fa-house"></i>
                        <p>Sobre</p>
                    </a>
                </li>
                <li>
                    <a href="./pages/acomodacoes.html">
                        <i class="fa-solid fa-bed"></i>
                        <p>Acomodações</p>
                    </a>
                </li>
                <li>
                    <a href="#gastronomia">
                        <i class="fa-solid fa-utensils"></i>
                        <p>Gastronomia</p>
                    </a>
                </li>
                <li>
                    <a href="#topOf">
                        <i class="fa-solid fa-star"></i>
                        <p>Reservas</p>
                    </a>
                </li>
                <li>
                    <a href="./pages/contato.html">
                        <i class="fa-solid fa-envelope"></i>
                        <p>Contato</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "HotelHeaderSideBar",
};
</script>

<style lang="sass" scoped>
   @import "../assets/scss/global/global.scss"

</style>