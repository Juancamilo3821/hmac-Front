<template>
    <div>
        <nav-bar/>
    
        <div class="container-vision-content">
            <div class="content-card">
                <div class="container-vision-card">
                    <h2 class="title-vision">VISIÓN</h2>
                    <p class="text-vision"> Ser referentes a nivel departamental en el año 2026, y nacional en el año 2030 en el uso de la medicina alterna y la medicina integrativa, siendo reconocidos por la excelencia profesional, técnica y humana de nuestros expertos asistiendo a nuestros usuarios de forma ágil, amable y segura</p>
                </div>
            </div>
            <img src="@/assets/imgVision.svg" class="img-vision">
        </div>
        <div class="container-vision-content">
            <img src="@/assets/imgMision.svg" class="img-vision">
            <div class="content-card">
                <div class="container-vision-card">
                    <h2 class="title-vision">
                        MISIÓN
                    </h2>
                    <p class="text-vision"> 
                    Crear un espacio en el que se preste servicios de salud integral buscando mejorar la calidad de vida de los pacientes mediante el uso de medicina alterna caracterizada por una alta calidad tecnocientífica, ofertando diversos servicios de terapias alternativas y complementarias, priorizando la atención a nuestros pacientes y contando con profesionales altamente cualificados.
                    </p>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import navBar from '@/components/navBar.vue'
export default {
    name: 'quienesSomos',
    components: {
        navBar
    }
}
</script>
<style>
.container-vision-content{
    display:flex;
    justify-content:right;
    width:100%;
}
.content-card{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    width:50%;
    align-items:center;
}
.container-vision-card{
    display:flex;
    flex-wrap:wrap;
    align-items: start;
    width:80%;
    justify-content:center;
    text-decoration: none;
    color: black;
    background-color: #F6F6F6;
    padding: 2rem;
    border-radius: 40px;
}
.title-vision{
    text-align: center;
    width: 100%;
    font-size:20px;
    font-weight:bold;
    font-family: 'Inria Sans', sans-serif;
    font-size: 40px;
    color: #53A920;
    margin-bottom: 1.5rem;

}
.text-vision{
    width: 100%;
    text-align:center;
    font-family: 'Inter', sans-serif;
    font-weight:bold;
    font-size:15px;

}
.img-vision{
    width:50%;
}

</style>
