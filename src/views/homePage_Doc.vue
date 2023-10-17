<template>
    <div>
        <nav-bar/>
        <img src="@/assets/homePageLogo.svg" style = "width: 100%">
        <div class="container-page">
            <div class="container-sub-title">
                <span class="line-subtitle"></span>
                <div class="content-cards-historial" style="background-color:#EBE8E8;">
                    <button class="container-cards-info" style="border:none; background-color:transparent;" @click="$router.push({name: 'HistorialDoctor'})">
                        <img src="@/assets/icons/historialMedico.svg" class="img-historial">
                        <h2 class="title-cards-historial">
                            Historial 
                            Medico
                        </h2>
                    </button>
                </div>
                <div class="content-cards-cita" style="background-color:#EBE8E8;">
                    <button class="subtitle-catalogo--left" style="border:none; background-color:transparent;" @click="$router.push({name: 'CitaVirtualDoctor'})">
                        <img src="@/assets/icons/citaImg.svg" class="img-cita">
                        <h2 class="title-cards-cita">
                            Cita Virtual
                        </h2>
                    </button>
                </div>
                <div class="content-cards-recetas" style="background-color:#EBE8E8;">
                    <button style="border:none; background-color:transparent;" @click="$router.push({name: 'RecetasRemicionesDoctor'})">
                        <img src="@/assets/icons/recetasImg.svg" class="img-recetas">
                        <h2 class="title-cards-remi">
                            Recetas / Remisiones
                        </h2>
                    </button>
                </div>
            </div>   
        </div>
    </div>
</template>
<script>
import navBar from '@/components/navBar_Doctor.vue'
export default {
    name: 'HomeDoc',
    components: {
        navBar
    }
}
</script>
<style>
.container-sub-title{
    position: relative;
    display: flex;
    margin-bottom: 2.5rem;
    margin-top: 10rem;
}
.line-subtitle {
    position: absolute;
    left: 0;
    top: 50%;
    width: 40%;
    height: 5px;
    background-color: rgb(53, 158, 53);
    transform: translateY(-60%);
    margin-left:3rem;
}
.subtitle-catalogo {
    color: rgb(53, 158, 53);
    position: relative;
    text-align: end;
    background-color: white;
    padding-right: 3rem;
    padding-left: 3rem;
    font-family: 'Amaranth', sans-serif;
    font-size: 45px;
}
.subtitle-catalogo--left {
    margin-left: auto;
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
    top:-80px;
    left:45%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 15%;
    justify-content: center;
    text-decoration: none;
    color: black;
    background-color: #F6F6F6;
    padding: 1.2rem;
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
    top:-80px;
    left:63%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 15%;
    justify-content: center;
    text-decoration: none;
    color: black;
    background-color: #F6F6F6;
    padding-top: 1.8rem;
    padding-left: 1.8rem;
    padding-right: 1.8rem;
    padding-bottom: 1.2rem;
    border-radius: 40px;
}
.img-cita{
    margin-bottom:2rem;
    width:30%;
    margin-left:2rem;
    margin-right:4rem;
}
.content-cards-recetas{
    position:absolute;
    top:-80px;
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
    padding-bottom:-1rem ;
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
.title-cards-cita{
    padding-right:2rem;
}

</style>