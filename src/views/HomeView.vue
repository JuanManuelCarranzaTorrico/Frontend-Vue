<template>
  <b-table :data="data">
    <b-table-column
      field="idLibro"
      label="idLibro"
      width="40"
      searchable
      sortable
      v-slot="props"
    >
      <div v-if="props.row.estado == 1">
        {{ props.row.idLibro }}
      </div>
    </b-table-column>

    <b-table-column
      field="Titulo"
      label="Titulo"
      width="40"
      searchable
      sortable
      v-slot="props"
    >
      <div v-if="props.row.estado == 1">
        {{ props.row.titulo }}
      </div>
    </b-table-column>

    <b-table-column
      field="Autor"
      label="Autor"
      width="40"
      searchable
      sortable
      v-slot="props"
    >
      <div v-if="props.row.estado == 1">
        {{ props.row.autor }}
      </div>
    </b-table-column>

    <b-table-column
      field="Publicacion"
      label="Publicacion"
      width="40"
      searchable
      sortable
      v-slot="props"
    >
      <div v-if="props.row.estado == 1">
        {{ props.row.publicacion }}
      </div>
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
        const dat = await fetch(`http://localhost:8282/ms-libros/`);
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
