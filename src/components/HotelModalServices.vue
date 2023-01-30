<template>
    <div class="modal-services" @click.stop>
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
            <button @click="closeAllModals">Close</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'HotelModalServices',
    data() {
        return {
        }
    },
    methods: {
        ...mapActions(['openModalServices', 'closeModalServices', 'closeAllModals']),
    },
}
</script>

<style scoped lang="scss">
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