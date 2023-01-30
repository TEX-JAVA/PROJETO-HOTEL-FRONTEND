<template>
    <main>
        <div class="slogan"></div>
        <div class="div-reserva-superior">
            <div class="div-reserva">

                <p class="texto-reserva">
                    Faça sua reserva no hotel que mais faz sentido para você!
                </p>
                <div class="container-check">
                    <div class="card-check">
                        <label for="data_entrada">CHECK-IN</label>
                        <input type="date" name="data_entrada" id="data_entrada" />
                    </div>
                    <div class="card-check">
                        <label for="data_saida">CHECK-OUT</label>
                        <input type="date" name="data_saida" id="data_saida" />
                    </div>
                    <div class="card-check">
                        <label for="">QUANTIDADE</label>
                        <input type="number" name="pessoas" id="pessoas" max="99" min="1" value="1"
                            style="width: 52px" />
                    </div>
                    <div class="card-check">
                        <label for="">APARTAMENTO</label>
                        <select class="select-apartamento" name="select">
                            <option selected="selected">Selecione</option>
                            <option value="classic">Classic</option>
                            <option value="executive">Executive</option>
                            <option value="valor3">Premium</option>
                        </select>
                    </div>
                    <div class="card-check">
                        <a class="button-a" href="#">BUSCAR</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container container-main">
            <div class="image-text-pai">
                <div class="image-text card-room" id="card-classic">
                    <div class="card-image">
                        <img class="image-reserva" src="../assets/images/reserva/classic.jpg" alt="Classic"
                            href="#resumo" />
                    </div>
                    <div class="div-pa">
                        <h1>CLASSIC</h1>
                        <h2 class="h2-reserva">R$ 200</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                            temporibus error voluptatem non sit? Ratione eos, omnis quam
                            quis quo hic cum officiis id quidem non
                        </p>
                        <a class="button-c" id="btn-classic" href="#resumo">SELECIONAR</a>
                    </div>
                </div>

                <div class="image-text card-room" id="card-executive">
                    <div class="card-image">
                        <img class="image-reserva" src="../assets/images/reserva/executive.jpg" alt="Executive" />
                    </div>
                    <div class="div-pa">
                        <h1>EXECUTIVE</h1>
                        <h2 class="h2-reserva">R$ 500</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                            temporibus error voluptatem non sit? Ratione perspiciatis cumque
                            quam quis quo hic
                        </p>
                        <a class="button-c" id="btn-executive" href="#resumo">SELECIONAR</a>
                    </div>
                </div>

                <div class="image-text card-room" id="card-premium">
                    <div class="card-image">
                        <img class="image-reserva" src="../assets/images/reserva/premium.jpg" alt="Executive" />
                    </div>

                    <div class="div-pa">
                        <h1>PREMIUM</h1>
                        <h2 class="h2-reserva">R$ 1000</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing voluptatem
                            non sit? Ratione eos, omnis vel doloribus perspiciatis cumque
                            quam quis quo hic
                        </p>
                        <a class="button-c" id="btn-premium" href="#resumo">SELECIONAR</a>
                    </div>
                </div>
            </div>
            <div id="resumo" class="resumo_reserva">
                <h3 class="resumo-direita">Resumo da reserva</h3>
                <div id="border-if-failure">
                    <p>APARTAMENTO:</p>
                    <select id="room-type" style="width: 120px; height: 24px">
                        <option value="classic">Classic</option>
                        <option value="executive">Executive</option>
                        <option value="premium">Premium</option>
                    </select>
                    <p>CHECK-IN:</p>
                    <input id="checkin-date" type="date" style="text-align: center; height: 24px" />
                    <p>CHECK-OUT:</p>
                    <input id="checkout-date" type="date" style="text-align: center; height: 24px" />
                    <p>PESSOAS:</p>
                    <input id="nb-adults" type="number" min="1" max="10"
                        style="width: 60px; height: 30px; text-align: center" />
                    <br />
                    <br />
                    <a @click="openModalServices" class="a-servicos" data-modal="modal-one">Adicionar mais
                        serviços</a>
                    <HotelModal v-if="$store.state.showModalServices || $store.state.showModalSummary" />
                    <a @click="openModalSummary" class="button-b" data-modal="modal-two" id="continue-btn">CONTINUAR</a>
                </div>
            </div>
        </div>

        <!-- Modal Resumo das Reservas-->
        <!--
            <div class="modal" id="modal-two">
                <div class="modal-bg modal-exit"></div>
                <div class="modal-container reservations">
                    <div class="left-side">
                        <img src="https://i.ibb.co/DzZyM1v/hotel.jpg" alt="" />
                    </div>
                    <div class="right-side">
                        <h2>Hotel H</h2>
                        <h4>O hotel que faz sentido para você</h4>
                        <ul>
                            <li>
                                <p>Chegada</p>
                                <h3 id="checkin-date-value"></h3>
                            </li>
                            <li>
                                <p>Saida</p>
                                <h3 id="checkout-date-value"></h3>
                            </li>
                            <li>
                                <p>Numero de convidados</p>
                                <h3 id="nb-adults-value"></h3>
                            </li>
                            <li>
                                <p>Inclui:</p>
                                <h3 id="services-list-value"></h3>
                            </li>
                            <li>
                                <p>Preço por Adulto</p>
                                <h3 id="price-per-adult"></h3>
                            </li>
                            <li>
                                <p>Preço Total</p>
                                <h3 id="total-price"></h3>
                            </li>
                        </ul>
                        <button class="btn">Confirmar a Reserva</button>
                    </div>
                    <button class="modal-close modal-exit">X</button>
                </div>
            </div>
            
        -->
        <!-- Modal Resumo das Reservas-->
    </main>

</template>

<script>

import { mapActions } from 'vuex';
import HotelModal from './HotelModal.vue'

export default {
    name: 'HotelReserva',
    components: {
        HotelModal
    },
    setup() {
        return {

        }
    },
    methods: {
        ...mapActions(['openModalServices', 'openModalSummary'])
    },
}


</script>

<style scoped lang="scss">
@import "../assets/scss/global/global.scss";

.container-page-reserva {
    max-width: 1250px;
    margin: 30px auto;
    position: relative;
    padding: 10px 0px;
}

.slogan {
    position: relative;
    background-color: var(--color-light-black);
    background-image: url("../assets/images/reserva/de2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 26vh;
}

/* div da reserva horizontal*/
.div-reserva-superior {
    position: relative;
    bottom: 96px;
    display: flex;
    justify-content: center;
    margin: 0;
}

.div-reserva {
    background-color: #023535;
    max-width: 800px;
    padding: 20px;
    opacity: 0.92;
}

.container-check {
    display: flex;
    align-items: center;
    column-gap: 20px;
}

.card-check {
    display: grid;
    place-items: center;
}

.button-a {
    color: white;
    background-image: linear-gradient(to top, #015958, #016664);
    padding: 6.3px 10px 6.3px 10px;
    margin-left: 18px;
    font-weight: bold;
    opacity: 0.92;
}

.button-a:hover {
    background-image: linear-gradient(to bottom, #015958, #008f8c);
}

.button-c {
    color: white;
    background-image: linear-gradient(to top, #015958, #016664);
    padding: 6.3px 10px 6.3px 10px;
    font-weight: bold;
    opacity: 0.92;
    max-width: 140px;
}

.button-c:hover {
    background-image: linear-gradient(to bottom, #015958, #008f8c);
}


.select-apartamento {
    padding: 8px;
    width: 114px;
    margin-right: 18px;
    margin-left: 5px;
}


@font-face {
    src: url(../assets/fonts/KaushanScript-Regular.ttf);
    font-family: "KaushanScript-Regular";
    font-weight: normal;
}

.texto-reserva {
    color: white;
    font-family: "KaushanScript-Regular";
    font-size: 1.7rem;
    padding: 5px;
    text-align: center;
}

/* navegação imagens */

.image-text {
    display: flex;
    column-gap: 18px;
    padding: 21px;
}

.image-reserva {
    width: 300px;
}

.div-pa {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.container-main {
    display: flex;
    margin-top: 0;
}

.image-text-pai {
    width: 60%;
}

.resumo_reserva {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/images/reserva/pe2.jpg);
    background-size: cover;
    text-align: center;
    opacity: 0.8;
}

.resumo_reserva:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
}

.resumo_reserva div {
    width: 300px;
    height: 380px;
    margin: 10% auto;
    background-image: linear-gradient(to top,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7));
    position: relative;
}

.a-servicos {
    color: white;
    font-size: 1.3rem;
    cursor: pointer;
    text-decoration: underline;
}

.a-servicos:hover {
    font-weight: bold;
}

.resumo_reserva p {
    position: relative;
    top: 10px;
    padding: 10px;
    font-size: 1.3rem;
    color: white;
    font-weight: bold;
}

.resumo_reserva div input {
    opacity: 0.9;
    font-size: 0.95rem;
    border: none;
}

.resumo_reserva div input:focus {
    outline: none;
    opacity: 1;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
}

.resumo-direita {
    font-size: 2.6rem;
    color: white;
    text-align: center;
    top: 200px;
    font-weight: normal;
    font-family: "KaushanScript-Regular";
}

.resumo_reserva div {
    width: 300px;
    height: 430px;
    margin: 10% auto;
    background-image: linear-gradient(to top,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7));
    position: relative;
}

.button-b {
    color: white;
    padding: 16.3px 14px 16.3px 14px;
    font-weight: bold;
    top: 27px;
    position: relative;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1.8));
}

.button-b:hover {
    background-image: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.6));
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1024px) {
    .container-main {
        flex-direction: column;
    }

    .image-text-pai {
        width: 100%;
    }

    .image-text {
        display: block;
        padding: 5px;
    }

    .image-reserva {
        width: 100%;
    }

    .div-pa {
        margin: 25px 0px;
        gap: 16px;
    }

    .resumo_reserva {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .image-text-pai {
        width: 100%;
    }

    .dash {
        height: 5px;
        background-color: #023535;
        width: 500px;
        margin: 10px 0 40px 0px;
    }

    .container-quartos {
        grid-template-columns: repeat(auto-fit, 1fr);
    }
}

// =======================================================//
// Resumo reservas

.modal-container.reservations {
    max-width: 1100px;
    width: 900px;
    padding: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.4);

    .left-side {

        height: 500px;
        flex: 3;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
    }

    .right-side {
        flex: 2;
        text-align: left;
        padding: 0 5rem 0 2rem;
        color: teal;
        margin: 0;

        h4 {
            opacity: 0.5;
            margin: -0.8rem 0 1.2rem 0;
        }

        ul {
            margin-top: 3rem;
            padding: 0;
            list-style: none;

            li {

                margin: 2.5rem 0;

                p {
                    opacity: 0.5;
                }

                h3 {
                    margin: -0.5rem 0;
                }
            }
        }

        .btn {
            border: none;
            outline: none;
            background-color: teal;
            color: #fff;
            padding: 1rem;
            width: 100%;
            font-size: 1rem;
            border-radius: 1rem;
            margin-top: 1rem;
            cursor: pointer;

            &:hover {
                background-color: teal;
                color: #f3f3f3;
                transition: 0.4s ease all;
            }
        }
    }
}
</style>