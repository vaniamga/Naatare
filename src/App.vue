<script setup>
import { RouterView } from 'vue-router'
import Encabezado from './components/Encabezado.vue'
import Pie from './components/Pie.vue'
</script> 

<template> 
<Encabezado></Encabezado>
<RouterView></RouterView>
<Pie></Pie>
</template>


