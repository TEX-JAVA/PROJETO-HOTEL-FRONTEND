document.addEventListener("DOMContentLoaded", function () {
    // Objeto com nomes dos serviços e preços
    const servicesAndPrices = {
        "wifi": 16,
        "kids-events": 40,
        "breakfast": 30,
        "mini-bar": 120,
        "gym": 10,
    }

    /* Selecionar apartamento */



    /*  */
    // Código para selecionar os serviços
    const cards = document.querySelectorAll(".card");
    cards.forEach(function (card) {
        // Código para adicionar a classe selected e o border
        // baseado no localStorage
        if (!localStorage.getItem("services")) localStorage.setItem("services", "");

        let services = localStorage.getItem("services");
        if (services === "") services = [];
        else services = services.split(",");

        const serviceName = card.id;
        if (services.includes(serviceName)) { card.classList.add("selected"); }
        else { card.classList.remove("selected"); }

        if (card.classList.contains("selected")) { card.style.border = "2px solid teal"; }
        else { card.style.border = "none"; }
        // Final do código para adicionar a classe selected e o border
        // baseado no localStorage

        // Código baseado nos cliques para adicionar os serviços ao localStorage
        card.addEventListener("click", function (event) {
            event.preventDefault();
            if (!localStorage.getItem("services")) localStorage.setItem("services", "");

            let services = localStorage.getItem("services");
            if (services === "") services = [];
            else services = services.split(",");

            const serviceName = card.id;
            card.classList.toggle("selected");

            if (card.classList.contains("selected")) card.style.border = "2px solid teal";
            else card.style.border = "none";

            if (!localStorage.getItem("services")) localStorage.setItem("services", "");

            if (card.classList.contains("selected")) services.push(serviceName);
            else {
                const index = services.indexOf(serviceName);
                services.splice(index, 1);
            }
            localStorage.setItem("services", services.join(","));
        })
        // Final do código baseado nos cliques para adicionar os serviços ao localStorage
    });
    // Final do código para selecionar os serviços


    const continueBtn = document.getElementById("continue-btn");
    continueBtn.addEventListener("click", function (event) {
        // Codigo para o checkin, checkout e adultos no localStorage
        const checkinDate = document.getElementById("checkin-date");
        const checkoutDate = document.getElementById("checkout-date");
        const nbAdults = document.getElementById("nb-adults");

        if (!localStorage.getItem("checkin-date")) {
            localStorage.setItem("checkin-date", "");
        }
        if (!localStorage.getItem("checkout-date")) {
            localStorage.setItem("checkout-date", "");
        }
        if (!localStorage.getItem("nb-adults")) {
            localStorage.setItem("nb-adults", "");
        }

        checkinDate.addEventListener("change", function (event) {
            localStorage.setItem("checkin-date", event.target.value);
        });
        checkoutDate.addEventListener("change", function (event) {
            localStorage.setItem("checkout-date", event.target.value);
        });
        nbAdults.addEventListener("change", function (event) {
            localStorage.setItem("nb-adults", event.target.value);
        });
        // Final do codigo para o checkin, chekout e adultos

        // Codigo para o resumo da reserva
        const checkInDateValue = localStorage.getItem("checkin-date");
        const checkOutDateValue = localStorage.getItem("checkout-date");
        const nbAdultsValue = localStorage.getItem("nb-adults");
        const servicesArray = localStorage.getItem("services").split(",");
        const roomPrice = 200;

        let dateCheckoutDateValue = new Date(checkOutDateValue) / (1000 * 3600 * 24);;
        let dateCheckInDateValue = new Date(checkInDateValue) / (1000 * 3600 * 24);;

        console.log(dateCheckInDateValue)
        console.log(dateCheckoutDateValue)

        if (dateCheckInDateValue > dateCheckoutDateValue) {
            alert("ERRO! DATA ERRADA");
        } else if (dateCheckoutDateValue >= dateCheckInDateValue) {
            const modals = document.querySelectorAll("[data-modal]");

            modals.forEach(function (trigger) {
                trigger.addEventListener("click", function (event) {
                    const modal = document.getElementById(trigger.dataset.modal);
                    modal.classList.add("open");
                    const exits = modal.querySelectorAll(".modal-exit");
                    exits.forEach(function (exit) {
                        exit.addEventListener("click", function (event) {
                            modal.classList.remove("open");
                        });
                    });
                });
            });
        }

        const pricePerAdult = () => {
            let total = 0;
            if (servicesArray[0] !== "") {
                servicesArray.forEach(function (service) {
                    total += servicesAndPrices[service];
                });
            }
            total += roomPrice;
            const nbDays = (new Date(checkOutDateValue) - new Date(checkInDateValue)) / (1000 * 3600 * 24);
            total *= nbDays;
            return total;
        }

        document.getElementById('checkin-date-value').innerHTML = checkInDateValue;
        document.getElementById('checkout-date-value').innerHTML = checkOutDateValue;
        document.getElementById('nb-adults-value').innerHTML = nbAdultsValue;
        document.getElementById('services-list-value').innerHTML = servicesArray.join(", ");
        document.getElementById('price-per-adult').innerHTML = `R$ ${pricePerAdult()}`;
        document.getElementById('total-price').innerHTML = `R$ ${pricePerAdult() * nbAdultsValue}`;
    });
});