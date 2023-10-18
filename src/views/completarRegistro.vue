<template>
    <div class="container-inicio-sesion">
        <div class="container-form-login">
            <div class="form-login">
                <div class="header-login">
                    <button @click="$router.push({ name: 'home' })" style="border: none; background-color:transparent;">
                        <img src="@/assets/icons/iconHome.svg">
                        Inicio
                    </button>
                    <button @click="$router.push({ name: 'home' })" style="border:none; background-color:transparent;">
                        <img src="@/assets/icons/logo.svg">
                    </button>
                    <div style="padding: 0px 2rem"></div>
                </div>
                <form action="" class="form-hmac">
                    <div class="container-input" style="margin-right: .5rem;">
                        <input v-model="patientData.NOMBRE" type="text" style="flex: 1 0 0%" placeholder="Nombre Completo"
                            required>
                    </div>
                    <div class="container-input-identidad">
                        <div class="opciones-identidad">
                            <select v-model="patientData.TIPO_DOCUMENTO_ID_TIPODOC" placeholder="Tipo de Doc." required>
                                <option value="" disabled selected>Tipo de documento</option>
                                <option value="1" title="Cédula de ciudadania">CC</option>
                                <option value="2" title="Tarjeta de identidad">TI</option>
                                <option value="3" title="Cédula de extranjeria">CE </option>
                                <option value="4" title="Pasaporte">PAS</option>
                            </select>
                        </div>
                        <div class="select-identidad">
                            <div class="content-identidad">
                                <img src="@/assets/icons/docImg.svg">
                                <input v-model="patientData.ID" type="text" style="flex: 1 0 0%"
                                    placeholder="N° de Documento" required>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; width: 100%;">
                        <div class="container-input" style="margin-right: .5rem;">
                            <input v-model="patientData.FECHA_NAC" type="date" placeholder="Fecha de Nacimiento" required>
                        </div>
                        <div class="container-input" style="margin-left: .3rem;">
                            <input v-model="patientData.LUGAR_NAC" type="text" style="flex: 1 0 0%"
                                placeholder="Ciudad de Nacimiento" required>
                        </div>
                    </div>
                    <div class="container-input-identidad">
                        <div class="opciones-identidad">
                            <select v-model="patientData.RH" placeholder="Identidad" required>
                                <option value="" disabled selected>RH</option>
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
                            <select v-model="patientData.GENERO" placeholder="Identidad" required>
                                <option value="" disabled selected>Selecciona</option>
                                <option value="0" title="Hombre">H</option>
                                <option value="1" title="Mujer">M</option>
                            </select>
                        </div>
                    </div>
                    <div class="container-input">
                        <input v-model="patientData.DIRECCION" type="text" style="flex: 1 0 0%" placeholder="Dirección"
                            required>
                    </div>
                    <div style="display: flex; width: 100%;">
                        <div class="container-input" style="margin-right: .5rem;">
                            <input v-model="patientData.TELEFONO_MOVIL" type="text" style="flex: 1 0 0%"
                                placeholder="Teléfono Móvil" required>
                        </div>
                        <div class="container-input" style="margin-left: .5rem;">
                            <input v-model="patientData.TELEFONO_CASA" type="text" style="flex: 1 0 0%"
                                placeholder="Teléfono Fijo (Opc)">
                        </div>
                    </div>
                    <div class="container-input">
                        <input v-model="patientData.ESTADO_CIVIL" type="text" style="flex: 1 0 0%"
                            placeholder="Estado Civil" required>
                    </div>
                    <div style="display: flex; width: 100%;">
                        <div class="container-input" style="margin-right: .5rem;">
                            <input v-model="patientData.DEPARTAMENTO" type="text" style="flex: 1 0 0%"
                                placeholder="Departamento" required>
                        </div>
                        <div class="container-input" style="margin-left: .5rem;">
                            <input v-model="patientData.MUNICIPIO" type="text" style="flex: 1 0 0%" placeholder="Ciudad"
                                required>
                        </div>
                    </div>
                    <div style="display: flex; padding-top: 1rem;">
                        <button class="btn-primario" @click="$router.push({name: 'HomeUsuario'})">
                            CREAR CUENTA
                        </button>
                    </div>
                </form>
            </div>
            <div class="container-change-page">
                <p style="margin-bottom: 0; padding-right: .4rem;">Ya tienes una cuenta?</p>
                <button class="tag" @click="$router.push({ name: 'IniciarSesion', params: ''})">Iniciar sesión</button>
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
            patientData: {
                ID: "",
                TIPO_DOCUMENTO_ID_TIPODOC: "",
                NOMBRE: "",
                FECHA_NAC: "",
                LUGAR_NAC: "",
                RH: "",
                GENERO: "",
                EMAIL: "",
                DIRECCION: "",
                TELEFONO_MOVIL: "",
                TELEFONO_CASA: "",
                ESTADO_CIVIL: "",
                MUNICIPIO: "",
                DEPARTAMENTO: "",
                USUARIO_idUsuario: ""
            },
            userId: null,
            correo: "",
        };
    },
    created() {
        this.userId = this.$route.params.userId;
        this.correo = this.$route.params.correo;
    },
    methods: {
        async RegistrarPaciente() {
            this.patientData.USUARIO_idUsuario = this.userId;
            this.patientData.EMAIL = this.correo;
            try {
                await axios.post('http://localhost:5000/api/regpatient', this.patientData);
                this.$router.replace({ name: 'IniciarSesion' })
            } catch (error) {
                if (error.response.status === 409) {
                    alert('El usuario ya existe con este correo. Intente nuevamente.');
                } else {
                    alert(error.response.data.message);
                }
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

.genero-identidad {
    align-items: right;
    width: 26%;
    overflow: hidden;
    padding: .3rem;
    padding-left: 1rem;
}
</style>