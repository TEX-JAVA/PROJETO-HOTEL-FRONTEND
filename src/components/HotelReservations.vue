<template>
    <main>
        <slogan>
            <div class="slogan"></div>
        </slogan>

        <div class="container div-reserva-superior">
            <div class="div-reserva">
                <table>
                    <tr class="reserva-tr1">
                        <p class="texto-reserva">
                            Faça sua reserva no hotel que mais faz sentido
                            para você!
                        </p>
                    </tr>
                    <tr class="reservaTr2">
                        <td>
                            <label for="data_entrada">CHECK-IN</label>
                            <input type="date" name="data_entrada" id="data_entrada" />
                        </td>
                        <td>
                            <label for="data_saida">CHECK-OUT</label>
                            <input type="date" name="data_saida" id="data_saida" />
                        </td>
                        <td>
                            <form onforminput="pessoas.value=qtd.value">
                                <label for="">QUANTIDADE</label>
                                <input type="number" name="pessoas" id="pessoas" max="99" min="1" value="1"
                                    style="width: 52px" />
                            </form>
                        </td>
                        <td>
                            <a class="button-a" href="#">BUSCAR</a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="container container-main">
            <div class="image-text-pai">
                <div class="dash"></div>
                <div class="image-text">
                    <img class="image-reserva" src="../assets/images/reserva/de1.jpg" alt="Executive" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sequi temporibus error voluptatem non sit?
                        Ratione eos, omnis vel doloribus perspiciatis cumque
                        quam quis quo hic cum officiis id quidem non quas
                        repellendus reprehenderit tenetur incidunt facilis!
                        Enim nobis obcaecati first
                    </p>
                </div>
                <div class="image-text">
                    <img class="image-reserva" src="../assets/images/reserva/de3.jpg" alt="Executive" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sequi temporibus error voluptatem non sit?
                        Ratione eos, omnis vel doloribus perspiciatis cumque
                        quam quis quo hic cum officiis id quidem non quas
                        repellendus reprehenderit tenetur incidunt facilis!
                        Enim nobis obcaecati second
                    </p>
                </div>
                <div class="image-text">
                    <img class="image-reserva" src="../assets/images/reserva/de4.jpg" alt="Executive" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sequi temporibus error voluptatem non sit?
                        Ratione eos, omnis vel doloribus perspiciatis cumque
                        quam quis quo hic cum officiis id quidem non quas
                        repellendus reprehenderit tenetur incidunt facilis!
                        Enim nobis obcaecati last
                    </p>
                </div>
            </div>
            <div class="resumo_reserva_pai">
                <div class="resumo_reserva">
                    <h3 class="resumo-direita">Resumo da reserva</h3>
                    <div>
                        <p>APARTAMENTO:</p>
                        <input type="text" style="width: 120px; height: 24px" placeholder=" Escolha seu apto" />
                        <p>CHECK-IN:</p>
                        <input type="date" style="text-align: center; height: 24px" />
                        <p>CHECK-OUT:</p>
                        <input type="date" style="text-align: center; height: 24px" />
                        <p>PESSOAS:</p>
                        <input type="number" id="qtd" style="
                                    width: 60px;
                                    height: 30px;
                                    text-align: center;
                                " />
                        <br />
                        <br />
                        <a href="#" class="a-servicos" id="add-servicos">Adicionar mais serviços</a>
                    </div>

                    <a class="button-b" href="#" id="continueReserva">CONTINUAR</a>
                </div>
            </div>
        </div>
        <div class="modal" style="display: none; z-index: 10; position: absolute"></div>
    </main>
</template>

<script>
export default {
    name: "HotelReservations",
    data() {
        return {
            modal: false,
        };
    },
    methods: {
        addServicos() {
            this.modal = true;
        },
    },
};
</script>

<style scoped lang="sass">
    @import "../assets/scss/global/global.scss"

</style>