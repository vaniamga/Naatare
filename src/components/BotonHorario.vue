<template>
    <div>
      <button class="custom-btn BtnPrecio" @click="showTableData">
        {{ buttonText }}
      </button>
  
      <table v-if="showTable">
        <thead>
          <tr>
            <th>Día</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in adultosh" :key="item.dias">
            <td>{{ item.dias }}</td>
            <td>{{ item.horario }}</td>
          </tr>
          <tr v-for="item in ninosh" :key="item.dias">
            <td>{{ item.dias }}</td>
            <td>{{ item.horario }}</td>
          </tr>
          <tr v-for="item in bebesh" :key="item.dias">
            <td>{{ item.dias }}</td>
            <td>{{ item.horario }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        buttonText: "Horarios",
        showTable: false, 
      };
    },
    methods: {
      showTableData() {
        this.showTable = true; 
      },
    },
    props: {
      ninosh: Array, 
      adultosh: Array,
      bebesh: Array
    },
  };
  </script>

<style scoped>
table {
  margin-top: 3%;
  width: 100%;
  border-collapse: collapse;
}

th, td {
  background-color: #f2f2f2a2;
  border: 3px solid #992199;
  padding: 8px;
  text-align: left;
  border-radius: 5px;
}

th {
  background-color: #EBE741;
}

tr:nth-child(odd) {
  background-color: #f2f2f2a2;
}

.custom-btn {
  background-color: #EBE741;
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.custom-btn:hover {
  background-color: #9D1C9E;
}

.custom-btn:focus {
  outline: none;
}
</style>