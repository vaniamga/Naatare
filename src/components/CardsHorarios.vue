<script setup>
import { ref } from 'vue';
import BotonHorario from './BotonHorario.vue';

const jsonLink2 = 'https://raw.githubusercontent.com/dulcek96/API/main/natareH.json';
let bebesh = ref([]);
let adultosh = ref([]);
let ninosh= ref([]);

fetch(jsonLink2)
  .then((res) => res.json())
  .then((data2) => {
    ninosh.value = data2.ninosh;
    bebesh.value = data2.bebesh;
    adultosh.value = data2.adultosh;
  });

</script>

<template>
  <div class="horarios">
    <h3>Horarios</h3>
    <div class="row justify-content-space-evenly">
      <div class="col-sm-4 mb-3">
        <div class="card text-center">
          <div class="card-body bc-azuloscuro">
            <h5 class="card-title">NIÑOS</h5>
            <BotonHorario :ninosh="ninosh"></BotonHorario>
          </div>
        </div>
      </div>
      <div class="col-sm-4 mb-3">
        <div class=" cardd1 offset card text-center">
          <div class="card-body bc-azuloscuro">
            <h5 class="card-title">ADULTOS</h5>
            <BotonHorario :adultosh="adultosh"></BotonHorario>
          </div>
        </div>
      </div>
      <div class="col-sm-4 mb-3">
        <div class="card text-center">
          <div class="card-body bc-azuloscuro">
            <h5 class="card-title">BEBES</h5>
            <BotonHorario :bebesh="bebesh"></BotonHorario>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  

<style>
.btn-amarillo {
    padding: .375rem .75rem;
    border-radius: .25rem;
    background-color: #EBE741;
    color: #3771C8;
    transition: background-color .15s ease-in-out;
    border: none; 
}
.carddd1{
  margin:0 px;
}
.bc-azuloscuro{
      background-color: #3C469E;}

.card-title{
    font-family: 'Averia Serif Libre', cursive;;
}

.horarios h3{
    margin-top: 2%;
    margin-bottom: 1%;
    color:#3C469E;
    font-family: 'Averia Serif Libre', cursive;;
    text-align: center;
    justify-content: center;
}

.btn{
    background-color:#EBE741;
}

.horarios a{
    font-family:  'Montserrat', sans-serif;
    color:#3C469E;
    text-decoration: none;
}

</style>