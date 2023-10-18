<template>
    
    <div>
        <nav-bar/>
        <div class="container-header-leydetransparencia">
            <img src="@/assets/homePageLogo.svg" style = "width: 100% " >
            <div class="content-header-historial">
                    <h2 class="title-header">
                        Hola,
                        <br>
                        Daniel Felipe Villamizar Hernandez
                    </h2>
                </div>
                <div class="content-cards-historial"  @click="$router.push({name: 'HistorialMedico'})">
                    <button style="border:none; background-color:transparent;">
                        <img src="@/assets/icons/historialMedico.svg" class="img-historial">
                        <h2 class="title-cards">
                            Historial 
                            Medico
                        </h2>
                    </button>
                </div>
                <div class="content-cards-cita">
                    <button style="border:none; background-color:transparent;" @click="$router.push({name: 'CitaVirtual'})">
                        <img src="@/assets/icons/citaImg.svg" class="img-cita">
                        <h2 class="title-cards">
                            Cita Virtual
                        </h2>
                    </button>
                </div>
                <div class="content-cards-recetas">
                    <button style="border:none; background-color:transparent;" @click="$router.push({name: 'RecetasRemisiones'})">
                        <img src="@/assets/icons/recetasImg.svg" class="img-recetas">
                        <h2 class="title-cards-remi">
                            Recetas / Remisiones
                        </h2>
                    </button>
                </div>
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
import navBar from '@/components/navBar_Login.vue'
export default {
    name: 'homePage_Usuario',
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
.container-header-leydetransparencia{
    width: 100%;
    position: relative;
}
.content-header-historial{
    position:absolute;
    top:140px;
    left:60px;
    display: flex;
    flex-wrap: wrap;
    align-items: left;
    width: 35%;
    justify-content: left;
    text-decoration: none;
    color: black;
    background-color: #F6F6F6 ;
    padding: 2.5rem;
    border-radius: 40px;
    opacity: .8;
}
.content-cards-cita{
    position:absolute;
    top:140px;
    left:63%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 15%;
    justify-content: center;
    text-decoration: none;
    color: black;
    background-color: #F6F6F6;
    padding: 1.5rem;
    border-radius: 40px;
    opacity: .8;
}
.img-cita{
    margin-bottom:2rem;
    width:30%;
    margin-left:1rem;
    margin-right:1rem;
}
.content-cards-recetas{
    position:absolute;
    top:140px;
    left:81%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 15%;
    justify-content: center;
    text-decoration: none;
    color: black;
    background-color: #F6F6F6;
    padding-top:.5rem;
    padding-left:1rem;
    padding-right:1rem;
    border-radius: 40px;
    opacity: .8;
}
.img-recetas{
    margin-bottom:.4rem;
    width:30%;
    margin-left:.5 rem;
    margin-right:.5 rem;
}
.content-cards-historial{
    position:absolute;
    top:140px;
    left:45%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 15%;
    justify-content: center;
    text-decoration: none;
    color: black;
    background-color: #F6F6F6;
    padding: 1rem;
    border-radius: 40px;
    opacity: .8;
}
.img-historial{
    margin-bottom:2rem;
    width:30%;
    margin-left:auto;
    margin-right:auto;
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
    margin-bottom: 1rem;
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
.title-header{
    color:black;
    position: relative;

}

    
</style>