<template>
    <div>
      <button class="custom-btn BtnPrecio" @click="showTableData">
        {{ buttonText }}
      </button>
  
      <table v-if="showTable">
        <thead>
          <tr>
            <th>Clases</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in adults" :key="item.class">
            <td>{{ item.class }}</td>
            <td>{{ item.price }}</td>
          </tr>
          <tr v-for="item in children" :key="item.class">
            <td>{{ item.class }}</td>
            <td>{{ item.price }}</td>
          </tr>
          <tr v-for="item in baby" :key="item.class">
            <td>{{ item.class }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        buttonText: "Precios",
        showTable: false, 
      };
    },
    methods: {
      showTableData() {
        this.showTable = true; 
      },
    },
    props: {
      children: Array, 
      adults: Array,
      baby: Array
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
