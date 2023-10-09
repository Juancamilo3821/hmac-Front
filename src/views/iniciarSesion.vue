<template>
    <div class="container-inicio-sesion">
        <div class="container-form-login">
            <div class="form-login">
                <div class="header-login">
                    <button @click="$router.push({name: 'home'})" style="border: none; background-color:transparent; ">
                        <img src="@/assets/icons/iconHome.svg">
                        Inicio
                    </button>
                    <button @click="$router.push({name: 'home'})" style="border:none; background-color:transparent;">
                        <img src="@/assets/icons/logo.svg">
                    </button >
                    <div style="padding: 0px 2rem"></div>
                </div>
                <form action="" class="form-hmac">
                    <div class="container-input">
                        <img src="@/assets/icons/iconUser.svg">
                        <input type="text" style="flex: 1 0 0%" placeholder="Correo electrónico">
                    </div>
                    <div class="container-input">
                        <img src="@/assets/icons/numDocumento.svg">
                        <input type="text" style="flex: 1 0 0%" placeholder="Contraseña">
                    </div>
                    <div style="display: flex; padding-top: 1rem;">
                        <button class="btn-primario">
                            INGRESAR
                        </button>
                    </div>
                    <p style="text-align: center; margin-top: 1rem; margin-bottom: 0;">¿Olvidaste tu contraseña?</p>
                </form>
            </div>
            <div class="container-change-page">
                <p style="margin-bottom: 0; padding-right: .4rem;">¿No tiene una cuenta?</p>
                <button class="tag" @click="$router.push({name: 'Registrarse'})">Crear una</button>
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
</script>
