<template>
    <div>
        <nav-bar/>
        <div class="container-header-leytransparencia">
            <img src="@/assets/homePageLogo.svg" class="img-historial" style = "width: 100%">
            <div class="content-header-historial">
                <h2 class="title-header">
                    Hola,
                    <br>
                    Daniel Felipe Villamizar Hernandez
                </h2>
            </div>
            <div class="content-cards-historial" >
                <button style="border:none; background-color:transparent;" @click="$router.push({name: 'HistorialMedico'})">
                    <img src="@/assets/icons/historialMedico.svg" class="img-historial">
                    <h2 class="title-cards">
                        Historial 
                        Medico
                    </h2>
                </button>
            </div>
            <div class="content-cards-cita" style="background-color:#53A920;">
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
         <div class="container-cita-content" style="margin-bottom:6rem;">
            <div class="content-cita">
                <div class="container-cita-card">
                    <img src="@/assets/icons/hmacLogo.svg" class="logo-cita-card">
                    <h2 class="title-cita" style="margin-top:1rem;">
                        INGRESA EL DIA Y LA FECHA DE MEJOR DISPONIBILIDAD
                    </h2>
                    <div class="container-input-fecha" style="width:100px; margin-left:18rem; justify-content:center; margin-top:1rem;">
                        <div class="opciones-fecha" style="padding-top:2px;">
                            <select placeholder="Identidad" style="border:none; background-color:transparent; padding-top:2px;">
                                <option value="8:00 am" title="8 de la mañana"> 8:00 am</option>
                                <option value="9:45 am" title="9:45 de la mañana"> 9:45 am</option>
                                <option value="11:30 am" title="11:30 de la mañana"> 11:30 am</option>
                                <option value="2:50 am" title="2:50 de la tarde"> 2:50 pm </option>
                                <option value="3:00 am" title="3:00 de la tarde"> 3:00 pm</option>
                                <option value="4:30 am" title="4:30 de la tarde"> 4:30 pm</option>
                            </select>
                        </div>
                        <div class="select-fecha">
                            <div class="content-fecha" style="padding-left:1rem;">
                                <input type="date">
                            </div>
                        </div>
                        
                    </div>
                    <button class="button-item-cita"  @click="$router.push({name: 'AgendarCita'})">
                        AGENDAR
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from '@/components/navBar_Login.vue'
export default {
    name: 'AgendarCita',
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
.img-historial{
    width:100%;
}
.container-header-leytransparencia{
    width:100%;
    position:relative;
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
    background-color: #F6F6F6;
    padding: 2.5rem;
    border-radius: 40px;
    
}
.text-nav{
    margin-bottom:2rem;
}
.title-header{
    margin-bottom:1rem;
    font-family: 'Inter', sans-serif;
    color:#000000;
    font-weight:bold;
}
.text-header{
    max-width:500px;
    font-family: 'Inter', sans-serif;
    font-weight:bold;
}
.container-header-leytransparencia{
    width:100%;
    position:relative;
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
}
.img-historial{
    margin-bottom:2rem;
    width:30%;
    margin-left:auto;
    margin-right:auto;
}
.title-cards{
    font-family: 'Inter', sans-serif;
    color:#000000;
    font-weight:bold;
    align-text:center;
    margin-left:auto;
    margin-right:auto;
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
}
.img-recetas{
    margin-bottom:.4rem;
    width:30%;
    margin-left:.5 rem;
    margin-right:.5 rem;
}
.title-cards-remi{
    font-family: 'Inter', sans-serif;
    color:#000000;
    font-weight:bold;
    text-align:center;
    margin-left:1rem;
    margin-right:1rem;

}
.content-cita{  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;  
  background-color: #F6F6F6;
  border-radius: 100px;
  padding: 1rem;
  margin-top: 6rem;
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
.text-historial{
    font-family: 'Inter', sans-serif;
    color:#000000;
    font-weight:bold;
    text-align:center;
    padding-top:2.5rem;
}
.container-historial{
    background-color:#D9D9D9;
    margin-bottom:4rem;
}
.table-historial{
    
    border:1px solid #000; 
    margin-top:2rem;
}
.tr, td{
    width: 25%;
    text-align: left;
    vertical-align: top;
    border: 1px solid #000;
    border-collapse:collapse;
    padding:1rem;
}
.th-class{
    text-align: left;
    vertical-align: top;
    border: 1px solid #000;
    border-collapse:collapse;
    padding:1rem;

}
.download-img{
    padding-left:5.5rem;
    padding-top:1rem;

}
.container-input-fecha{
    background-color: #d9d9d9;
    padding: .4rem 1rem;
    border-radius: 30px;
    display: flex;
    margin-bottom: 1.5rem;
    min-width: calc(50% - 2rem);
    flex-wrap: wrap;
}
.opciones-fecha{
    align-items:right;
    width: 30%;
    overflow: hidden;
    padding: 0 .5rem;
    border-right:1px solid #b5b5b5;
}

</style>