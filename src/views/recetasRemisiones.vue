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
                <button style="border:none; background-color:transparent;" @click="$router.push({name: 'HistorialMedico'})">
                    <img src="@/assets/icons/historialMedico.svg" class="img-historial">
                    <h2 class="title-cards">
                        Historial 
                        Médico
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
            <div class="content-cards-recetas-recetas" style="background-color:#53A920;">
                <button style="border:none; background-color:transparent;" @click="$router.push({name: 'RecetasRemisiones'})" >
                    <img src="@/assets/icons/recetasImg.svg" class="img-recetas">
                    <h2 class="title-cards-remi">
                        Recetas / Remisiones
                    </h2>
                </button>
            </div>

        </div>
        <div class="container-cita-content">
            <div class="content-recetas-page">
                <button class="boton-recetas" style="background-color:#53A920;" >
                    <h2 clas="text-recetas-remi">
                        Recetas Médicas
                    </h2>
                </button>
                <button class=" boton-remiciones" @click="$router.push({name: 'Remiciones'})" >
                    <h2 clas="text-recetas-remi" >
                        Remisiones
                    </h2>
                </button>
        </div>
        <div class="content-cita">
                <div class="container-cita-card">
                    <img src="@/assets/icons/hmacLogo.svg" class="logo-cita-card">
                    <div>
                        <h2 class="text-historial">
                            Recetas Médicas
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
                                <td> Acetaminofén 500 mg Ibuprofeno 400 mg </td>
                                <td> 
                                    <a href="../downloads/RecetasPaciente.pdf" download>
                                        <img src="@/assets/icons/downloadImg.svg" class="download-img" > 
                                    </a> 
                                </td>
                            </tr>
                            <tr>
                                <td> Psiquiatría </td>
                                <td> 16-05-2023 </td>
                                <td> Sertralina 50 mg Quetiapina 25 mg</td>
                                <td> 
                                    <a href="../downloads/RecetasPaciente.pdf" download>
                                        <img src="@/assets/icons/downloadImg.svg" class="download-img" > 
                                    </a> 
                                </td>
                            </tr>
                            <tr>
                                <td> Medicina General </td>
                                <td> 7-10-2022 </td>
                                <td> Albendazol 200 mg Mebendazol 100 mg </td>
                                <td>
                                    <a href="../downloads/RecetasPaciente.pdf" download>
                                        <img src="@/assets/icons/downloadImg.svg" class="download-img" > 
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td> Odontologia </td>
                                <td> 23-04-2022 </td>
                                <td> Sertralina 100 mg Respirodona 2 mg Quetiapina 100 mg</td>
                                <td>
                                    <a href="../downloads/RecetasPaciente.pdf" download>
                                        <img src="@/assets/icons/downloadImg.svg" class="download-img" > 
                                    </a> 
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
import navBar from '@/components/navBar_Login.vue'
export default {
    name: 'RecetasRemisiones',
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
    opacity: .8;
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
    opacity: .8;
}
.img-cita{
    margin-bottom:2rem;
    width:30%;
    margin-left:1rem;
    margin-right:1rem;
}
.content-cards-recetas-recetas{
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
  margin-top: 2rem;
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
    padding-left:4.8rem;
    padding-top:1rem;

}
.content-recetas-page{
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
.boton-recetas{
    padding-top:1rem;
    padding-bottom:1rem;
    padding-right:4rem;
    padding-left:4rem;
    border-radius:40px;
    margin:1rem;
    border:none;
}
.boton-remiciones{
    padding-top:1rem;
    padding-bottom:1rem;
    padding-right:4rem;
    padding-left:4rem;
    border-radius:40px;
    margin:1rem;
    border:none;
}
.text-recetas-remi{
    font-family: 'Inter', sans-serif;
    font-weight:bold;
    padding:2rem;
}
</style>