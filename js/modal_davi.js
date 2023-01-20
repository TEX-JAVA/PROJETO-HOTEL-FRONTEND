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

function servicosSelecionados() {
    let total = 0
    document.getElementsByName('servicos').forEach(i =>{
        if(i.checked){
            total += servicesAndPrices[i.value]
        }
    })
    return total
}

// 1 - Criando área de seleção de serviços//
let modal
modal = document.querySelector('.modal-davi');

Object.keys(servicesAndPrices).forEach((serv,i)=>{
    let servDiv = document.createElement('div')
    servDiv.setAttribute('class', `item-${serv}`);

    let servInput = document.createElement('input')
    servInput.setAttribute('type', 'checkbox')
    servInput.setAttribute('id', serv)
    servInput.setAttribute('name', 'servicos')
    servInput.setAttribute('value', serv)
    
    let servLabel = document.createElement('label')
    servLabel.setAttribute('for', serv)
    servLabel.innerText = serv.charAt(0).toUpperCase() + serv.slice(1) + ` R$${(servicesAndPrices[serv].toFixed(2))}`

    modal.appendChild(servDiv);
    servDiv.appendChild(servInput);
    servDiv.appendChild(servLabel);

    servInput.addEventListener('click',()=>{
        document.querySelector('.itens-total').innerText = `R$ ${servicosSelecionados().toFixed(2)}`;
    })
})
// 1 - Fim

let total = document.createElement('p');
total.setAttribute('class', 'itens-total')
total.innerText = "R$ 0,00"

modal.appendChild(total)
// let servicosSelecionados = document.getElementsByName('servicos').checked


