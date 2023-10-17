<template>
        <nav-bar/>
        <div class="container-afiliados" >
                <div class="card-afiliados" style="width:60%; background-color:#F6F6F6; display:flex; flex-direction:row; margin-left:25rem; margin-top:10rem; border-radius:40px;">
                    <img src="@/assets/sede1.svg" style="margin-left: 6rem">
                    <div style="text-align:center; margin-top:5rem; margin-left:6rem;">
                        <h2 style="color:#53A920; font-weigth:bold;">
                            CIMED Centro Integral de Medicina
                        </h2>
                        <p style="font-size:20px; margin-top:2rem;">
                            Nuestro centro medico integral en donde 
                            <br>
                            encontraras desde el servicio mas basico 
                            <br>
                            hasta la solucion para salvarte la vida
                        </p>
                        <button class="botoncito" style="border:none; border-radius:40px; background-color:#53A920; padding:.5rem; margin-top:.5rem;">
                            Visitar WEB
                        </button>
                    </div>
                </div>
        </div>
        <div class="container-afiliados" >
                <div class="card-afiliados" style="width:60%; background-color:#F6F6F6; display:flex; flex-direction:row; margin-left:25rem; margin-top:10rem; border-radius:40px;">
                    <img src="@/assets/sede2.svg" style="margin-left: 3rem">
                    <div style="text-align:center; margin-top:3rem; margin-left:7rem; margin-bottom:2rem;">
                        <h2 style="color:#53A920; font-weigth:bold;">
                            Centro de Psicoterapia
                        </h2>
                        <p style="font-size:20px; margin-top:2rem;">
                            El centro de Psicoterapia te brinda
                            <br>
                            un acompañamiento en todo tipo
                            <br>
                            de tratamiento sobre tu salud mental
                        </p>
                        <button class="botoncito" style="border:none; border-radius:40px; background-color:#53A920; padding:.5rem; margin-top:.5rem;">
                            Visitar WEB
                        </button>
                    </div>

                </div>


        </div>
        <div class="container-afiliados" >
                <div class="card-afiliados" style="width:60%; background-color:#F6F6F6; display:flex; flex-direction:row; margin-left:25rem; margin-top:10rem; border-radius:40px;">
                    <img src="@/assets/sede3.svg" style="margin-left: 6rem">
                    <div style="text-align:center; margin-top:5rem; margin-left:6rem;">
                        <h2 style="color:#53A920; font-weigth:bold;">
                            Clinica de Belleza y Restauración
                        </h2>
                        <p style="font-size:20px; margin-top:2rem;">
                            La clinica de bellaza te hara dar cuenta que 
                            <br>
                            con dinero puedes tener una cara bonita
                            <br>
                            y un cuerpo perfecto sin esfuerzo
                        </p>
                        <button class="botoncito" style="border:none; border-radius:40px; background-color:#53A920; padding:.5rem; margin-top:.5rem;">
                            Visitar WEB
                        </button>
                    </div>

                </div>


        </div>
        <div class="container-afiliados" >
                <div class="card-afiliados" style="width:60%; background-color:#F6F6F6; display:flex; flex-direction:row; margin-left:25rem; margin-top:10rem; border-radius:40px;">
                    <img src="@/assets/sede4.svg" style="margin-left: 6rem">
                    <div style="text-align:center; margin-top:3rem; margin-left:10rem;">
                        <h2 style="color:#53A920; font-weigth:bold;">
                            Clinica de Pediátria
                        </h2>
                        <p style="font-size:20px; margin-top:2rem;">
                            Nuestros niños seran siempre nuestra
                            <br>
                            maxima prioridad y en la clinica de 
                            <br>
                            Pediátria San Nicolás sera de igual forma
                        </p>
                        <button class="botoncito" style="border:none; border-radius:40px; background-color:#53A920; padding:.5rem; margin-top:.5rem;">
                            Visitar WEB
                        </button>
                    </div>

                </div>


        </div>
        <div class="container-afiliados" >
                <div class="card-afiliados" style="width:60%; background-color:#F6F6F6; display:flex; flex-direction:row; margin-left:25rem; margin-top:10rem; margin-bottom:5rem; border-radius:40px;">
                    <img src="@/assets/sede5.svg" style="margin-left: 6rem">
                    <div style="text-align:center; margin-top:2rem; margin-left:6rem; margin-bottom:3rem; ">
                        <h2 style="color:#53A920; font-weigth:bold;">
                            PanaceaNova Pharmacy
                        </h2>
                        <p style="font-size:20px; margin-top:2rem;">
                            Nuestra farmaceutica siempre 
                            <br>
                            anda con los narcoticos actualizados 
                            <br>
                            para tu tratamiento
                        </p>
                        <button class="botoncito" style="border:none; border-radius:40px; background-color:#53A920; padding:.5rem; margin-top:.5rem; border-radius:40px;">
                            Visitar WEB
                        </button>
                    </div>

                </div>


        </div>
</template>
<script>
import navBar from '@/components/navBar.vue'
export default {
    name: 'afiliadosPage',
    components: {
        navBar
    }
}
</script>
<style>
.botoncito:hover{
    color: white;
}
</style>