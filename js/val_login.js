document.addEventListener("DOMContentLoaded", function() {
const usuario = "Fulaninho";
const btnLogin = document.getElementById("login");
const btnSair = document.getElementById("sair");
const email = document.getElementById("login_email");

var lsNome = localStorage.getItem("nome");
var lsEmail = localStorage.getItem("email");

if(localStorage.getItem('nome') != null && localStorage.getItem('email') != null){
	document.getElementById("visitante").innerHTML = `Olá! ${lsNome}`;
	document.getElementById("menu-sidebar-visitante").innerHTML = lsNome;
}

btnLogin.onclick = () => {
	let formEmail = email.value.replace(/'|"|\s/g, "").toLowerCase();
	if (formEmail == "") {
		alert("Preencha seu E-mail");
	} else {
		localStorage.setItem("email", formEmail);
		localStorage.setItem("nome", usuario);
		lsNome = localStorage.getItem("nome");
		lsEmail = localStorage.getItem("email");
		document.getElementById("visitante").innerHTML = `Olá! ${lsNome}`;
		document.getElementById("menu-sidebar-visitante").innerHTML = lsNome;
		alert(`Olá ${lsNome}(${lsEmail})`);
	}
};

btnSair.onclick = () => {
	localStorage.clear("nome");
	localStorage.clear("email");
	document.getElementById("visitante").innerHTML = `Olá, Visitante!`;
	document.getElementById("menu-sidebar-visitante").innerHTML = "Login";
	location.reload();
}
})