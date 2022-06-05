<template>
  <b-table :data="data">
    <b-table-column
      field="idUsuario"
      label="idUsuario"
      width="40"
      searchable
      sortable
      v-slot="props"
    >
        {{ props.row.idUsuario }}
    </b-table-column>

    <b-table-column
      field="Nombre"
      label="Nombre"
      width="40"
      searchable
      sortable
      v-slot="props"
    >
      
        {{ props.row.nombre }}
      
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
        const dat = await fetch(`http://localhost:8282/ms-usuarios/usuario`);
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