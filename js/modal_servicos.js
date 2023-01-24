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
    localStorage.setItem('servicos',"")
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
    localStorage.setItem('servicos', selecionados)
    return total
}

document.querySelector('.a-servicos').onclick = ()=>{
    let modal_servicos = document.querySelector('.servicos-modal') 

    if(modal_servicos == null){
        let modal = document.querySelector('#modal-davi')
    
        Object.keys(servicesAndPrices).forEach((serv,i)=>{
            let formModalServicos = document.createElement('form')
            formModalServicos.setAttribute('method', 'POST')
            formModalServicos.setAttribute('class', 'servicos-modal')
            
            if(i == 0){
                modal.appendChild(formModalServicos)
                let titulo = document.createElement('h1')
                titulo.innerText = 'Serviços'
                formModalServicos.appendChild(titulo)
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
            
            formModalServicos = document.querySelector('.servicos-modal')
            formModalServicos.appendChild(servDiv)
            servDiv.appendChild(servInput)
            servDiv.appendChild(servLabel)
    
            servInput.onclick = ()=>{
                document.querySelector('.itens-total').innerText = 
                    `Pessoas: ${localStorage.getItem('pessoas')}\nR$ ${(servicosSelecionados()*(localStorage.getItem('pessoas'))).toFixed(2)}`
            }
            
            if(i+1 == (Object.keys(servicesAndPrices).length)) {
                let divControladora = document.createElement('div')
                divControladora.setAttribute('class', 'controladora-servicos')
                let button = document.createElement('button')
                button.setAttribute('type','button')
                button.setAttribute('class','servicos_button')
                button.setAttribute('value', 'salvar')
                button.innerText = 'Salvar'
                button.onclick = ()=>{
                    formModalServicos.style = 'display:none'
                }
                
                formModalServicos.appendChild(divControladora)
                divControladora.appendChild(button)
    
                let total = document.createElement('label');
                total.setAttribute('class', 'itens-total')
                total.innerText = `Pessoas: ${localStorage.getItem('pessoas')}\nR$ 0,00`
                divControladora.appendChild(total)
            }
        })
    }
    modal_servicos = document.querySelector('.servicos-modal')
    modal_servicos.style='display:block'
}
