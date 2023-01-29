<template>
    <main>
        <div class="slogan-acomodacoes">
            <span class="slogan-text"> EXPLORE AQUI NOSSAS MELHORES ACOMODAÇÕES!</span><br><br>
            <span class="slogan-title-text">HOTEL H</span><br><br><br>
        </div>
        <section id="page-section">
            <h1 class="text-acomodacoes">Confira nossas acomodações</h1>
            <section class="flex">
                <div v-for="room of roomsId">
                    <img :src="room.image">
                    <p id="acomodacao">{{ room.name }}</p>
                    <span id="descricao">A partir de R$ {{ room.price }}</span><br>
                    <div>
                        <div v-if="room.services.wifi" id="icon-service-acomodacoes">
                            <img :src="wifiIcon">
                        </div>
                        <div v-if="room.services.arcondicionado" id="icon-service-acomodacoes">
                            <img :src="arConIcon">
                        </div>
                        <div v-if="room.services.chamada" id="icon-service-acomodacoes">
                            <img :src="chamadaIcon">
                        </div>
                        <div v-if="room.services.bagagem" id="icon-service-acomodacoes">
                            <img :src="bagagemIcon">
                        </div>
                    </div>
                    <button class="btn-reserve-agora">Reserve Agora</button>
                </div>
            </section>
            <section class="bg-backgroud">
                <h1 class="text-promocao">Confira nossas promoções</h1>
                <div id="promocao">
                    <div class="container-promocao">
                        <div class="card-promocao">
                            <img class="promo-img01" src="../assets/images/acomodacoes/acomodacao08.jpg">
                            <div id="preço-promo01">
                                <span>R$</span><span id="preço-promo-red">2.100</span><br>
                                <span>7 dias</span>
                            </div>
                            <div class="conteudo">
                                <p>Quarto Urban - Executive</p>
                                <div id="star">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                </div>
                                <span>O quarto executivo que conta com um espaço chiquérrimo</span><br>
                                <div class="icons-acomod">
                                    <div id="icon-cards-acomodacoes">
                                        <img :src="wifiIcon">
                                    </div>
                                    <div id="icon-cards-acomodacoes">
                                        <img :src="arConIcon">
                                    </div>
                                    <div id="icon-cards-acomodacoes">
                                        <img :src="chamadaIcon">
                                    </div>
                                    <div id="icon-cards-acomodacoes">
                                        <img :src="bagagemIcon">
                                    </div>
                                </div>
                                <button class="btn-reserve-agora">Reserve Agora</button>
                            </div>
                        </div>
                        <div class="card-promocao">
                            <img class="promo-img02" src="../assets/images/acomodacoes/acomodacao06.jpg">
                            <div id="preço-promo02">
                                <span>R$</span><span id="preço-promo-red">1.200</span><br>
                                <span>5 dias</span>
                            </div>
                            <div class="conteudo">
                                <p>Quarto Madeira - Classic</p>
                                <div id="star">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                </div>
                                <span>O quarto classico é para você que está com o dinheiro contado.</span><br>
                                <div class="icons-acomod">
                                    <div id="icon-cards-acomodacoes">
                                        <img :src="wifiIcon">
                                    </div>
                                    <div id="icon-cards-acomodacoes">
                                        <img :src="arConIcon">
                                    </div>
                                    <div id="icon-cards-acomodacoes">
                                        <img :src="chamadaIcon">
                                    </div>
                                    <div id="icon-cards-acomodacoes">
                                        <img :src="bagagemIcon">
                                    </div>
                                </div>
                                <button class="btn-reserve-agora">Reserve Agora</button>
                            </div>
                        </div>
                        <div class="card-promocao">
                            <img class="promo-img03" src="../assets/images/acomodacoes/acomodacao07.jpg">
                            <div id="preço-promo03">
                                <span>R$</span><span id="preço-promo-red">1.800</span><br>
                                <span>4 dias</span>
                            </div>
                            <div class="conteudo">
                                <p>Quarto Vale - Premium</p>
                                <div id="star">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                    <img src="../assets/images/acomodacoes/iconsAcomodacoes/star.png">
                                </div>
                                <span>Tem bala na agulha? Então Nosso Premium é ideal para você.</span><br>
                                <div class="icons-acomod">
                                    <div id="icon-cards-acomodacoes">
                                        <img :src="wifiIcon">
                                    </div>
                                    <div id="icon-cards-acomodacoes">
                                        <img :src="arConIcon">
                                    </div>
                                    <div id="icon-cards-acomodacoes">
                                        <img :src="chamadaIcon">
                                    </div>
                                    <div id="icon-cards-acomodacoes">
                                        <img :src="bagagemIcon">
                                    </div>
                                </div>
                                <button class="btn-reserve-agora">Reserve Agora</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="bg-mensagem">
                <section class="mensagem container-mensagem">
                    <h2 class="h2-mensagem">
                        "Nós da Hotel H somos comprometidos em oferecer o melhor de nossos serviços para nossos
                        clientes, para isso nossos principios são partes fundamentais em nosso dia a dia:"
                    </h2>
                    <article id="principios">
                        <div id="box-acomod">
                            <div class="box-acomod">
                                <h2 class="titles-sobre"><img
                                        src="../assets/images/acomodacoes/iconsAcomodacoes/objetivo.png" alt="">
                                    Missão</h2>
                                <span>Tornar a vida das pessoas mais felizes oferecendo-lhes momentos prazerosos em um
                                    local
                                    exuberante, com muitas paisagens naturais, ar fresco e acomodações maravilhosas.
                                </span>
                            </div>
                            <div class="box-acomod">
                                <h2 class="titles-sobre"><img
                                        src="../assets/images/acomodacoes/iconsAcomodacoes/visao.png" alt="">
                                    Visão</h2>
                                <span>Mostrar o quão maravilhoso é ter uma vida saudavel, em meio a natureza, com
                                    momentos
                                    prazerosos, em um local privilegiado e com uma equipe dedicada a te trazer momentos
                                    felizes.
                                </span>
                            </div>
                            <div class="box-acomod">
                                <h2 class="titles-sobre"><img
                                        src="../assets/images/acomodacoes/iconsAcomodacoes/diamond.png" alt="">
                                    Valores</h2>
                                <span>Nossos valores são fortalecidos por 6 pilares principais, são eles: equipe,
                                    dedicação,
                                    comprometimento, família e paixão pelo que fazemos.
                                </span>
                            </div>
                        </div>
                    </article>
                </section>
            </div>

        </section>
    </main>
</template>
<script>
export default {
    name: "HotelAccommodationsPage",
    data() {
        return {
            roomsId: {
                room1: {
                    id: 1,
                    image: '/src/assets/images/acomodacoes/acomodacao01.jpg',
                    name: 'Quarto Drumond',
                    price: '7.408,15',
                    services: { wifi: false, arcondicionado: true, chamada: true, bagagem: true }
                },
                room2: {
                    id: 2,
                    image: '/src/assets/images/acomodacoes/acomodacao02.jpg',
                    name: 'Quarto Azul',
                    price: '1.540,22',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room3: {
                    id: 3,
                    image: '/src/assets/images/acomodacoes/acomodacao03.jpg',
                    name: 'Quarto Crepusculo',
                    price: '238,30',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room4: {
                    id: 4,
                    image: '/src/assets/images/acomodacoes/acomodacao04.jpg',
                    name: 'Quarto Natura',
                    price: '5.008,22',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room5: {
                    id: 5,
                    image: '/src/assets/images/acomodacoes/acomodacao05.jpg',
                    name: 'Quarto Chalé',
                    price: '3.208,22',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room6: {
                    id: 6,
                    image: '/src/assets/images/acomodacoes/acomodacao06.jpg',
                    name: 'Quarto Madeira',
                    price: '1.408,30',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room7: {
                    id: 7,
                    image: '/src/assets/images/acomodacoes/acomodacao07.jpg',
                    name: 'Quarto Fazenda',
                    price: '5.408,22',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room8: {
                    id: 8,
                    image: '/src/assets/images/acomodacoes/acomodacao08.jpg',
                    name: 'Quarto Urban',
                    price: '4.808,22',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room9: {
                    id: 9,
                    image: '/src/assets/images/acomodacoes/acomodacao09.jpg',
                    name: 'Quarto Tesla',
                    price: '1.408,22',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room10: {
                    id: 10,
                    image: '/src/assets/images/acomodacoes/acomodacao01.jpg',
                    name: 'Quarto Amanhecer',
                    price: '7.408,15',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room11: {
                    id: 11,
                    image: '/src/assets/images/acomodacoes/acomodacao02.jpg',
                    name: 'Quarto Marinho',
                    price: '1.540,22',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room12: {
                    id: 12,
                    image: '/src/assets/images/acomodacoes/acomodacao03.jpg',
                    name: 'Quarto Entardecer',
                    price: '238,30',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room13: {
                    id: 13,
                    image: '/src/assets/images/acomodacoes/acomodacao04.jpg',
                    name: 'Quarto Natura',
                    price: '5.008,22',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room14: {
                    id: 14,
                    image: '/src/assets/images/acomodacoes/acomodacao05.jpg',
                    name: 'Quarto Chalé',
                    price: '3.208,22',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room15: {
                    id: 15,
                    image: '/src/assets/images/acomodacoes/acomodacao06.jpg',
                    name: 'Quarto Madeira',
                    price: '1.408,30',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room16: {
                    id: 16,
                    image: '/src/assets/images/acomodacoes/acomodacao07.jpg',
                    name: 'Quarto Vale',
                    price: '5.408,22',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room17: {
                    id: 17,
                    image: '/src/assets/images/acomodacoes/acomodacao08.jpg',
                    name: 'Quarto Urban',
                    price: '4.808,22',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room18: {
                    id: 18,
                    image: '/src/assets/images/acomodacoes/acomodacao09.jpg',
                    name: 'Quarto Jurubatuba',
                    price: '1.408,22',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room19: {
                    id: 19,
                    image: '/src/assets/images/acomodacoes/acomodacao01.jpg',
                    name: 'Quarto Lírio',
                    price: '7.408,15',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                },
                room20: {
                    id: 20,
                    image: '/src/assets/images/acomodacoes/acomodacao02.jpg',
                    name: 'Quarto Áqua',
                    price: '1.540,22',
                    services: { wifi: true, arcondicionado: true, chamada: true, bagagem: true }
                }
            },

            wifiIcon: '/src/assets/images/acomodacoes/iconsAcomodacoes/wi-fi.png',
            arConIcon: '/src/assets/images/acomodacoes/iconsAcomodacoes/ar-condicionado.png',
            chamadaIcon: '/src/assets/images/acomodacoes/iconsAcomodacoes/chamada-telefonica.png',
            bagagemIcon: '/src/assets/images/acomodacoes/iconsAcomodacoes/bagagem.png',
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/global.scss";
</style>