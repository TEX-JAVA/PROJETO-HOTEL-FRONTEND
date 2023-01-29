<template>
    <main>
        <div class="container-contato">
            <div class="card-contato">
                <h2 class="h2-contato">Envie-nos uma mensagem...</h2>
                <form action="" method="post">
                    <label class="block" for="name">Nome:</label>
                    <input class="block input-contato " type="text" id="name" name="name"><br>

                    <label class="block" for="email">Email:</label>
                    <input class="block input-contato" type="email" id="email" name="email"><br>

                    <label class="block" for="phone">Telefone:</label>
                    <input class="block input-contato" type="tel" id="phone" name="phone"><br>

                    <label class="block" for="subject">Assunto:</label>
                    <select class="block" id="subject" name="subject" required>
                        <option value="informacoes">Informações</option>
                        <option value="reclamacao">Reclamação</option>
                        <option value="elogios">Elogios</option>
                        <option value="sugestao">Sugestão</option>
                    </select><br>

                    <label class="block" for="message">Mensagem:</label>
                    <textarea required class="block textarea-contato" id="message" name="message"></textarea><br>

                    <input class="block button-contato" type="submit" value="Enviar">
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'HotelContact',
}
</script>

<style scoped lang="scss">
@import "../assets/scss/global/global.scss";

.container-contato {
    display: grid;
    place-items: center;
    padding: 150px 10px;

    .card-contato {
        .h2-contato {
            font-size: 1.7rem;
            text-align: center;
            margin-bottom: 43px;
        }

        form {
            width: 100%;

            .block {
                font-size: 1.2rem;
                display: block;
                margin: 7px 0;
            }

            .input-contato {
                max-width: 100%;
                width: 100%;
                border: 3px solid #f1f1f1;
                padding: 7px;
                outline: none;
            }

            .textarea-contato {
                max-width: 100%;
                width: 100%;
                min-height: 137px;
                outline: none;
                border: 3px solid #f1f1f1;
                resize: none;
            }

            .button-contato {
                padding: 10px;
                max-width: 50%;
                width: 100%;
                margin: 0 auto;
                border-radius: 196px;
                background-color: #008f8c;
                color: #fff;
                font-size: 1.2rem;
                transition: 0.3s;
                cursor: pointer;
            }
        }
    }
}

@media (min-width: 768px) {
    .card-contato {
        width: 600px;
    }
}

@media (max-width: 767px) {
    .card-contato {
        width: 500px;
    }
}

@media (max-width: 550px) {
    .card-contato {
        width: 400px;
    }
}

@media (max-width: 420px) {
    .card-contato {
        width: 300px;
    }
}
</style>