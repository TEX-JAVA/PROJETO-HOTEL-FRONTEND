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
    localStorage.clear("services")
    let total = 0
    let selecionados = []
    let servicos = document.getElementsByName('servicos')

    servicos.forEach(i =>{
        if(i.checked){
            selecionados.push(i.getAttribute('value'))
            total += servicesAndPrices[i.value]
        }
    })
    selecionados.push(total)
    localStorage.setItem('services', selecionados)
    return total
}

// 1 - Criando área de seleção de serviços//
let modal = document.querySelector('.modal-davi')

Object.keys(servicesAndPrices).forEach((serv,i)=>{
    let formModalServices = document.createElement('form')
    formModalServices.setAttribute('method', 'POST')
    formModalServices.setAttribute('class', 'services-modal')
    
    if(i == 0){
        modal.appendChild(formModalServices)
        let titulo = document.createElement('h1')
        titulo.innerText = 'Serviços'
        formModalServices.appendChild(titulo)
    }

    let servDiv = document.createElement('div')
    servDiv.setAttribute('class', `item-${serv}`)

    let servInput = document.createElement('input')
    servInput.setAttribute('type', 'checkbox')
    servInput.setAttribute('id', serv)
    servInput.setAttribute('name', 'servicos')
    servInput.setAttribute('value', serv)
    
    let servLabel = document.createElement('label')
    servLabel.setAttribute('for', serv)
    servLabel.innerText = serv.charAt(0).toUpperCase() + serv.slice(1) + ` R$${(servicesAndPrices[serv].toFixed(2))}`
    
    formModalServices = document.querySelector('.services-modal')
    formModalServices.appendChild(servDiv)
    servDiv.appendChild(servInput)
    servDiv.appendChild(servLabel)

    servInput.addEventListener('click',()=>{
        document.querySelector('.itens-total').innerText = `R$ ${servicosSelecionados().toFixed(2)}`
    })
    
    if(i+1 == (Object.keys(servicesAndPrices).length)) {
        let divController = document.createElement('div')
        divController.setAttribute('class', 'controller-services')
        let button = document.createElement('button')
        button.setAttribute('type','button')
        button.setAttribute('class','services_button')
        button.setAttribute('value', 'salvar')
        button.innerText = 'Salvar'
        
        formModalServices.appendChild(divController)
        divController.appendChild(button)

        let total = document.createElement('label');
        total.setAttribute('class', 'itens-total')
        total.innerText = "R$ 0,00"
        divController.appendChild(total)
    }
})
// 1 - Fim