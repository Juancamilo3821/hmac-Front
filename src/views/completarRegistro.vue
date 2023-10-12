<template>
    <div class="container-inicio-sesion">
        <div class="container-form-login">
            <div class="form-login">
                <div class="header-login">
                    <button @click="$router.push({name: 'home'})" style="border: none; background-color:transparent;">
                        <img src="@/assets/icons/iconHome.svg">
                        Inicio
                    </button>   
                    <button @click="$router.push({name: 'home'})" style="border:none; background-color:transparent;">
                        <img src="@/assets/icons/logo.svg">
                    </button >
                    <div style="padding: 0px 2rem"></div>
                </div>
                <form action="" class="form-hmac">
                    <div style="display: flex; width: 100%;">
                        <div class="container-input" style="margin-right: .5rem;">
                            <input type="text" style="flex: 1 0 0%" placeholder="Nombre">
                        </div>
                        <div class="container-input" style="margin-left: .5rem;">
                            <input type="text" style="flex: 1 0 0%" placeholder="Apellido">
                        </div>
                    </div>
                    <div class="container-input-identidad">
                        <div class="opciones-identidad">
                            <select placeholder="Identidad">
                                <option value="CC" title="Cédula de ciudadania">CC</option>
                                <option value="TI" title="Tarjeta de identidad">TI</option>
                                <option value="CE" title="Cédula de extranjeria">CE </option>
                                <option value="PAS" title="Pasaporte">PAS</option>
                            </select>
                        </div>
                        <div class="select-identidad">
                            <div class="content-identidad">
                                <img src="@/assets/icons/docImg.svg">
                                <input type="text" style="flex: 1 0 0%" placeholder="N° de Documento">
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; width: 100%;">
                        <div class="container-input" style="margin-right: .5rem;">
                            <input type="text" style="flex: 1 0 0%" placeholder="Fecha de Nacimiento">
                        </div>
                        <div class="container-input" style="margin-left: .3rem;">
                            <input type="text" style="flex: 1 0 0%" placeholder="Lugar de Nacimiento">
                        </div>
                    </div>
                    <div class="container-input-identidad">
                        <div class="opciones-identidad">
                            <select placeholder="Identidad">
                                <option value="RH" title="Grupo Sanguineo">RH</option>
                                <option value="A+" title="A Positivo">A+</option>
                                <option value="O+" title="O Positivo">O+</option>
                                <option value="B+" title="B Positivo">B+</option>
                                <option value="AB+" title="AB Positivo">AB+</option>
                                <option value="A-" title="A Negativo">A-</option>
                                <option value="O-" title="O Negativo">O-</option>
                                <option value="B-" title="B Negativo">B-</option>
                                <option value="AB-" title="AB Negativo">AB-</option>
                            </select>
                        </div>
                        <div class="genero-identidad">
                            <text placeholder="Identidad" style="flex: 1 0 0%">
                                Genero :
                            </text>
                        </div>
                        <div class="opciones-identidad">
                            <select placeholder="Identidad">
                                <option value="M" title="Masculino">M</option>
                                <option value="F" title="Femenino">F</option>
                                <option value="PF" title="Prefiero no decirlo">Prefiero no decirlo</option>
                            </select>
                        </div>
                    </div>
                    <div class="container-input">
                        <input type="text" style="flex: 1 0 0%" placeholder="Dirección">
                    </div>
                    <div style="display: flex; width: 100%;">
                        <div class="container-input" style="margin-right: .5rem;">
                            <input type="text" style="flex: 1 0 0%" placeholder="Teléfono Móvil">
                        </div>
                        <div class="container-input" style="margin-left: .5rem;">
                            <input type="text" style="flex: 1 0 0%" placeholder="Teléfono Fijo">
                        </div>
                    </div>
                    <div class="container-input">
                        <input type="text" style="flex: 1 0 0%" placeholder="Estado Civil">
                    </div>
                    <div style="display: flex; width: 100%;">
                        <div class="container-input" style="margin-right: .5rem;">
                            <input type="text" style="flex: 1 0 0%" placeholder="Departamento">
                        </div>
                        <div class="container-input" style="margin-left: .5rem;">
                            <input type="text" style="flex: 1 0 0%" placeholder="Ciudad">
                        </div>
                    </div>
                    <div style="display: flex; padding-top: 1rem;">
                        <button class="btn-primario" @click="$router.push({name: 'HistorialMedico'})">
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
</script>
<style>
.container-input-identidad{
    background-color: #d9d9d9;
    padding: .4rem 1rem;
    border-radius: 30px;
    display: flex;
    margin-bottom: 1.5rem;
    min-width: calc(50% - 2rem);
    flex-wrap: wrap;
}
.opciones-identidad{
    align-items:right;
    width: 30%;
    overflow: hidden;
    padding: 0 .5rem;
    border-right:1px solid #b5b5b5;
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
    display:flex;
    width: 100%;
}
.content-identidad input {
    width: 100%;
}
.genero-identidad{
    align-items:right;
    width: 26%;
    overflow: hidden;
    padding: .3rem;
    padding-left: 1rem;
}
</style>