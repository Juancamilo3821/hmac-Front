<template>
  <div>
    <div class="content-nav-bar" id="nav">
      <img src="@/assets/logo.svg">
      <div>
        <router-link class="item-nav" :to="{}">
          Ley de transparencia
        </router-link>
        <router-link class="item-nav" :to="{}">
          Quienes somos
        </router-link>
        <router-link class="item-nav" :to="{}">
          Afiliados
        </router-link>
      </div>
      <button class="boton-nav-login">
        Iniciar Sesión
        <img src="@/assets/icons/icon-person.svg">
      </button>
    </div>
    <div class="content-sub-nav">
      <router-link class="item-nav" :to="{}">
        INICIO
      </router-link>
      <router-link class="item-nav" :to="{}">
        CATALOGO DE SERVICIOS
      </router-link>
      <router-link class="item-nav" :to="{}">
        PRECIOS
      </router-link>
      <router-link class="item-nav" :to="{}">
        TIENDA NATURISTA
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  mounted(){
    setTimeout(()=> {
      // Obtener la referencia de un div por su id en js!
      console.log(document.getElementById('nav'))
      // obtener las referencias de una clase con js
      console.log(document.getElementsByClassName('content-nav-bar'))
    }, 1000)
  },
  computed: {
    ...mapState(['msg'])
  },
}
</script>
<style>
.content-nav-bar {
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
  justify-content: space-between;
}
.item-nav {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  text-decoration: none;
  color: black;
}
.item-nav:hover {
  text-decoration: underline;
}
.boton-nav-login {
  border: none;
  background-color: #CECECE;
  border-radius: 50px;
  padding: .5rem 1rem;
}
.boton-nav-login img {
  transition: all .5s ease; 
}
.boton-nav-login:hover img {
  scale: 1.1
}
.content-sub-nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: #53A920;
  justify-content: space-between;
  min-height: 50px;
  padding: .5rem 1rem;
}
.content-sub-nav .item-nav {
  color: white;
  font-weight: bold;
  font-size: 14px;
}
.content-sub-nav .item-nav:hover {
text-decoration: none;
}
</style>
