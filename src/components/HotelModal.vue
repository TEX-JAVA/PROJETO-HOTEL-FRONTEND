<template>
    <teleport to="body">
        <transition name="modal-fade">
            <div class="modal-overlay" @click="closeModal">
                <div class="modal" @click.stop>
                    <button @click="closeModal">Close</button>
                </div>
                <div class="close" @click="closeModal">
                    X
                </div>
            </div>
        </transition>

    </teleport>


    <!-- Modal Mais serviços-->
    <!-- <div class="modal" id="modal-one">
        <div class="modal-bg modal-exit"></div>
        <div class="modal-container">
            <h1>Mais Serviços</h1>
            <h2>
                Escolha os serviços que gostaria que acompanhasse sua reserva.
            </h2>
            <ul class="card-wrapper">
                <li class="card-modal" id="wifi">
                    <img src="https://assets/images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
                        alt="" />
                    <h3><a href="">WiFi</a></h3>
                    <p>R$ 16/dia por pessoa</p>
                </li>
                <li class="card-modal" id="breakfast">
                    <img src="https://images.unsplash.com/photo-1611083360739-bdad6e0eb1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
                        alt="" />
                    <h3><a href="">Café da Manhã</a></h3>
                    <p>R$ 30/dia por pessoa</p>
                </li>
                <li class="card-modal" id="mini-bar">
                    <img src="https://images.unsplash.com/photo-1613230485186-2e7e0fca1253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
                        alt="" />
                    <h3><a href="">Frigobar a vontade</a></h3>
                    <p>R$ 120/dia por pessoa</p>
                </li>
                <li class="card-modal" id="kids-events">
                    <img src="https://images.unsplash.com/photo-1613230485186-2e7e0fca1253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
                        alt="" />
                    <h3><a href="">Entretenimento Infantil</a></h3>
                    <p>R$ 40/dia por criança</p>
                </li>
                <li class="card-modal" id="gym">
                    <img src="https://images.unsplash.com/photo-1613230485186-2e7e0fca1253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
                        alt="" />
                    <h3><a href="">Academia</a></h3>
                    <p>R$ 10/dia por pessoa</p>
                </li>
            </ul>
            <button @click="closeModal" class="modal-close modal-exit">X</button>
        </div>
    </div> -->
    <!-- Modal Mais Serviços-->


</template>

<script>

export default {
    name: 'HotelModal',
    methods: {
        closeModal() {
            this.$emit('close-modal')
        }
    }
}
</script>

<style scoped lang="scss">
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
    background-color: #ac003e;
}

.modal {
    text-align: center;
    background-color: white;
    height: 500px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
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
    background-color: #ac003e;
    width: 150px;
    height: 40px;
    color: white;
    font-size: 14px;
    border-radius: 16px;
    margin-top: 50px;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.5s ease;
}
</style>