<template>
    <div class="modal-summary" @click.stop>

        <div class="left-side">
            <img src="https://i.ibb.co/DzZyM1v/hotel.jpg" alt="" />
        </div>
        <div class="right-side">
            <h2>Hotel H</h2>
            <h4>O hotel que faz sentido para você</h4>
            <ul>
                <li>
                    <p>Chegada:</p>
                    <h3 id="checkin-date-value">{{ checkInDate }}</h3>
                </li>
                <li>
                    <p>Saida:</p>
                    <h3 id="checkout-date-value">{{ checkOutDate }}</h3>
                </li>
                <li>
                    <p>Número de convidados:</p>
                    <h3 id="nb-adults-value">{{ guestsNb }}</h3>
                </li>
                <li>
                    <p>Quarto escolhido:</p>
                    <h3 id="room-type-value">{{ roomType }}</h3>
                </li>
                <li>
                    <p>Inclui:</p>
                    <h3 id="services-list-value">{{ servicesSelected }}</h3>
                </li>
                <li>
                    <p>Preço por Adulto:</p>
                    <h3 id="price-per-adult"> R$ {{ parseInt(pricePerAdult).toFixed(2) }}</h3>
                </li>
                <li>
                    <p>Preço Total:</p>
                    <h3 id="total-price">R$ {{ parseInt(pricePerAdult * guestsNb).toFixed(2) }}</h3>
                </li>
            </ul>
            <div class="btns-container">
                <button class="btn">Confirmar a Reserva</button>
                <button @click="closeAllModals">Close</button>
            </div>
        </div>


    </div>

</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'HotelModalSummary',
    data() {
        return {
            checkInDate: '',
            checkOutDate: '',
            guestsNb: '',
            servicesSelected: [],
            pricePerAdult: '',
            totalPrice: '',
            roomType: '',
        }
    },
    methods: {
        ...mapActions(['openModalServices', 'closeModalServices', 'closeAllModals']),
        setData() {
            this.checkInDate = this.$store.state.checkIn;
            this.checkOutDate = this.$store.state.checkOut;
            this.guestsNb = this.$store.state.guestsNb;
            this.roomType = this.$store.state.roomTypeChosen;
            this.servicesSelected = this.$store.state.servicesChosen;
        },
        calcPricePerAdult() {
            let price = 0;
            const roomType = this.$store.state.roomTypeChosen;
            const roomTypePrice = this.$store.state.roomTypes.find(room => room.id === roomType).price;
            const servicesChosen = this.$store.state.servicesChosen;
            const servicesPrice = this.$store.state.servicesAndPrices.filter(service => servicesChosen.includes(service.id)).map(service => service.price);
            price = roomTypePrice + servicesPrice.reduce((a, b) => a + b, 0);
            this.pricePerAdult = price * this.calcNbOfDays();
        },
        calcNbOfDays() {
            const checkIn = new Date(this.$store.state.checkIn);
            const checkOut = new Date(this.$store.state.checkOut);
            const diffTime = Math.abs(checkOut - checkIn);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
        }
    },
    mounted() {
        this.setData();
        this.calcPricePerAdult();
    },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap');


h3,
h2,
h4,
p {
    font-family: 'Nunito', sans-serif;
    padding: 5px 0;
    margin: 0;
    color: teal;
}

h3 {
    font-size: 20px;
    font-weight: 600;
}

.modal-summary {
    text-align: center;
    background-color: white;
    height: 75vh;
    width: 80vw;
    margin-top: 10vh;
    padding: 10px 0;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    overflow-y: scroll;

    li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #e6e6e6;
    }

    h2 {
        font-size: 30px;
        font-weight: 600;
        color: teal;
        margin: 0;
    }

    h4 {
        font-size: 20px;
        font-weight: 400;
        color: #a6a6a6;
        margin: 0;
    }

    .left-side {
        width: 40%;
        float: left;
        height: 100%;
        padding: 0;
        margin: 0 10px 0 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .right-side {
        width: 50%;
        float: right;
        padding: 0 20px;
    }

    .btns-container {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 20px;
    }
}


button {
    background-color: teal;
    width: 150px;
    height: 40px;
    color: white;
    font-size: 14px;
    border-radius: 16px;
    margin-top: 50px;
    cursor: pointer;
}

.close {
    margin: 10% 0 0 16px;
    cursor: pointer;
}
</style>