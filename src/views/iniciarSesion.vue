<template>
    <div class="container-inicio-sesion">
        <div class="container-form-login">
            <div class="form-login">
                <div class="header-login">
                    <button @click="$router.push({ name: 'home' })" style="border: none; background-color:transparent;">
                        <img src="@/assets/icons/row-right.svg">
                        Inicio
                    </button>
                    <img src="@/assets/icons/logo.svg">
                    <div style="padding: 0px 2rem"></div>
                </div>
                <div class="form-hmac">
                    <div class="container-input">
                        <img src="@/assets/icons/row-right.svg">
                        <input v-model="userData.NOMBRE_USUARIO" @input="validateEmail" type="email" style="flex: 1 0 0%"
                            placeholder="Correo electrónico">
                    </div>
                    <div class="container-input">
                        <img src="@/assets/icons/row-right.svg">
                        <input v-model="userData.HASH" type="password" style="flex: 1 0 0%" placeholder="Contraseña">
                    </div>
                    <div style="display: flex; padding-top: 1rem;">
                        <button class="btn-primario" @click="Login()">
                            INGRESAR
                        </button>
                    </div>
                    <div v-if="!emailValid" class="error-message text-danger mt-4 text-center">El correo electrónico no es válido.</div>
                    <p style="text-align: center; margin-top: 1rem; margin-bottom: 0;">¿Olvidaste tu contraseña?</p>
                </div>
            </div>
            <div class="container-change-page">
                <p style="margin-bottom: 0; padding-right: .4rem;">¿No tiene una cuenta?</p>
                <button class="tag" @click="$router.push({ name: 'Registrarse' })">Crear una</button>
            </div>
        </div>
        <div class="container-info-login">
            <div style="width: 100%"></div>
            <div class="container-title-login">
                <h1>TU CAMINO <br> HACIA LA <br> SALUD,</h1>
                <p>en armonia con la naturaleza.</p>
            </div>
            <p style="color: #4f8239;">Hospital de Medicina Alternativa Colombiano</p>
        </div>
    </div>
</template>
<script>

import axios from 'axios';
import Cookies from 'js-cookie'; // Importa la biblioteca js-cookie

export default {
    data() {
        return {
            userData: {
                NOMBRE_USUARIO: "",
                HASH: ""
            },
            emailValid: true,
        };
    },
    methods: {
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailValid = emailRegex.test(this.userData.NOMBRE_USUARIO);
        },
        async Login() {
            if (!this.emailValid) return
            try {
                const response = await axios.post('http://localhost:5000/api/login', this.userData);
                Cookies.set('connect.sid', response.headers['set-cookie']);
                this.$router.replace({ name: 'home' })
            } catch (error) {
                if (error.response.status === 404) {
                    alert('No existe este usuario.');
                } else if (error.response.status === 401) {
                    alert('Contraseña incorrecta');
                } else {
                    alert(error.response.data.message);
                }
            }
        }
    }
};
</script>