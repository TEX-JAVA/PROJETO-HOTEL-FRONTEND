<template>
    <div class="modal-summary" @click.stop>
        <h3>XDDDD</h3>

        <div class="sub-total">

            <button @click="closeAllModals">Close</button>
        </div>
    </div>

</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'HotelModalSummary',
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
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap');


h3,
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