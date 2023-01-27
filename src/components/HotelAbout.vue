<template>
    <main>
        <section>
            <div class="carousel">
                <span class="text-nossoHotel">O Nosso Hotel</span>
                <div class="slides">
                    <input class="slides-input" type="radio" name="slide" id="slide1" checked>
                    <input class="slides-input" type="radio" name="slide" id="slide2">
                    <input class="slides-input" type="radio" name="slide" id="slide3">
                    <input class="slides-input" type="radio" name="slide" id="slide4">
                    <input class="slides-input" type="radio" name="slide" id="slide5">
                    <div class="slide s1">
                        <img src="../assets/images/sobre/imagePrincipal.jpg" alt="foto hotel de praia">
                    </div>
                    <div class="slide">
                        <img src="../assets/images/sobre/quarto1.jpg" alt="foto do primeiro quarto">
                    </div>
                    <div class="slide">
                        <img src="../assets/images/sobre/quarto2.jpg" alt="foto do segundo quarto">
                    </div>
                    <div class="slide">
                        <img src="../assets/images/sobre/fotoPiscinaEscura.jpg" alt="foto da piscina no por do sol">
                    </div>
                    <div class="slide">
                        <img src="../assets/images/sobre/fotoPiscina.jpg" alt="foto da psicina com clima ensolarado">
                    </div>
                </div>
                <div class="navigation-slides">
                    <label class="barra-slides" for="slide1"></label>
                    <label class="barra-slides" for="slide2"></label>
                    <label class="barra-slides" for="slide3"></label>
                    <label class="barra-slides" for="slide4"></label>
                    <label class="barra-slides" for="slide5"></label>
                </div>
            </div>
        </section>
        <article class="container-historia">
            <div class="container-text">
                <h2>A nossa história</h2>
                <p>What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to
                    make a type specimen book. It has survived not only five centuries, but also the leap into
                    electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus
                    PageMaker including versions of Lorem Ipsum</p>
            </div>
            <img class="image-historia" src="../assets/images/sobre/imageHistoria.jpg" alt="">
        </article>
        <article class="container-eventos">
            <h2>Eventos</h2>
            <p>O nosso hotel é perfeito para os seus eventos, contamos com salas para treinamentos, palestras,
                congressos,
                seminários, workshop, cursos e confraternizações</p>
            <div class="container-image-eventos">
                <img src="../assets/images/sobre/salaReuniao1.jpg" alt="">
                <img src="../assets/images/sobre/salaConferencia.jpg" alt="">
                <img src="../assets/images/sobre/salaReuniao2.jpg" alt="">
            </div>
        </article>
    </main>
</template>

<script>

export default {
    name: 'HotelAbout',
}
</script>

<style scoped lang="scss">
@import "../assets/scss/global/global.scss";


/*Carrossel inicial*/
.text-nossoHotel {

    position: absolute;
    align-items: center;
    bottom: 50%;
    left: 50%;
    display: flex;
    transform: translate(-50%);
    color: #fff;
    font-size: 2.8rem;
    text-shadow: 2px 2px 3px #000;

}

.carousel {
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;

}

.navigation-slides {
    position: absolute;
    bottom: 20px;
    left: 50%;
    display: flex;
    transform: translate(-50%);
}

.barra-slides {
    width: 70px;
    height: 17px;
    border: 2px solid #fff;
    margin: 6px;
    border-radius: 5px;
    cursor: pointer;
    transition: .4s;

    &:hover {
        background-color: #fff;
    }
}


.slides-input {
    display: none;
}

.slides {
    display: flex;
    width: 500%;
    height: 100%;
}

.slide {
    width: 20%;
    transition: .6s;

    img {
        width: 100%;
        height: 100%;
    }
}

#slide1:checked~.s1 {
    margin-left: 0;

}

#slide2:checked~.s1 {
    margin-left: -20%;

}

#slide3:checked~.s1 {
    margin-left: -40%;

}

#slide4:checked~.s1 {
    margin-left: -60%;

}

#slide5:checked~.s1 {
    margin-left: -80%;

}

/*História */
.container-historia {
    display: flex;
    margin: 20px;
}

.image-historia {
    width: 400px;
    margin: 20px;
    border-radius: 10px;

    &:hover {
        opacity: .5;
    }
}

.container-text {
    font-family: "Nunito", sans-serif;
    font-size: 1.3rem;

    h2 {
        margin-bottom: 20px;
        text-align: center;
    }

    p {
        text-align: center;
    }
}

/*Eventos*/

.container-eventos {
    width: 100%;

    h2 {
        text-align: center;
        margin: 10px;
        font-size: 1.7rem;
        font-weight: bold;
    }

    p {
        text-align: center;
        margin: 20px;
        font-family: "Nunito", sans-serif;
        font-size: 1.3rem;
    }
}

.container-image-eventos {
    display: flex;
    margin: 20px;

    img {
        width: 30%;
        margin: 20px 1.5%;
        border-radius: 10px;
        cursor: pointer;

        &:hover {
            opacity: .5;
        }

    }
}

@media (max-width: 768px) {
    .container-historia {
        flex-direction: column;

        img {
            width: 100%;
            margin: 20px 0;
        }

    }

    .container-image-eventos {
        flex-direction: column;

        img {
            width: 100%;
            margin: 20px 0;
        }

    }
}
</style>