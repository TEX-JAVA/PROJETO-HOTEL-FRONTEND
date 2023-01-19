// Declara as variáveis today e minCheckoutDate para validarem as datas minimas de checkin e checkout
const today = new Date().toISOString().split("T")[0];
let minCheckoutDate = new Date().getTime() + 86400000;
minCheckoutDate = new Date(minCheckoutDate).toISOString().split("T")[0];
// Final da declaração das variáveis today e minCheckoutDate
// Evento para setar as datas minimas de checkin e checkout antes das outras funções
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("checkin-date").setAttribute("min", today);
    document.getElementById("checkout-date").setAttribute("min", minCheckoutDate);
});
// Final do evento para setar as datas minimas de checkin e checkout antes das outras funções
document.addEventListener("DOMContentLoaded", function() {
    // Objeto com nomes dos serviços e preços
    const servicesAndPrices = {
        "wifi": 16,
        "kids-events": 40,
        "breakfast": 30,
        "mini-bar": 120,
        "gym": 10,
    }
    // Objeto com os nomes dos quartos e preços
    const roomsAndPrices = {
        "classic": 200,
        "executive": 500,
        "premium": 1000,
    }
    // Inicialização do localStorage
    if (!localStorage.getItem("services")) localStorage.setItem("services", "");
    if (!localStorage.getItem("room")) localStorage.setItem("room", "classic");
    if (!localStorage.getItem("checkin")) localStorage.setItem("checkin", "");
    if (!localStorage.getItem("checkout")) localStorage.setItem("checkout", "");
    if (!localStorage.getItem("guests")) localStorage.setItem("guests", "");
    // Final da inicialização do localStorage
    // Setando as variáveis com os valores do localStorage
    let services = localStorage.getItem("services").split(",");
    let room = localStorage.getItem("room");
    let checkin = localStorage.getItem("checkin");
    let checkout = localStorage.getItem("checkout");
    let guests = localStorage.getItem("guests");
    // Final da setagem das variáveis com os valores do localStorage
    // Eventos para o checkin, checkout e adultos
    const checkinInput = document.getElementById("checkin-date");
    const checkoutInput = document.getElementById("checkout-date");
    const guestsInput = document.getElementById("nb-adults");
    const selectRoom = document.getElementById('room-type');
    const optionRoom = selectRoom.options[selectRoom.selectedIndex].value;
    document.getElementById("data_entrada").setAttribute("min", today);

    checkinInput.value = checkin;
    checkoutInput.value = checkout;
    guestsInput.value = guests;
    selectRoom.value = room;

    checkinInput.addEventListener("change", function (event) {
        checkin = event.target.value;
        localStorage.setItem("checkin", checkin);
        let newCheckoutDate = new Date(checkin).getTime() + 86400000;
        newCheckoutDate = new Date(newCheckoutDate).toISOString().split("T")[0];
        document.getElementById("checkout-date").setAttribute("min", newCheckoutDate);
    })
    checkoutInput.addEventListener("change", function (event) {
        checkout = event.target.value;
        localStorage.setItem("checkout", checkout);
    })
    guestsInput.addEventListener("change", function (event) {
        guests = event.target.value;
        localStorage.setItem("guests", guests);
    })
    selectRoom.addEventListener("change", function (event) {
        room = event.target.value;
        localStorage.setItem("room", room);
    })
    // Final dos eventos para o checkin, checkout e adultos
    // Eventos para os quartos
    Object.keys(roomsAndPrices).forEach((room) => {
            let roomBtn = document.getElementById(`btn-${room}`);
            roomBtn.addEventListener("click", function (event) {
                event.preventDefault();
                room = room;
                document.getElementById("room-type").value = room;
                localStorage.setItem("room", room);
            })
        })
    // Final dos eventos para os quartos
    // Código para selecionar os serviços
    const cards = document.querySelectorAll(".card-modal");
    cards.forEach(function (card) {
        // Código para adicionar a classe selected e o border
        // baseado no localStorage
        if (!localStorage.getItem("services")) localStorage.setItem("services", "");

        let services = localStorage.getItem("services");
        if (services === "") services = [];
        else services = services.split(",");
        
        const serviceName = card.id;
        if (services.includes(serviceName)){ card.classList.add("selected");}
        else {card.classList.remove("selected");}
        
        if (card.classList.contains("selected")){card.style.border = "2px solid teal";}
        else { card.style.border = "none"; }
        // Final do código para adicionar a classe selected e o border
        // baseado no localStorage

        // Código baseado nos cliques para adicionar os serviços ao localStorage
        card.addEventListener("click", function (event) {
            event.preventDefault();
            if (!localStorage.getItem("services")) localStorage.setItem("services", "");
            
            services = localStorage.getItem("services");
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
    
    // Funcao para validar a abertuda do modal
    function validateModalOpening() {
        if (new Date(checkin) > new Date(checkout)) {
            alert("A data de check-out deve ser posterior à data de check-in");
            document.getElementById("checkout-date").style.border = "2px solid red";
            return false;        
        }
        if (checkin === "" || checkout === "" || guests === "" || room === "") {
            alert("Preencha todos os campos para prosseguir");
            document.getElementById("border-if-failure").style.border = "2px solid red";
            return false;
        }
        document.getElementById("border-if-failure").style.border = "none";
        document.getElementById("checkout-date").style.border = "none";
        return true;
    }
    // Final da funcao para validar a abertuda do modal
    
    // Codigo para o checkin, checkout, tipo de quarto e adultos no localStorage
    const continueBtn = document.getElementById("continue-btn");
    continueBtn.addEventListener("click", function (event) {
        // Codigo para calculo do preco por adulto
        const pricePerAdult = () => {
            services = localStorage.getItem("services").split(",");
            let total = 0;
            let roomPrice = roomsAndPrices[room];
            if (services[0] !== "") {
                services.forEach(function (service) {
                    total += servicesAndPrices[service];
                });
            }
            total += roomPrice;
            const nbDays = (new Date(checkout) - new Date(checkin)) / (1000 * 3600 * 24);
            total *= nbDays;
            return total;
        }
        services = localStorage.getItem("services").split(",");
        document.getElementById('checkin-date-value').innerHTML = checkin;
        document.getElementById('checkout-date-value').innerHTML = checkout;
        document.getElementById('nb-adults-value').innerHTML = guests;
        document.getElementById('services-list-value').innerHTML = services.join(", ");
        document.getElementById('price-per-adult').innerHTML = `R$ ${pricePerAdult()}`;
        document.getElementById('total-price').innerHTML = `R$ ${pricePerAdult() * guests}`;
    });

    // Código para abrir e fechar o modal
    const modals = document.querySelectorAll("[data-modal]");
    modals.forEach(function (trigger) {
        trigger.addEventListener("click", function (event) {
            if (!validateModalOpening()) return;
            event.preventDefault();
            const modal = document.getElementById(trigger.dataset.modal);
            modal.classList.add("open");
            let footer = document.getElementsByTagName("footer")[0];
            footer.style.visibility = "hidden";
            const exits = modal.querySelectorAll(".modal-exit");
            exits.forEach(function (exit) {
                exit.addEventListener("click", function (event) {
                    event.preventDefault();
                    modal.classList.remove("open");
                    footer.style.visibility = "visible";
                });
            });
        });
    });
    // Final do código para abrir e fechar o modal
});