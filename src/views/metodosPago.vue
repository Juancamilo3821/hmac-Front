<template>
    <div>
        <nav-bar/>  
        <img src="@/assets/metodosPago.svg" class="img-metodosPago">
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

.img-metodosPago{
    width: 1300px;
    height: 100%;
    flex-shrink: 0;
    margin-left: 20%;
    margin-top: 5%;
    margin-right: auto;
}

</style>