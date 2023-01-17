document.addEventListener("DOMContentLoaded", function() {
    const modals = document.querySelectorAll("[data-modal]");

    modals.forEach(function (trigger) {
        trigger.addEventListener("click", function (event) {
            event.preventDefault();
            const modal = document.getElementById(trigger.dataset.modal);
            modal.classList.add("open");
            const exits = modal.querySelectorAll(".modal-exit");
            exits.forEach(function (exit) {
                exit.addEventListener("click", function (event) {
                    event.preventDefault();
                    modal.classList.remove("open");
                });
            });
        });
    });
    
    const servicesAndPrices = {
        "wifi": 16,
        "kids-events": 40,
        "breakfast": 30,
        "mini-bar": 120,
        "gym": 10,
    }

    const cards = document.querySelectorAll(".card");
    cards.forEach(function (card) {
        card.addEventListener("click", function (event) {
            event.preventDefault();
            card.classList.toggle("selected");
            const service = card.id;
            if (!localStorage.getItem("services")) {
                localStorage.setItem("services", card.id + '.');
            }
            let services = localStorage.getItem("services");
            services += service + '.';
            localStorage.setItem("services", services);
            console.log(services);
            console.log(localStorage.getItem("services"));
        })});
});