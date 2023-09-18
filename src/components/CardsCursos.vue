<script setup>
import { RouterLink} from 'vue-router';
</script>

<template>
<div class="cursos">
    <h3>Cursos</h3>
    <div class="container text-center">
        <div class="row">

    <div class="col">
        <div class="card tarjeta">
            <img src="src/assets/imagenes/Ninos.jpg" class="card-img-top" alt="Niños nadando">
        <div class="card-body bc-azul text-center">
        <h5 class="card-title">Natacion Niños</h5>
        <button
        class="custom-btn"
        @click="handleClick"
        > <RouterLink :to="{ name: 'Ninos' }">Conoce más</RouterLink>
        </button>
        </div>
        </div>       
        </div>

    <div class="col">
        <div class="card tarjeta">
    <img src="src/assets/imagenes/AdultoMayor.jpg" class="card-img-top" alt="Adulto Mayor nadando">
    <div class="card-body bc-azul text-center">
    <h5 class="card-title">Natacion Adultos</h5>
    <button
        class="custom-btn"
        @click="handleClick">
        <RouterLink to="/adultos">Conoce más</RouterLink>
        </button>
    </div>

</div>
    </div>
    <div class="col">
        <div class="card tarjeta">
    <img src="src/assets/imagenes/Bebe.jpg" class="card-img-top" alt="Bebe nadando">
    <div class="card-body bc-azul text-center">
    <h5 class="card-title">Natacion Bebes</h5>
    <button
        class="custom-btn"
        @click="handleClick"
        > <RouterLink to="Bebe">Conoce más</RouterLink>
        </button>
    </div>
        </div>
    </div>
    </div>
</div>
</div>
</template>

<style>
.row{
    align-items: baseline;
    justify-content: space-between;
}
.btn{
    background-color:#EBE741;
}
.btn-amarillo {
    background-color: #EBE741;
    color: #3771C8;
    border: none; 
}

.bc-azul{
    background-color: #3771C8;
}

.card col{
    padding:0px;
    margin:0px;
}

.card-title{
    font-family: 'Averia Serif Libre', cursive;;
}

.cursos h3{
    margin-top: 2%;
    margin-bottom: 1%;
    color: white;
    font-family: 'Averia Serif Libre', cursive;;
    text-align: center;
    justify-content: space-evenly;
}

.btn{
    background-color:#EBE741;
}

.cursos a{
    text-decoration: none;
    font-family:  'Montserrat', sans-serif;
    color:#3C469E;
}
.card{
    border:none;
    box-shadow: none; 
    background-color: transparent;
}

</style>