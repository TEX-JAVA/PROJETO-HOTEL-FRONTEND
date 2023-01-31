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
                <div v-for="room in $store.state.roomTypes" :key="room.id" class="image-text card-room"
                    :class="selectedDiv" id="card-classic">
                    <div class="card-image">
                        <img class="image-reserva" :src="room.imgUrl" :alt="room.name" />
                    </div>
                    <div class="div-pa">
                        <h1>{{ room.name.toUpperCase() }}</h1>
                        <h2 class="h2-reserva">R$ {{ room.price.toFixed(2) }}</h2>
                        <p>
                            {{ room.description }}
                        </p>
                        <a class="button-c" id="btn-classic">SELECIONAR</a>
                    </div>
                </div>

            </div>
            <div id="resumo" class="resumo_reserva">
                <h3 class="resumo-direita">Resumo da reserva</h3>
                <div id="resumo-reserva-inner">
                    <p>APARTAMENTO:</p>
                    <select @change="roomTypeInput" id="room-type" style="width: 120px; height: 24px">
                        <option value="">Selecione</option>
                        <option v-for="room in $store.state.roomTypes" :key="room.name" :value="room.id">
                            {{ room.name }}
                        </option>
                    </select>
                    <p>CHECK-IN:</p>
                    <input @change="checkInDateInput" id="checkin-date" type="date"
                        style="text-align: center; height: 24px" />
                    <p>CHECK-OUT:</p>
                    <input @change="checkOutDateInput" id="checkout-date" type="date"
                        style="text-align: center; height: 24px" />
                    <p>PESSOAS:</p>
                    <input @change="guestsNbInput" id="nb-adults" type="number" min="1" max="10"
                        style="width: 60px; height: 30px; text-align: center" />
                    <br />
                    <br />
                    <div class="btn-reserva-container">
                        <a @click="openModalServices" class="button-b" data-modal="modal-one">Adicionar mais
                            serviços</a>
                        <a @click="checkAndOpenModalSummary" class="button-b" data-modal="modal-two"
                            id="continue-btn">CONTINUAR</a>
                    </div>
                    <HotelModal v-if="$store.state.showModalServices || $store.state.showModalSummary" />
                </div>
            </div>
        </div>
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
            checkInDate: '',
            checkOutDate: '',
            guestsNb: 1,
            roomType: 'classic',
            servicesList: [],
            totalPrice: 0,
            pricePerAdult: 0,
        }
    },
    methods: {
        ...mapActions(['openModalServices', 'openModalSummary', 'setMinCheckIn', 'setToday', 'setMinCheckOut', 'setCheckIn', 'setCheckOut', 'setGuestsNb', 'setRoomTypeChosen']),
        inputMinCheckInAttribute() {
            const checkInDateInput = document.getElementById('checkin-date');
            checkInDateInput.setAttribute('min', this.$store.state.minCheckIn);
        },
        inputMinCheckOutAttribute() {
            const checkOutDateInput = document.getElementById('checkout-date');
            checkOutDateInput.setAttribute('min', this.$store.state.minCheckOut);
        },
        checkInDateInput(e) {
            this.checkInDate = e.target.value;
            this.setCheckIn(this.checkInDate);
            this.setMinCheckOut();
            this.inputMinCheckOutAttribute();
        },
        checkOutDateInput(e) {
            this.checkOutDate = e.target.value;
            this.setCheckOut(this.checkOutDate);
        },
        guestsNbInput(e) {
            this.guestsNb = e.target.value;
            this.setGuestsNb(this.guestsNb);
        },
        roomTypeInput(e) {
            this.roomType = e.target.value;
            this.setRoomTypeChosen(this.roomType);
        },
        roomTypeSelected() {
            return this.$store.state.roomTypeChosen;
        },
        selectedDiv(e) {
            const divs = document.querySelectorAll('.room-type');
            divs.forEach(div => {
                div.classList.remove('selected');
            });
            if (e.target.key === this.$store.state.roomTypeChosen) e.target.classList.add('selected');
        },
        setInputValues() {
            const checkInDateInput = document.getElementById('checkin-date');
            const checkOutDateInput = document.getElementById('checkout-date');
            const nbAdultsInput = document.getElementById('nb-adults');
            const roomTypeInput = document.getElementById('room-type');

            checkInDateInput.value = this.$store.state.checkIn;
            checkOutDateInput.value = this.$store.state.checkOut;
            nbAdultsInput.value = this.$store.state.guestsNb;
            roomTypeInput.value = this.$store.state.roomTypeChosen;
        },
        checkAndOpenModalSummary() {
            const checkInDateInput = document.getElementById('checkin-date');
            const checkOutDateInput = document.getElementById('checkout-date');
            const nbAdultsInput = document.getElementById('nb-adults');
            const roomTypeInput = document.getElementById('room-type');
            document.getElementById('resumo-reserva-inner').style.border = 'none';
            if (checkInDateInput.value === '' || checkOutDateInput.value === '' || nbAdultsInput.value === '' || roomTypeInput.value === '') {
                document.getElementById('resumo-reserva-inner').style.border = '3px solid red';
                alert('Por favor, preencha todos os campos!');
                return;
            }
            this.openModalSummary();
        }

    },
    mounted() {
        this.setToday();
        this.setMinCheckIn();
        this.setMinCheckOut();
        this.inputMinCheckInAttribute();
        this.inputMinCheckOutAttribute();
        this.setInputValues();
    }
}


</script>

<style scoped lang="scss">
@import "../assets/scss/global/global.scss";

.selected {
    border: 3px solid teal;
}

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
    align-items: center;
    column-gap: 18px;
    padding: 21px;
    margin-right: 1vw;
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

    #resumo-reserva-inner {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1.8));
        z-index: 3;
        width: 60%;
        height: 60%;
        opacity: 0.9;
    }
}

.resumo_reserva:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
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



.button-b {
    color: white;
    padding: 14px;
    width: 90%;
    font-weight: bold;
    top: 27px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1.8));
    cursor: pointer;
}

.button-b:first-child {
    margin-bottom: 20px;
}

.button-b:hover {
    background-image: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.9),
            rgba(0, 0, 0, 0.6));
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
}

.btn-reserva-container {
    width: 100%;
    height: 20%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}


@media (max-width: 1024px) {
    .container-main {
        flex-direction: column;
    }

    .image-text-pai {
        width: 100%;
    }

    /* .image-text {
        display: block;
        padding: 5px;
    } */

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