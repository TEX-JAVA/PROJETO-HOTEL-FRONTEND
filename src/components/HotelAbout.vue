<template>
    <main>
        <section>
            <div class="carousel">
                <span class="hotel">O Nosso Hotel</span>
                <div class="slides">
                    <input class="input-sobre" type="radio" name="slide" id="slide1" checked>
                    <input class="input-sobre" type="radio" name="slide" id="slide2">
                    <input class="input-sobre" type="radio" name="slide" id="slide3">
                    <input class="input-sobre" type="radio" name="slide" id="slide4">
                    <input class="input-sobre" type="radio" name="slide" id="slide5">

                    <div class="slide s1">
                        <img src="../assets/images/sobre/hotelPraia.avif" alt="foto hotel de praia">
                    </div>

                    <div class="slide">
                        <img src="../assets/images/sobre/quarto1.jpg" alt="foto do primeiro quarto">
                    </div>

                    <div class="slide">
                        <img src="../assets/images/sobre/quarto2.jpg" alt="foto do segundo quarto">
                    </div>

                    <div class="slide">
                        <img src="../assets/images/sobre/fotoPiscinaEscura.jpg" alt="foto da piscina no por do sol">
                    </div>

                    <div class="slide">
                        <img src="../assets/images/sobre/fotoPiscina.jpg" alt="foto da psicina com clima ensolarado">
                    </div>

                </div>

                <div class="navigation">
                    <label class="bar" for="slide1"></label>
                    <label class="bar" for="slide2"></label>
                    <label class="bar" for="slide3"></label>
                    <label class="bar" for="slide4"></label>
                    <label class="bar" for="slide5"></label>

                </div>
            </div>
        </section>
        <article class="container-principal">
            <img src="" alt="">
            <div class="container-text">
                <h2>A nossa história</h2>
                <p>What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus
                    PageMaker including versions of Lorem Ipsum</p>
            </div>
        </article>
    </main>
</template>

<script>

export default {
    name: 'HotelAbout',
}
</script>

<style scoped lang="sass">
@import "../assets/scss/global/global.scss"
</style>