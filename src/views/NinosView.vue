<script setup>
import { ref } from 'vue';
import BotonPrecio from '../components/BotonPrecio.vue';
import BotonHorario from '../components/BotonHorario.vue';
import BotonVip from '../components/BotonVip.vue';

const jsonLink = 'https://raw.githubusercontent.com/dulcek96/API/main/naatare.json';
const jsonLink2 = 'https://raw.githubusercontent.com/dulcek96/API/main/natareH.json';
let children = ref([]);
let children_vip = ref([]);
let ninosh= ref([]);

fetch(jsonLink)
  .then((res) => res.json())
  .then((data) => {
    children.value = data.children;
    children_vip.value=data.children_vip;
  });
  fetch(jsonLink2)
  .then((res) => res.json())
  .then((data2) => {
    ninosh.value = data2.ninosh;
  });
</script>

<template>
  <div class="A1">
    <h3 class="AH31">Clases de Natacion</h3>
    <h3 class="AH32">para niños</h3>
    <p>Nuestras clases de natación para niños son un espacio de diversión y aprendizaje seguro en el agua. Diseñadas especialmente para los más pequeños, nuestras clases fomentan la confianza en el agua, enseñan habilidades fundamentales de natación y promueven la diversión mientras se adquieren conocimientos esenciales para una vida acuática segura y saludable. Nuestros instructores altamente capacitados se dedican a crear un ambiente amigable y alentador que inspira a los niños a desarrollar una conexión positiva con el agua desde una edad temprana. ¡Bienvenidos a un mundo de aventura acuática y aprendizaje emocionante para los más jóvenes!</p>
    <div class="A14">
      <img src="src/assets/imagenes/Ninos.jpg">
    </div>
    <p>Por lo general, las clases de natación para niños suelen estar diseñadas para niños de edades comprendidas entre los 3 años y los 12 años. Sin embargo, esta edad puede variar según la política y enfoque de la instalación o programa de natación específico. </p>
    <div class="grid-container">
      <BotonPrecio :children="children"></BotonPrecio>
      <BotonVip :children_vip="children_vip"></BotonVip>
      <BotonHorario :ninosh="ninosh"></BotonHorario>
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