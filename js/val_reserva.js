function formatarData(data, qtd){
    let dataFormatada = new Date(data)
    dataFormatada.setDate(dataFormatada.getDate() + (dataFormatada.getHours() >= 14 ? 1 : 0));
    dataFormatada.setDate(dataFormatada.getDate() + (qtd != 0 ? qtd : 0));    
    return `${dataFormatada.getFullYear()}-${String(dataFormatada.getMonth()+1).padStart(2,0)}-${String(dataFormatada.getDate()).padStart(2,0)}`
}

let qtd_pessoas = document.getElementById('n-adultos');
let inputCheckin = document.getElementById('checkin-data');
let inputCheckout = document.getElementById('checkout-data');
let data_atual = new Date();

localStorage.setItem('apartamento',"")
localStorage.setItem('pessoas', 1)
localStorage.setItem('checkin', formatarData(data_atual,0))
localStorage.setItem('checkout',"")
localStorage.setItem('servicos',"")

inputCheckin.setAttribute('min', localStorage.getItem('checkin'));
inputCheckin.onchange = ()=>{
    inputCheckout.value = "";
    localStorage.setItem('checkin', inputCheckin.value);
}

inputCheckout.onclick = ()=>{
    inputCheckin.value == "" ? alert("Selecione uma data de Checkin") : 
    inputCheckout.setAttribute('min', formatarData(localStorage.getItem('checkin'),1))
}

inputCheckout.onchange = ()=>{
    localStorage.setItem('checkout', inputCheckout.value)
}

qtd_pessoas.onchange = ()=>{
    localStorage.setItem('pessoas', qtd_pessoas.value)
}
