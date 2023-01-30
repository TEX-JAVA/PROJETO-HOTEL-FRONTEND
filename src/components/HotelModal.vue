<template>
    <teleport to="body">
        <transition name="modal-fade">
            <div class="modal-overlay" @click="closeAllModals">


                <HotelModalServices v-if="$store.state.showModalServices" />
                <HotelModalSummary v-if="$store.state.showModalSummary" />


                <!-- <div class="modal-services" @click.stop>
                    <h3>Escolha mais serviços para fazer sua estadia ainda mais memorável.</h3>
                    <ul class="card-wrapper">
                        <li class="card-modal" v-for="service in $store.state.servicesAndPrices" :key="service.id">
                            <img :src="service.imgUrl" :alt="service.name" class="img-modal">
                            <h3>{{ service.name }} <br /> R$ {{ service.price.toFixed(2) }}</h3>
                            <hr />
                            <p>{{ service.description }}</p>
                        </li>
                    </ul>
                    <div class="sub-total">

                        <button @click="closeModalServices">Close</button>
                    </div>
                </div> -->
                <div class="close" @click="closeModalServices">
                    <img src="/src/assets/global/icons/icons8-close.svg" />
                </div>
            </div>
        </transition>

    </teleport>
</template>

<script>
import { mapActions } from 'vuex';
import HotelModalServices from './HotelModalServices.vue';
import HotelModalSummary from './HotelModalSummary.vue';

export default {
    name: 'HotelModal',
    components: {
        HotelModalServices,
        HotelModalSummary,
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(['closeAllModals']),
    },
}
</script>

<style scoped lang="scss">
h3,
p {
    font-family: 'Nunito', sans-serif;
    padding: 5px 0;
    margin: 0;
    color: teal;
}

h3 {
    font-size: 18px;
    font-weight: 500;
}

.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000c0;
}

.close {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 15px;
    width: 15px;
    background-color: teal;
    color: white;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
    }
}

.modal-services {
    text-align: center;
    background-color: white;
    height: 75vh;
    width: 80vw;
    margin-top: 10%;
    padding: 10px 0;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    overflow-y: scroll;

    .card-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 0 20px;
        gap: 1vw;

        .card-modal {
            width: 15vw;
            list-style: none;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
            cursor: pointer;

            &.selected {
                border: 3px solid teal;
            }

            .img-modal {
                max-width: 100%;
                max-height: 20vh;
                height: auto;
                object-fit: cover;
            }
        }
    }
}


.close {
    margin: 10% 0 0 16px;
    cursor: pointer;
}

.close-img {
    width: 25px;
}

.check {
    width: 150px;
}

h6 {
    font-weight: 500;
    font-size: 28px;
    margin: 20px 0;
}

p {
    /* font-weight: 500; */
    font-size: 16px;
    margin: 20px 0;
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

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.5s ease;
}


* {
    scrollbar-width: auto;
    scrollbar-color: #008080 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 16px;
}

*::-webkit-scrollbar-track {
    background: #ffffff;
}

*::-webkit-scrollbar-thumb {
    background-color: #008080;
    border-radius: 10px;
    border: 3px solid #ffffff;
}
</style>