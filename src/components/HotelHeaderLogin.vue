<template>
    <div class="flexMenu menuLogin">
        <select>
            <option>🇧🇷</option>
            <option>🇱🇷</option>
            <option>🇪🇸</option>
        </select>
        <ul>
            <li>
                <input type="checkbox" id="login_check" />
                <label for="login_check" class="login_label">
                    <i class="fa-solid fa-bars" id="btn"></i>
                    <i class="fa-solid fa-xmark" id="cancel"></i>
                    <p id="visitante">Olá, {{ userName }}!</p>
                </label>
                <form action="#" method="post">
                    <div class="login_form">
                        <ul class="login_list">
                            <li>
                                <input type="email" class="txt" placeholder="E-mail" id="login_email" />
                            </li>
                            <li>
                                <input type="password" class="txt" placeholder="Senha" id="login_senha" />
                            </li>
                            <div class="salvar-senhar">
                                <input v-on:change="rememberPassword" name="senha" type="checkbox" id="senha" />
                                <label for="senha" class="salvar-senha-label">Salvar senha</label>
                            </div>
                            <li>
                                <button v-on:click="login" type="button" class="login_button" value="Login"
                                    id="login">Login</button>
                            </li>
                        </ul>
                        <div class="login_suporte">
                            <a href="#">Esqueci minha senha</a>
                            <a href="#">Não tenho uma conta</a>
                        </div>
                    </div>
                </form>
            </li>
        </ul>
        <button v-on:click="logout" type="button" id="sair" style="margin: 0; width: auto; background: transparent;">
            <p>Sair</p>
        </button>
    </div>
</template>

<script>
export default {
    name: "HotelHeaderLogin",
    data() {
        return {
            userName: '' || 'Visitante',
        };
    },
    mounted: function () {
        if (localStorage.getItem('rememberPassword')) {
            document.getElementById('login_senha').value = localStorage.getItem('rememberPassword');
            document.getElementById('senha').checked = true;
        }
        if (localStorage.getItem('lastUserName')) {
            let lastUserName = localStorage.getItem('lastUserName');
            document.getElementById('login_email').value = lastUserName;
        }
    },
    methods: {
        login(e) {
            e.preventDefault();
            this.userName = document.getElementById('login_email').value;
            localStorage.setItem('lastUserName', this.userName);
            console.log("login");
        },
        rememberPassword(e) {
            e.preventDefault();
            if (document.getElementById('senha').checked) {
                localStorage.setItem('rememberPassword', document.getElementById('login_senha').value);
            } else {
                localStorage.removeItem('rememberPassword');
            }
            console.log("rememberPassword");
        },
        logout(e) {
            e.preventDefault();
            this.userName = 'Visitante';
            localStorage.removeItem('lastUserName');
            localStorage.removeItem('rememberPassword');
            console.log("logout");
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/global/global.scss";
</style>