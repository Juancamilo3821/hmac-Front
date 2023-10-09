<template>
    <div>
        <nav-bar/>
        <div class="container-cita-content">
            <div class="content-cita" width="100%">
                <div class="container-cita-card">
                    <button @click="$router.push({name: 'home'})" style="border:none; background-color:transparent;">
                        <img src="@/assets/icons/logo.svg">
                    </button >
                </div>
                <div class="content-item-cita">
                
                    <p class="title-item-cita">
                        <img src="@/assets/icons/tipoDocumento.svg">
                        <input type="text" style="flex: 1 0 0%" placeholder="Departamento: ">
                     </p>
                </div>
                <div class="content-item-cita">
                    <p class="title-item-cita"> 
                        <img src="@/assets/icons/numDocumento.svg">
                         <input type="text" style="flex: 1 0 0%" placeholder="Ciudad: ">
                    </p>
                </div>
                <div class="content-item-cita">
                    <p class="title-item-cita"> 
                        <img src="@/assets/icons/numDocumento.svg">
                         <input type="text" style="flex: 1 0 0%" placeholder="Especialidad: ">
                    </p>
                </div>
                <div class="container-input-fecha">
                    <div class="opciones-fecha">
                        <select placeholder="Identidad">
                            <option value="8:00 am" title="Cédula de ciudadania">8:00 am</option>
                            <option value="9:45 am" title="Tarjeta de identidad">9:45 am</option>
                            <option value="11:30 am" title="Cédula de extranjeria">11:30 am</option>
                            <option value="2:50 pm" title="Pasaporte">2:50 pm</option>
                            <option value="3:00 pm" title="Pasaporte">3:00 pm</option>
                            <option value="4:30 pm" title="Pasaporte">PAS</option>
                         </select>
                    </div>
                    <div class="select-fecha">
                            <div class="content-fecha">
                                <input type="date" :min="now.toString()" />
                            </div>
                        </div>
                </div>
                <button class="button-item-cita">
                    AGENDAR
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
  position:relative;
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
.content-item-cita{
    width: 100%;
    min-height: 115px;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: left;
    justify-content: left;

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
    margin-left: 150px;
    margin-right:100px;
    font-family: 'Inter', sans-serif;
    font-weight:bold;
}
.content-item-fecha{
    width: 100%;
    min-height: 115px;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: right;
    justify-content: right;

}
.title-item-fecha{
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
    margin-left: 150px;
    margin-right:100px;
    font-family: 'Inter', sans-serif;
    font-weight:bold;
}
.container-input-fecha{
    align-items:right;
    justify-content:right;
    background-color: #d9d9d9;
    padding: .4rem 1rem;
    border-radius: 30px;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    display:flex;
}
.opciones-fecha{
    align-items:right;
    overflow: hidden;
    padding: 0 .5rem;
    border-right:1px solid #b5b5b5;
}
.select-identidad {
    width: 70%;
    padding-left: .5rem;
}
.content-fecha {
    display:flex;
    width: 100%;
}
</style>