<template>
    <div>
        <nav-bar/>
        <div class="container-cita-content">
            <div class="content-cita">
                <div class="container-cita-card">
                    <img src="@/assets/icons/hmacLogo.svg" class="logo-cita-card">
                </div>
                <div>
                    <input type="date" :min="now.toString()" />
                </div>
                <button class="button-item-cita">
                    INGRESAR
                </button>
            </div>
        </div>    
    </div>
</template>
<script>
import navBar from '@/components/navBar.vue'
export default {
    name: 'preciosPage',
    data() {
        return {
            now: '',
        }
    },
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
</style>