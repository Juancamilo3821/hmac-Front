<template>
    <div>
        <nav-bar/>
        <img src="@/assets/homePageLogo.svg" style = "width: 100%">

        <div class="content-home-page">
            <button class="boton-nav-login">
                MEDIOS DE PAGO
                <img src="@/assets/icons/payments.svg">
            </button>
            <button class="boton-nav-login" @click="$router.push({name: 'CitaVirtual'})">
                CITA VIRTUAL
                <img src="@/assets/icons/appointment.svg">
            </button>
            <button class="boton-nav-login">
                DIRECTORIO MEDICO
                <img src="@/assets/icons/directory.svg">
            </button>
        </div>

        <div class="content-sub-home-page">
            <div class="item-home"> 
                <img src="@/assets/painManagement.svg" class="img-item-home">
                <div class="content-item-home">
                    <p class="title-item-home"> 
                        Manejo del dolor
                    </p>
                    <p class="text-item-home">
                        Manejamos el dolor corporal a través de diferentes tratamientos que permiten la estabilidad del paciente en general
                    </p>
                    <button class="button-item-home" @click="$router.push({name:'CatalogodeServicios'})">
                        Mas informacion
                        <img src="@/assets/icons/row-right.svg">
                    </button>
                </div>

            </div>
            <div class="item-home"> 
                <img src="@/assets/img-appointment.svg" class="img-item-home">
                <div class="content-item-home">
                    <p class="title-item-home"> 
                        Medicina Preventiva
                    </p>
                    <p class="text-item-home">
                        Utilizamos componentes autólogos, que promueven la curación y reparación de males en el cuerpo de paciente.
                    </p>
                    <button class="button-item-home" @click="$router.push({name:'CatalogodeServicios'})">
                        Mas informacion
                        <img src="@/assets/icons/row-right.svg">
                    </button>
                </div>

            </div>
            <div class="item-home"> 
                <img src="@/assets/spa.svg" class="img-item-home">
                <div class="content-item-home">
                    <p class="title-item-home"> 
                        SPA Terapeutico
                    </p>
                    <p class="text-item-home">
                        Todo un mundo de sensaciones y experiencias para que el cuerpo y la mente logren un estado de plenitud y confort de la mano de expertos en salud.
                    </p>
                    <button class="button-item-home" @click="$router.push({name:'CatalogodeServicios'})">
                        Mas informacion
                        <img src="@/assets/icons/row-right.svg">
                    </button>
                </div>

            </div>

        </div>

        
        

    </div>
</template>
<script>
import navBar from '@/components/navBar.vue'
export default {
    name: 'homePage',
    components: {
        navBar
    }
}
</script>
<style>
.content-home-page {
  width: 100%;
  min-height: 115px;
  background-color: #ffffff;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.content-home-page .boton-nav-login{
  margin-left:80px;
  margin-right:80px;
}
.content-sub-home-page {
  width: 100%;
  min-height: 115px;
  background-color: #ffffff;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-right: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  border-radius: 40px;
  overflow: hidden;

}
.item-home {
  margin-right: 4rem;
  margin-left: 1.5rem;
  text-decoration: none;
  color: black;
  background-color: #F6F6F6;
  padding-bottom: 10px;
  border-radius: 40px;
  overflow:hidden;
  max-width: 350px;
}

.img-item-home {
  border-radius: 40px;
  width: 100%;
}
.content-item-home{
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;

}
.title-item-home{
  text-align: right;
  width: 100%;
  font-size:20px;
  font-weight:bold;
}
.button-item-home{
  text-align: right;
  margin-left: auto;
  border:none;
  background-color:transparent;
}
.text-item-home{
  width: 100%;
  text-align:center;

}

    
</style>