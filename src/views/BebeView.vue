<script setup>
import { ref } from 'vue';
import BotonPrecio from '../components/BotonPrecio.vue';
import BotonHorario from '../components/BotonHorario.vue';

const jsonLink = 'https://raw.githubusercontent.com/dulcek96/API/main/naatare.json';
const jsonLink2 = 'https://raw.githubusercontent.com/dulcek96/API/main/natareH.json';
let baby = ref([]);
let bebesh = ref([]);

fetch(jsonLink)
  .then((res) => res.json())
  .then((data) => {
    baby.value = data.baby;
  });
  fetch(jsonLink2)
  .then((res) => res.json())
  .then((data2) => {
    bebesh.value = data2.bebesh;
  });
</script>

<template> 
<div class="A1">
    <h3 class="AH31">Clases de Natacion</h3>
    <h3 class="AH32">para bebés  </h3>
    <p>Nuestras clases están diseñadas específicamente para bebés, desde recién nacidos hasta sus primeros pasos.
       Cada sesión está llena de actividades divertidas y estimulantes que ayudan en el desarrollo temprano de su hijo. Desde canciones y juegos interactivos hasta actividades sensoriales, nuestro objetivo es fomentar el desarrollo cognitivo, emocional y motor de su bebé de una manera segura y enriquecedora.</p>
    <div class="A14">
      <img src="src/assets/imagenes/Bebe.jpg">
    </div>
    <p>Por lo general, las clases de natación para bebés suelen estar diseñadas para edades comprendidas entre los 6 meses a los 3 años.</p>
    <div class="grid-container">
      <BotonPrecio :baby="baby"></BotonPrecio>
    <BotonHorario :bebesh="bebesh"></BotonHorario>
  </div>
</div>
</template> 

<style scoped>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr); 
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