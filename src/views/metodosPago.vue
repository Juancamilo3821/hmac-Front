<template>

    <div>

        <nav-bar/> 
        <div class="TC_fila1">
            <h2 class="text_fila1">Tarjeta de crédito</h2>
            <img src="@/assets/metodosPago/TC_fila1.svg" class="img_fila1">
        </div>
        <div>
            <img src="@/assets/metodosPago/line_pagos.svg" class="linePagos1">
        </div>
        <div class="TC_fila2">
            <h2 class="text_fila2">Banco de Bogotá <br> (Tarjeta débito)</h2>
            <img src="@/assets/metodosPago/bogota_fila2.svg" class="img_fila2">
        </div>
        <div>
            <img src="@/assets/metodosPago/line_pagos.svg" class="linePagos2">
        </div>
        <div class="TC_fila3">
            <h2 class="text_fila3">Débito bancario <br> PSE</h2>
            <img src="@/assets/metodosPago/pse_fila3.svg" class="img_fila3">
            <img src="@/assets/metodosPago/i.svg" class="img2_fila3">
            <h2 class="text2_fila3"> Recuerda verificar el monto máximo que tienes <br> habilitado para pagos en internet</h2>
        </div>
        <div>
            <img src="@/assets/metodosPago/line_pagos.svg" class="linePagos2">
        </div>
        <div class="TC_fila4">
            <h2 class="text_fila2">Pago en bancos</h2>
            <img src="@/assets/metodosPago/bancos_mix.svg" class="img_fila4">
        </div>

        
    </div>

</template>

<script>
import navBar from '@/components/navBar.vue'
export default {
    name: 'metodosPago',
    components: {
        navBar
    }
}
</script>

<style>

.TC_fila1{
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 3rem;
}

.text_fila1{
    align-self: center;
}

.img_fila1{
    padding-left: 2rem;
}

.linePagos1{
    display: flex;
    margin: auto;
    padding-right: 8px;
}

.TC_fila2{
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 3rem;
    margin-right: 36.5rem;
}

.text_fila2{
    align-self: center;
    text-align: center;
}

.img_fila2{
    position: relative;
    left: 4.7rem;
}

.linePagos2{
    display: flex;
    margin: auto;
    padding-right: 8px;
    margin-top: 2rem;
}

.TC_fila3{
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 2rem;
    margin-right: 36.5rem;
    height: auto;
    width: 100%;
}

.text_fila3{
    align-self: center;
    margin-left: 12.5rem;
    
    
}

.img_fila3{
    position: relative;
    left: 3.5rem;

}

.img2_fila3{
    position: relative;
    left: 5.5rem;
    
}

.text2_fila3{
    position: relative;
    font-size: 24px;
    right: 8rem;
    line-height: normal;
    margin: auto;
}

.TC_fila4{
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 3rem;
    margin-right: 35rem;
    margin-bottom: 3rem;
}

.img_fila4{
    position: relative;
    
    left: 4.5rem;
}

</style>
