<template>
    <main style="position: static" class="container-gastro">
        <div class="main-gastro">
            <div class="headline">
                <h2 class="h2-gastro" style="letter-spacing: 15px; color: #023535">
                    Delícias do Mar
                </h2>
                <h2 class="h2-gastro" style="font-size: 80px; color: #023535">
                    Culinária Hotel&nbsp;H
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut
                    dolore mollitia rem! Vel praesentium quasi repudiandae quibusdam
                    temporibus ex beatae esse impedit. Labore eaque maiores quisquam
                    minus laboriosam ipsa?
                </p>
                <a class="contact-btn" href="#h2-gastro2">Explore o menu</a>
            </div>
            <div class="img-headeline">
                <img src="../assets/images/gastronomia/comida7.png" alt="#" style="max-width: 90%" />
            </div>
        </div>
        <section class="sec-gastro">
            <h2 id="h2-gastro2" style="font-weight: normal">
                Conheça o que sabemos fazer de melhor
            </h2>
            <div class="sevicos">
                <div class="card-gastro">
                    <div class="card-gastro-text gastro-lagosta">
                        <img src="../assets/images/gastronomia/lagosta1.jpg"
                            style="width: 100%; height: 100%; border-radius: 10px" alt="" />
                    </div>
                    <div class="texto-oculto">
                        <h3>Lagosta com caviar</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                            voluptate inventore ipsum sequi, vitae eum magni repudiandae
                            maiores illo odio quisquam modi. Velit quae praesentium
                            voluptate necessitatibus tenetur repellat odio?
                        </p>
                    </div>
                </div>
                <div class="card-gastro">
                    <div class="card-gastro-text">
                        <img src="../assets/images/gastronomia/salmon2.jpg"
                            style="width: 100%; height: 100%; border-radius: 10px" alt="" />
                    </div>
                    <div class="texto-oculto">
                        <h3>Salmão da casa</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                            voluptate inventore ipsum sequi, vitae eum magni repudiandae
                            maiores illo odio quisquam modi. Velit quae praesentium
                            voluptate necessitatibus tenetur repellat odio?
                        </p>
                    </div>
                </div>
                <div class="card-gastro">
                    <div class="card-gastro-text">
                        <img src="../assets/images/gastronomia/ostra2.jpg"
                            style="width: 100%; height: 100%; border-radius: 10px" alt="" />
                    </div>

                    <div class="texto-oculto">
                        <h3>Ostras frescas</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                            voluptate inventore ipsum sequi, vi tae eum magni repudiandae
                            maiores illo odio quisquam modi. Velit quae praesentium
                            voluptate necessitatibus tenetur repellat odio?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: 'HotelGastronomia',
};
</script>

<style scoped lang="scss">
@import "../assets/scss/global/global.scss";

@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.container-gastro {
    max-width: 1250px;
    margin: auto;
    position: relative;
    padding: 10px 10px;
}

.menu {
    flex: 70%;
    text-align: right;
    padding: 20px;
}

.menu a {
    color: #180f4a;
    text-decoration: none;
    font-size: 20px;
    padding: 20px 16px;
    margin-left: 5%;
}

#botao {
    background: #180f4a;
    padding: 10px 25px;
    color: white;
    border-radius: 5px;
    margin-right: 10px;
}

#botao:hover {
    border: none;
    background: #ff2978;
}

.main-gastro {
    position: static;
    padding-top: 100px;
    display: flex;
    flex-flow: row wrap;
    height: auto;
    background: white;
    justify-content: center;
    align-items: center;
}

.headline {
    flex: 40%;
    margin-left: 10%;
}

.img-headeline {
    margin-right: 10%;
    flex: 40%;
    text-align: center;
}

.headline h2 {
    font-weight: 900;
    font-size: 20px;
    color: #180f4a;
    padding: 0;
    margin: 0;
}

.headline p {
    color: gray;
    text-align: left;
}

.contact-btn {
    background-image: linear-gradient(to bottom, #015958, #008f8c);
    padding: 15px;
    color: white;
    text-transform: uppercase;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    margin-top: 5%;
}

.contact-btn:hover {
    background-image: linear-gradient(to top, #015958, #008f8c);
}

.sec-gastro {
    display: inline-block;
    margin-left: 5%;
    margin-right: 5%;
    height: auto;
    padding: 5%;
    text-align: center;
}

.sec-gastro h2 {
    width: 100%;
    font-size: 50px;
    margin: 0;
    font-family: 'Lobster', cursive;
    font-weight: bold;
    color: #015958
}

.h2-gastro {
    color: #015958;
}

.sevicos {
    display: flex;
    margin-top: 5%;
}

.card-gastro {
    display: inline-block;
    width: 30%;
    margin: 1%;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    height: 50%;

}

.logo-rodape {
    padding: 100px
}

.agencia {
    font-family: 'Lobster', cursive;
    color: white;
    font-size: 34px;
}

@media screen and (max-width: 1005px) {

    .menu {
        display: none;
    }

    .logo {
        margin: 0;
        text-align: center;
    }

    .main-gastro {
        padding-top: 50px;
    }

    .headline,
    .img-readline {
        flex: 100%;
        margin: 5%;
        text-align: center;
    }

    .headline p {
        text-align: center;
    }

    .sevicos {
        flex-direction: column;
        width: 100%;
    }

}
</style>