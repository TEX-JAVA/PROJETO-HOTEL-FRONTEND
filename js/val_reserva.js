    let date = new Date();
    let dateVal = new Date();
    dateVal.setDate(date.getDate() + (date.getHours() >= 14 ? 1 : 0));

    let dia = String(dateVal.getDate()).padStart(2,0)
    let mes = String(dateVal.getMonth()+1).padStart(2,0);
    let ano = dateVal.getFullYear();
    let data_atual = `${ano}-${mes}-${dia}`;

    let inputCheckin = document.getElementById('checkin-date');
    let inputCheckout = document.getElementById('checkout-date');

    inputCheckin.setAttribute('min', data_atual)

    inputCheckin.onchange = ()=>{
        inputCheckout.value = ""
    }

    inputCheckout.onclick = ()=>{
        inputCheckin.value == "" ? alert("Selecione uma data de Checkin") : inputCheckout.setAttribute('min', inputCheckin.value) 
    }
