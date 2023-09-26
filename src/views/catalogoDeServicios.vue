<template>
    <div>
        <nav-bar/>
        <div class="container-header-catalogo">
            <img src="@/assets/catalogueServices.svg" class="img-header" style = "width: 100%">
            <div class="content-header">
                <p class="text-nav">
                    Inicio / Nuestros servicios
                </p>
            </div>
        </div>
        <div class="container-sub-title">
            <span class="line-subtitle"></span>
            <h2 class="subtitle-catalogo subtitle-catalogo--left">
                Tratamiento para el manejo del dolor
            </h2>
        </div>
        <div class="container-imgs-catalogue">
            <img src="@/assets/painMagementPrincipal.svg" class="img-pain-management" style = "width: 50%">
            <div class="container-cards-catalogue">
                <div class="card-img-catalogue">
                    <img src="@/assets/hyperbaricChamber.svg" class="img-hyperbaric-chamber">
                    <p class="text-hyperbaric-chamber">Cámara hiperbárica</p>
                </div>
                <div class="card-img-catalogue">
                    <img src="@/assets/serumTherapy.svg" class="img-serum-therapy">
                    <p class="text-serum-therapy">Terapia de sueros</p>
                </div>
                <div class="card-img-catalogue">
                    <img src="@/assets/ozoneTherapy.svg" class="img-ozone-therapy">
                    <p class="text-ozone-therapy">Terapia ozono articular</p>
                </div>
                <div class="card-img-catalogue">
                    <img src="@/assets/neuralTherapy.svg" class="img-neural-therapy">
                    <p class="text-neural-therapy">Terapia neural</p>
                </div>
                <div class="card-img-catalogue">
                    <img src="@/assets/arterialSweep.svg" class="img-arterial-sweep">
                    <p class="text-arterial-sweep">Barrido arterial</p>
                </div>
            </div>
        </div>
        <div class="container-sub-title">
            <span class="line-subtitle"></span>
            <h2 class="subtitle-catalogo subtitle-catalogo--right">
                Tratamiento de medicina preventiva
            </h2>
        </div>
        <div class="container-imgs-catalogue">
            <div class="container-cards-catalogue">
                <div class="card-img-catalogue">
                    <img src="@/assets/dermatologyCard.svg" class="img-dermatology-card">
                    <p class="text-dermatology-card">Dermatología anti-edad</p>
                </div>
                <div class="card-img-catalogue">
                    <img src="@/assets/epigeneticsCard.svg" class="img-epigenetics-card">
                    <p class="text-epigenetics-card">Epigenética</p>
                </div>
                <div class="card-img-catalogue">
                    <img src="@/assets/scioTherapy.svg" class="img-scio-therapy">
                    <p class="text-scio-therapy">Terapia SCIO</p>
                </div>
                <div class="card-img-catalogue">
                    <img src="@/assets/colonTherapy.svg" class="img-colon-therapy">
                    <p class="text-colon-therapy">Colon terapia</p>
                </div>
                <div class="card-img-catalogue">
                    <img src="@/assets/oxygenBar.svg" class="img-oxygen-bar">
                    <p class="text-oxygen-bar">Bar de oxígeno</p>
                </div>
            </div>
            <img src="@/assets/preventiveMedicine.svg" class="img-preventive-medicine" style = "width: 50%">
        </div>
        <div class="container-sub-title">
            <span class="line-subtitle"></span>
            <h2 class="subtitle-catalogo subtitle-catalogo--left">
                Tratamiento del SPA Terapéutico
            </h2>
        </div>
        <div class="container-imgs-catalogue">
            <img src="@/assets/spaTherapy.svg" class="img-spa-therapy" style = "width: 50%">
            <div class="container-cards-catalogue">
                <div class="card-img-catalogue">
                    <img src="@/assets/massageRoom.svg" class="img-massage-room">
                    <p class="text-massage-room">Sala de masajes</p>
                </div>
                <div class="card-img-catalogue">
                    <img src="@/assets/chromoTherapy.svg" class="img-chromo-therapy">
                    <p class="text-chromo-therapy">Cromoterapia</p>
                </div>
                <div class="card-img-catalogue">
                    <img src="@/assets/saunaCard.svg" class="img-sauna-card">
                    <p class="text-sauna-card">Sauna</p>
                </div>
                <div class="card-img-catalogue">
                    <img src="@/assets/aromaTherapy.svg" class="img-aroma-therapy">
                    <p class="text-aroma-therapy">Aromaterapia</p>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import navBar from '@/components/navBar.vue'
export default {
    name: 'catalogoDeServicios',
    components: {
        navBar
    }
}
</script>
<style>
    .container-header-catalogo{
        width:100%;
        position:relative;
    }
    .content-header{
        position:absolute;
        top:0;
        left:0;
        width:50%;
        padding:1rem;
    }
    .text-nav{
         margin-bottom:2rem;
    }
    .img-header{
        margin-bottom: 4rem;
    }
    .container-sub-title{
        position: relative;
        display: flex;
        margin-bottom: 2.5rem;
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
    .subtitle-catalogo--right {
        margin-right: auto;
    }
    .subtitle-catalogo--center {
        margin-left: auto;
        margin-right: auto;
    }
    .line-subtitle {
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 4px;
        background-color: rgb(53, 158, 53);
        transform: translateY(-60%)
    }
    .container-imgs-catalogue{
        display:flex;
        flex-wrap:wrap;
        align-items: start;
    }
    .container-cards-catalogue{
        display:flex;
        flex-wrap:wrap;
        align-items: start;
        width:50%;
        justify-content:center;
    }
    .card-img-catalogue{
        width: 32%;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 1rem;
    }
    .img-hyperbaric-chamber{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-hyperbaric-chamber{
        text-align: center;

    }
    .img-serum-therapy{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-serum-therapy{
        text-align: center;

    }
    .img-ozone-therapy{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-ozone-therapy{
        text-align: center;

    }
    .img-neural-therapy{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-neural-therapy{
        text-align: center;

    }
    .img-arterial-sweep{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-arterial-sweep{
        text-align: center;

    }
     .img-dermatology-card{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-dermatology-card{
        text-align: center;

    }
    .img-epigenetics-card{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-epigenetics-card{
        text-align: center;

    }
    .img-scio-therapy{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-scio-therapy{
        text-align: center;

    }
    .img-colon-therapy{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-colon-therapy{
        text-align: center;

    }
    .img-oxygen-bar{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-oxygen-bar{
        text-align: center;

    }
    .img-massage-room{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-massage-room{
        text-align: center;

    }
    .img-chromo-therapy{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-chromo-therapy{
        text-align: center;

    }
    .img-sauna-card{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-sauna-card{
        text-align: center;

    }
    .img-aroma-therapy{
        width:100%;
        margin-bottom: 1rem;
          
    }
    .text-aroma-therapy{
        text-align: center;

    }

</style>