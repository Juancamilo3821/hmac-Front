<template>
    <div>
        <nav-bar/>
        <div class="container-header-leytransparencia">
            <img src="@/assets/homePageLogo.svg" class="img-historial" style = "width: 100%">
            <div class="content-cards-historial" >
                <button style="border:none; background-color:transparent;" @click="$router.push({name: 'HistorialDoctor'})">
                    <img src="@/assets/icons/historialMedico.svg" class="img-historial">
                    <h2 class="title-cards">
                        Historial 
                        Medico
                    </h2>
                </button>
            </div>
            <div class="content-cards-cita" style="background-color:#53A920;">
                <button style="border:none; background-color:transparent;" >
                    <img src="@/assets/icons/citaImg.svg" class="img-cita">
                    <h2 class="title-cards">
                        Cita Virtual
                    </h2>
                </button>
            </div>
            <div class="content-cards-recetas">
                <button style="border:none; background-color:transparent;" @click="$router.push({name: 'RecetasRemicionesDoctor'})">
                    <img src="@/assets/icons/recetasImg.svg" class="img-recetas">
                    <h2 class="title-cards-remi">
                        Recetas / Remisiones
                    </h2>
                </button>
            </div>
        </div>  
         <div class="container-cita-content">
            <div class="content-cita">
                <div class="container-cita-card">
                    <img src="@/assets/icons/hmacLogo.svg" class="logo-cita-card">
                    <div>
                        <h2 class="text-historial">
                            Citas en Cola
                        </h2>
                    </div>
                    <div class="container-input" style="margin-right: auto; width:40%; margin-bottom:-1.5rem; margin-top:2rem;" >
                        <img src="@/assets/icons/searchIcon.svg">
                        <input type="text" style="flex: 1 0 0%" placeholder="Buscar">
                    </div>
                    <div class="container-historial">
                        <table class="table-historial">
                            <tr class="th-class">
                                <th> Nombre</th>
                                <th> Tipo de documento</th>
                                <th> Documento</th>
                                <th> Hora </th>
                            </tr>
                            <tr>
                                <td> Roberto Hernández Zarate</td>
                                <td> Cedula de Ciudadania </td>
                                <td> 100538374 </td>
                                <td> 8:00 am </td>
                        
                            </tr>
                            <tr>
                                <td> Sofia Martina Mogollón </td>
                                <td> Cedula de Ciudadania </td>
                                <td> 1005369876 </td>
                                <td> 8:30 am </td>
                            </tr>
                            <tr>
                                <td> Valentina Sepúlveda Villamizar  </td>
                                <td> Cedula de Ciudadania </td>
                                <td> 1005000452 </td>
                                <td> 9:00 am </td>
                            </tr>
                            <tr>
                                <td> Ricardo Alfonzo Ramirez </td>
                                <td> Cedula de Ciudadanía </td>
                                <td> 1007239543</td>
                                <td> 9:30 am </td>
                            </tr>
                            <tr>
                                <td> José Luis Cardozo  </td>
                                <td> Cedula de Ciudadanía </td>
                                <td> 1008369367</td>
                                <td> 10:00 am </td>
                            </tr>
                            <tr>
                                <td> Silvia Maria Romera  </td>
                                <td> Cedula de Ciudadanía </td>
                                <td> 10545657</td>
                                <td> 10:30 am </td>
                            </tr>
                            <tr>
                                <td> Adrián Fernandez  </td>
                                <td> Cedula de Ciudadanía </td>
                                <td> 75076432</td>
                                <td> 11:00 am </td>
                            </tr>
                            <tr>
                                <td> Candelaria Beltran </td>
                                <td> Cedula de Ciudadanía </td>
                                <td> 10535084 </td>
                                <td> 11:30 am </td>
                            </tr>
                            <tr>
                                <td> Jacinto Guevara </td>
                                <td> Cedula de Ciudadanía </td>
                                <td> 10529631</td>
                                <td> 12:00 am </td>
                            </tr>
                            <tr>
                                <td> Jose Francisco Ferreira </td>
                                <td> Cedula de Ciudadanía </td>
                                <td> 10545657</td>
                                <td> 12:30 am </td>
                            </tr>
                            <tr>
                                <td> Álvaro Padilla  </td>
                                <td> Cedula de Ciudadanía </td>
                                <td> 10536636</td>
                                <td> 1:00 pm </td>
                            </tr>
                            <tr>
                                <td> Manuel Jesus Megias  </td>
                                <td> Cedula de Ciudadanía </td>
                                <td> 10542190 </td>
                                <td> 1:30 pm </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navBar from '@/components/navBar_Doctor.vue'
export default {
    name: 'CitaVirtualDoctor',
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

</style>