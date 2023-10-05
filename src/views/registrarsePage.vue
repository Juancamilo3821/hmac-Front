<template>
    <div class="container-inicio-sesion">
        <div class="container-form-login">
            <div class="form-login">
                <div class="header-login">
                    <p style="padding: 0 1px">
                        <img src="@/assets/icons/row-right.svg">
                        Inicio
                    </p>
                    <img src="@/assets/icons/logo.svg">
                    <div style="padding: 0px 2rem"></div>
                </div>
                <form action="/Registrarse" class="form-hmac">
                    <div style="display: flex; width: 100%;">
                        <div class="container-input" style="margin-right: .5rem;">
                            <input type="text" style="flex: 1 0 0%" placeholder="Nombre">
                        </div>
                        <div class="container-input" style="margin-left: .5rem;">
                            <input type="text" style="flex: 1 0 0%" placeholder="Apellido">
                        </div>
                    </div>
                    <div class="container-input">
                        <img src="@/assets/icons/row-right.svg">
                        <input v-model="userData.NOMBRE_USUARIO" type="text" style="flex: 1 0 0%" placeholder="Correo electrónico">
                    </div>
                    <div class="container-input">
                        <img src="@/assets/icons/row-right.svg">
                        <input v-model="userData.HASH" type="text" style="flex: 1 0 0%" placeholder="Contraseña">
                    </div>
                    <div style="display: flex; padding-top: 1rem;">
                        <button class="btn-primario" @click="submitForm">
                            CREAR CUENTA
                        </button>
                    </div>
                </form>
            </div>
            <div class="container-change-page">
                <p style="margin-bottom: 0; padding-right: .4rem;">Ya tienes una cuenta?</p>
                <button class="tag" @click="$router.push({name: 'IniciarSesion'})">Iniciar sesión</button>
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
      }
    };
  },
  methods: {
    async submitForm() {
        try {
        console.log("NOMBRE_USUARIO data type:", this.userData.NOMBRE_USUARIO);
        console.log("HASH data type:", this.userData.HASH);

        const dataToSend = {
        NOMBRE_USUARIO: this.userData.NOMBRE_USUARIO,
        HASH: this.userData.HASH
        };
        
        let response = await axios.post('/api/Usuario', dataToSend);
        console.log(response.data);
        // Optionally, you can redirect the user to a different page after successful registration.
      } catch (error) {
        console.error(error.response.data);
      }
    }
  }
};
</script>