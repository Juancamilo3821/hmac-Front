<template>
    <div>
        <nav-bar/>
         <div class="container-cita-content">
            <div class="content-cita">
                <div class="container-cita-card">
                    <img src="@/assets/icons/hmacLogo.svg" class="logo-cita-card">
                    <h2 class="title-cita">
                        Ingresa los siguientes datos para agendar tu cita:
                    </h2>
                    <p class="text-cita">
                        Los campos señalados con asterisco (*) son obligatorios, revisa muy bien los datos antes de finalizar, recuerda que los datos que estás registrando son los que HMAC tomará para tramitar tu solicitud.
                    </p>
                    <div class="content-item-cita">
                        <p class="title-item-cita">
                            <img src="@/assets/icons/tipoDocumento.svg">
                            Tipo de documento: *
                        </p>
                        <p class="title-item-cita"> 
                            <img src="@/assets/icons/numDocumento.svg">
                            Número de documento: *
                        </p>
                    </div>
                    <button class="button-item-cita">
                        INGRESAR
                    </button>
                    <p class="text-post-button"> 
                            Olvidaste tu contraseña?
                    </p>
                </div>
            </div>
        </div>
        <div class="content-extra-cita">
            <img src="@/assets/icons/extraCita.svg">
            <p class="extra-cita">
                Recuerda que los trámites de Agendamiento son totalmente gratuitos.
            </p>
        </div>
    </div>
</template>
<script>
import navBar from '@/components/navBar.vue'
export default {
    name: 'CitaVirtual',
    components: {
        navBar
    }
}
</script>
<style>
.content-cita{  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;  
  background-color: #F6F6F6;
  border-radius: 100px;
  padding: 1rem;
  margin-top: 12rem;
  margin-right: 6rem;
  margin-left: 6rem;
}
.logo-cita-card{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-left:auto;
  margin-right:auto;
}
.title-cita{
    text-align:center;
    padding: 1.5rem;
    font-family: 'Inter', sans-serif;
    font-weight:bold;
    font-size:37px
}
.text-cita{
    text-align:center;
    font-family: 'Inter', sans-serif;
    font-weight:bold;

}
.content-item-cita{
  width: 100%;
  min-height: 115px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.title-item-cita{
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    width:30%;
    justify-content:left;
    text-decoration: none;
    color: black;
    background-color: #D9D9D9;
    padding: 1rem;
    border-radius: 40px;
    margin-left: 100px;
    margin-right:100px;
    font-family: 'Inter', sans-serif;
    font-weight:bold;
}
.button-item-cita{
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    width:12%;
    justify-content:center;
    text-decoration: none;
    color: black;
    background-color: #53A920;
    padding: .8rem;
    border-radius: 40px;
    margin-left: auto;
    margin-right:auto;
    border:none;
    font-family: 'Inter', sans-serif;
    font-weight:bold;
}
.text-post-button{
    text-align:center;
    margin:.5rem;
    font-family: 'Inter', sans-serif;
    font-weight:bold;
    

}
.content-extra-cita{
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content:center;
    width:60%;
    text-decoration: none;
    color: black;
    background-color: #F6F6F6;
    padding: .5rem;
    border-radius: 40px;
    margin-left:23rem;
    margin-top:6rem;
    margin-right:23rem;

}

</style>