<template>
  <b-table :data="data">
    <b-table-column
      field="idDevolucion"
      label="idDevolucion"
      width="40"
      searchable
      sortable
      v-slot="props"
    >
      
        {{ props.row.idDevolucion }}
      
    </b-table-column>

    <b-table-column
      field="idPrestamo"
      label="idPrestamo"
      width="40"
      searchable
      sortable
      v-slot="props"
    >
      
        {{ props.row.idPrestamo }}
      
    </b-table-column>

    <b-table-column
      field="fecha"
      label="fecha"
      width="40"
      searchable
      sortable
      v-slot="props"
    >
      
        {{ props.row.fecha }}
      
    </b-table-column>
  </b-table>
</template>

<script>
export default {
  data() {
    return {
    data: []
    }
  },
  methods: {
    async consumirApi() {
      try {
        const dat = await fetch(`http://localhost:8282/ms-devolution/api/Devolucion`);
        const array = await dat.json();
        console.log("Hola");
        console.log(array);
        this.data = array;
      } catch (error) {
        console.log(error);
        console.log("Hola1");
      }
    },
  },
  created() {
    this.consumirApi();
    console.log("created");
  },
};
</script>


<style>
</style>
