<template>
    <main>
        <section class="banner">
            <video autoplay loop muted>
                <source src="../assets/video/hotel.mp4" />
            </video>
        </section>
        <section id="sobre">
            <article class="container padding flexbox">
                <img src="../assets/images/home/sobre.jpg" alt="" />
                <div class="card">
                    <p class="line">Elevando o conforto ao mais alto nível</p>
                    <h2 class="h2-index">Bem-Vindo ao Hotel H</h2>
                    <div class="margin">
                        <p>
                            O hotel hotel h é a escolha certa para os visitantes que
                            procuram uma combinação de charme, paz, tranquilidade e uma
                            localização conveniente para explorar os arredores.
                        </p>
                        <a href="#"><button>Saiba mais</button></a>
                    </div>
                </div>
            </article>
        </section>
        <section id="acomodacoes">
            <div class="bg-acomodacoes">
                <article class="container relative">
                    <div class="card-acomodacoes">
                        <h2 class="h2-index">Acomodações</h2>
                        <p>
                            O Hotel H é lider em conforto e na qualidade de hospedagem.
                            contomas com excelentes espaços para sua diversão e
                            entretenimento.
                        </p>
                        <div class="container-acomodacoes">
                            <div class="box-acomodacoes">
                                <img src="../assets/images/global/icons/icons8-massagem-com-óleo-30.svg"
                                    alt="svg de massagem" />
                                <p>Spa e Massagem</p>
                                <img src="../assets/images/global/icons/icons8-haltere-30.svg" alt="svg de academia" />
                                <p>Academia</p>
                                <img src="../assets/images/global/icons/icons8-danca-de-salao-30.svg"
                                    alt="svg de salão de festa" />
                                <p>Salão de Festas</p>
                            </div>
                            <div class="box-acomodacoes">
                                <img src="../assets/images/global/icons/icons8-cozinha-50 .svg"
                                    alt="svg de refeitorio" />
                                <p>Refeitório</p>
                                <img src="../assets/images/global/icons/icons8-piscina-50 .svg" alt="svg de piscinas" />
                                <p>Piscinas</p>
                                <img src="../assets/images/global/icons/icons8-parque-tematico-50.svg"
                                    alt="svg de parque de diversão" />
                                <p>Parque de Diversão</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <article class="container">
                <p class="line">Elevando o conforto ao mais alto nível</p>
                <h2 class="h2-index">Quartos e Suites</h2>
                <div class="container-quartos">
                    <div class="box">
                        <img src="../assets/images/home/quarto1.jpg" title="quarto com almofadas"
                            alt="quarto com almofadas" />
                    </div>
                    <div class="box">
                        <img src="../assets/images/home/quarto3.jpg" title="uarto com vista para o mar"
                            alt="quarto com vista para o mar" />
                    </div>
                    <div class="box">
                        <img src="../assets/images/home/quarto2.jpg" title="corredor de quartos"
                            alt="corredor de quartos" />
                    </div>
                    <a href="./pages/acomodacoes.html"><button class="absolute">Saiba mais</button></a>
                </div>
            </article>
        </section>
        <section id="gastronomia">
            <div class="bg-gastronomia">
                <div class="opaco"></div>
                <article class="container center"></article>
            </div>
            <article class="container padding-gastro">
                <p class="line">Elevando o conforto ao mais alto nível</p>
                <h2 class="h2-index">Pratos</h2>
                <div class="pratos">
                    <div class="prato bg1"></div>
                    <div class="prato bg2"></div>
                    <div class="prato bg3"></div>
                    <div class="prato bg4"></div>
                    <div class="prato bg5"></div>
                    <div class="prato bg6"></div>
                </div>
                <a href="#"><button class="absolute">Saiba Mais</button></a>
            </article>
        </section>
        <section id="avaliacao" class="bg-avaliacao">
            <div class="container-avaliacao container">
                <div class="card-avaliacao">
                    <h1 class="h1-avaliacao">9.2 <span class="span-top">/10</span></h1>
                    <p>12141 comentários</p>
                    <img src="../assets/images/home/decolar-1.webp" alt="" />
                </div>
                <div class="card-avaliacao">
                    <h1 class="h1-avaliacao">9.2 <span class="span-top">/10</span></h1>
                    <p>10123 comentários</p>
                    <img src="../assets/images/home/trip-1.webp" alt="" />
                </div>
                <div class="card-avaliacao">
                    <h1 class="h1-avaliacao">9.2 <span class="span-top">/10</span></h1>
                    <p>8971 comentários</p>
                    <img src="../assets/images/home/google.webp" alt="" />
                </div>
            </div>
        </section>
    </main>
</template>
<script>
export default {
    name: "HotelMainPage",
};
</script>

<style lang="sass" scoped>
    @import "../assets/scss/global/global.scss"
    
</style>