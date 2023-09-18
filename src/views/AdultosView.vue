<script setup>
import { ref } from 'vue';
import BotonPrecio from '../components/BotonPrecio.vue'
import BotonHorario from '../components/BotonHorario.vue';
import BotonVip from '../components/BotonVip.vue';
const jsonLink = 'https://raw.githubusercontent.com/dulcek96/API/main/naatare.json';
const jsonLink2 = 'https://raw.githubusercontent.com/dulcek96/API/main/natareH.json';
let adults = ref([]);
let adults_vip = ref([]);
let adultosh = ref([]);

fetch(jsonLink)
  .then((res) => res.json())
  .then((data) => {
    adults.value = data.adults;
    adults_vip.value= data.adults_vip;
  });
  fetch(jsonLink2)
  .then((res) => res.json())
  .then((data2) => {
    adultosh.value = data2.adultosh;
  });
</script> 

<template> 
<div class="A1">
    <h3 class="AH31">Clases de Natacion</h3>
    <h3 class="AH32">para Adultos </h3>
    <p>Nuestras clases están cuidadosamente diseñadas para satisfacer tus necesidades y objetivos individuales. Ya sea que busques adquirir nuevas habilidades, expandir tus conocimientos o simplemente disfrutar de un pasatiempo enriquecedor, tenemos una variedad de opciones para ti.
      Nuestros instructores altamente calificados y apasionados te guiarán en cada paso del camino. Desde clases de arte y música hasta talleres de cocina y cursos de desarrollo personal, nuestro objetivo es inspirarte y empoderarte.
    </p>
    <div class="A14">
      <img src="src/assets/imagenes/AdultoMayor.jpg">
    </div>
    <p>Por lo general, las clases de natación para adultos suelen estar diseñadas para edades comprendidas de los 12 años en adelante.</p>
    <div class="grid-container">
    <BotonPrecio :adults="adults"></BotonPrecio>
    <BotonVip :adults_vip="adults_vip"></BotonVip>
    <BotonHorario :adultosh="adultosh"></BotonHorario>
  </div>
</div>
</template> 

<style scoped>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr); 
      grid-gap: 10px; 
      justify-items: center; 
}
    
.AH31{
    color:#EBE741;
    font-family: 'Averia Serif Libre', cursive;;
    text-align: center;
    justify-content: center;
}
.AH32{
    color:white;
    font-family: 'Averia Serif Libre', cursive;;
    text-align: center;
    justify-content: center;
}

.A1 p{  
    font-family: 'Montserrat', sans-serif;
    color:white;
    padding-left: 3%;
    padding-right: 3%;
    text-align: justify;}

.A1{
    background-color:#3C469E;
    padding: 2%;
    justify-content: space-evenly;
}

.A14 img{
  max-width: 300px; 
    display: block; 
    margin: 0 auto; 
}
.container {
  text-align: center; 
  margin-top: 20px; 
}

.table {
  width: 50%; 
  border-width: 200px; 
}
</style>