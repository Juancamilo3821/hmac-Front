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
                <form action="" class="form-hmac">
                    <div class="container-input">
                        <img src="@/assets/icons/row-right.svg">
                        <input v-model="userData.NOMBRE_USUARIO" @input="validateEmail" type="email" style="flex: 1 0 0%" placeholder="Correo electrónico">
                        <div v-if="!emailValid" class="error-message">El correo electrónico no es válido.</div>
                    </div>
                    <div class="container-input">
                        <img src="@/assets/icons/row-right.svg">
                        <input v-model="userData.HASH" type="password" style="flex: 1 0 0%" placeholder="Contraseña">
                    </div>
                    <div style="display: flex; padding-top: 1rem;">
                        <button class="btn-primario" @click="Registrar()">
                            CREAR CUENTA
                        </button>
                    </div>
                </form>
            </div>
            <div class="container-change-page">
                <p style="margin-bottom: 0; padding-right: .4rem;">Ya tienes una cuenta?</p>
                <button class="tag" @click="$router.push({ name: 'IniciarSesion' })">Iniciar sesión</button>
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

export default {
    data() {
        return {
            userData: {
                NOMBRE_USUARIO: "",
                HASH: ""
            },
            emailValid: true, // Inicialmente, suponemos que el correo es válido.
        };
    },
    methods: {
        validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailValid = emailRegex.test(this.userData.NOMBRE_USUARIO);
        },
        async Registrar() {
            if (!this.emailValid) {
                // No permitas que el formulario se envíe si el correo electrónico no es válido.
                return;
            }
            try {
                await axios.post('http://localhost:5000/api/register', this.userData);

            } catch (error) {
                console.error(error.response.data);
            }
        }
    }
};

</script>
<style>
.container-input-identidad {
    background-color: #d9d9d9;
    padding: .4rem 1rem;
    border-radius: 30px;
    display: flex;
    margin-bottom: 1.5rem;
    min-width: calc(50% - 2rem);
    flex-wrap: wrap;
}

.opciones-identidad {
    align-items: right;
    width: 30%;
    overflow: hidden;
    padding: 0 .5rem;
    border-right: 1px solid #b5b5b5;
}

.opciones-identidad select {
    width: 100%;
    background-color: transparent;
    border-color: #d9d9d9;
    min-height: 35px;
}

.opciones-identidad select:focus-visible {
    outline: none;
}

.select-identidad {
    width: 70%;
    padding-left: .5rem;
}

.content-identidad {
    display: flex;
    width: 100%;
}

.content-identidad input {
    width: 100%;
}
</style>