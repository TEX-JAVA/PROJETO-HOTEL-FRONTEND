const usuario = "Fulaninho";
const btnLogin = document.getElementById("login");
const email = document.getElementById("login_email");

btnLogin.onclick = () => {
	let formEmail = email.value.replace(/'|"|\s/g, "").toLowerCase();
	let lsNome, lsEmail;

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
