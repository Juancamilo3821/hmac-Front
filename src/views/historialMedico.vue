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
            <div class="content-cards-historial">
                <img src="@/assets/icons/historialMedico.svg" class="img-historial">
                <h2 class="title-cards">
                    Historial 
                    Medico
                </h2>
            </div>
            <div class="content-cards-cita">
                <img src="@/assets/icons/citaImg.svg" class="img-cita">
                <h2 class="title-cards">
                    Cita Virtual
                </h2>
            </div>
            <div class="content-cards-recetas">
                <img src="@/assets/icons/recetasImg.svg" class="img-recetas">
                <h2 class="title-cards-remi">
                    Recetas / Remisiones
                </h2>
            </div>

        </div>
        <div class="container-cita-content">
        <div class="content-cita">
                <div class="container-cita-card">
                    <img src="@/assets/icons/hmacLogo.svg" class="logo-cita-card">
                    <div>
                        <h2 class="text-historial">
                            Historial Medico
                        </h2>
                    </div>
                    <div class="container-historial">
                        <table class="table-historial">
                            <tr class="th-class">
                                <th> Consulta</th>
                                <th> Fecha</th>
                                <th> Motivo Principal</th>
                                <th> Desgargar </th>
                            </tr>
                            <tr>
                                <td> Medicina General</td>
                                <td> 10-09-2023 </td>
                                <td> Fuerte dolor de estomago, acompañadode nauseas y mareo </td>
                                <td> 
                                    <button style="background-color:transparent; border:none;" > 
                                        <img src="@/assets/icons/downloadImg.svg" class="download-img"> 
                                    </button> 
                                </td>
                            </tr>
                            <tr>
                                <td> Psiquiatría </td>
                                <td> 16-05-2023 </td>
                                <td> Complejidad a la hora de concentrarse y encontrar la manera de realizarse </td>
                                <td> 
                                    <button style="background-color:transparent; border:none;" > 
                                        <img src="@/assets/icons/downloadImg.svg" class="download-img"> 
                                    </button> 
                                </td>
                            </tr>
                            <tr>
                                <td> Medicina General </td>
                                <td> 7-10-2022 </td>
                                <td> Quiere ser candidato para cirugía de Vasectomía </td>
                                <td>
                                    <button style="background-color:transparent; border:none;" > 
                                        <img src="@/assets/icons/downloadImg.svg" class="download-img"> 
                                    </button> 
                                </td>
                            </tr>
                            <tr>
                                <td> Odontologia </td>
                                <td> 23-04-2022 </td>
                                <td> Inquietud causada por las cordales</td>
                                <td>
                                    <button style="background-color:transparent; border:none;" > 
                                        <img src="@/assets/icons/downloadImg.svg" class="download-img"> 
                                    </button> 
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from '@/components/navBar.vue'
export default {
    name: 'HistorialMedico',
    components: {
        navBar
    }
}
</script>
<style>
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
    padding: 1rem;
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
 
</style>