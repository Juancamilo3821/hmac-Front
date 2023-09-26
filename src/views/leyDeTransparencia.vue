<template>
    <div>
        <nav-bar/>
        <div class="container-header-leytransparencia">
            <img src="@/assets/imgLeyDeTransparencia.svg" class="img-ley-transparencia">
            <div class="content-header">
                <p class="text-nav">
                    Inicio / Ley de Transparencia
                </p>
                <h1 class="title-header">
                    Ley de Transparencia EPS  
                </h1>
                <p class="text-header">
                    Ley 1712 de 2014: “Por medio de la cual se crea la Ley de Transparencia y del derecho de acceso a la Información Pública Nacional y se dictan otras disposiciones”.
                </p>
            </div>

        </div>
        <div class="content-leytransparencia">
            <p class="text-leytransparencia">
                Información de interés
            </p>
        </div>
        <div class="content-subleytransparencia">
            <p class="text-leytransparencia">
                Estructura orgánica y talento humano
            </p>
        </div>
        <div class="content-subleytransparencia">
            <p class="text-leytransparencia">
                Normatividad
            </p>
        </div>
        <div class="content-subleytransparencia">
            <p class="text-leytransparencia">
                Presupuesto
            </p>
        </div>
        <div class="content-subleytransparencia">
            <p class="text-leytransparencia">
                Planeación
            </p>
        </div>
        <div class="content-subleytransparencia">
            <p class="text-leytransparencia">
                Control
            </p>
        </div>
        <div class="content-subleytransparencia">
            <p class="text-leytransparencia">
                Contratación
            </p>
        </div>
        <div class="content-subleytransparencia">
            <p class="text-leytransparencia">
                Trámites y servicios
            </p>
        </div>
        <div class="content-subleytransparencia">
            <p class="text-leytransparencia">
                Protección de datos personales
            </p>
        </div>
    </div>
</template>
<script>
import navBar from '@/components/navBar.vue'
export default {
    name: 'leyDeTransparencia',
    components: {
        navBar
    }
}
</script>
<style>
.img-ley-transparencia{
    width:100%;
}
.container-header-leytransparencia{
    width:100%;
    position:relative;
}
.content-header{
    position:absolute;
    top:0;
    left:0;
    width:50%;
    background-color:#EEEEEC;
    height:100%;
    padding:1rem;
}
.text-nav{
    margin-bottom:2rem;
}
.title-header{
    margin-bottom:1rem;
    font-family: 'Inter', sans-serif;
    color:#53A920;
    font-weight:bold;
}
.text-header{
    max-width:500px;
    font-family: 'Inter', sans-serif;
    font-weight:bold;
}
.content-leytransparencia{
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    width:60%;
    justify-content:left;
    text-decoration: none;
    color: black;
    background-color: #D9D9D9;
    padding: 1rem;
    border-radius: 40px;
    margin-left:8rem;
    margin-top:8rem;
}
.content-subleytransparencia{
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    width:60%;
    justify-content:left;
    text-decoration: none;
    color: black;
    background-color: #D9D9D9;
    padding: 1rem;
    border-radius: 40px;
    margin-left:8rem;
    margin-top:2rem;
}
.text-leytransparencia{
    align-items:center;
    justify-content:center;
    margin:0.5rem;
    font-family: 'Inter', sans-serif;
    font-weight:bold;
}
</style>