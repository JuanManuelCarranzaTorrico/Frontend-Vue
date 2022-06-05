<template>
  <b-table :data="data">
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
      field="idLibro"
      label="idLibro"
      width="40"
      searchable
      sortable
      v-slot="props"
    >
      
        {{ props.row.idLibro }}
      
    </b-table-column>

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
      field="fecha"
      label="fecha"
      width="40"
      searchable
      sortable
      v-slot="props"
    >
      
        {{ props.row.fecha }}
      
    </b-table-column>
     <b-table-column
      field="Opciones"
      label="Opciones"
      width="40"
      
      sortable
      v-slot="props"
    >
      
        <b-button
              type="is-success"
              @click="registrar(props.row.idPrestamo)"
              
              >Devolver
        </b-button>
      
    </b-table-column>
  </b-table>
</template>

<script>
export default {
  data() {
    return {
    data: [],
    devolucion:{
        "idPrestamo": "",
        "fecha": ""

    }

    }
  },
  methods: {
    async consumirApi() {
      try {
        const dat = await fetch(`http://localhost:8282/ms-loan/api/Prestamo`);
        const array = await dat.json();
        console.log("Hola");
        console.log(array);
        this.data = array;
      } catch (error) {
        console.log(error);
        console.log("Hola1");
      }
    },
     async registrar(idLoan) {
            let date = new Date();
            this.devolucion.fecha=date.toISOString().split('T')[0];
            this.devolucion.idPrestamo=idLoan.toString();



      console.log(this.devolucion);

      try {
        const data = await fetch(`http://localhost:8282/ms-devolution/api/Devolucion`, {
          method: `POST`,
          body: JSON.stringify(this.devolucion),
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.$buefy.toast.open({
          message: "Loan Registrado correctamente.",
          type: "is-success",
          duration: 5000,
        });
      } catch (error) {
        //console.log(error);
        this.$buefy.toast.open({
          message: "Hubo un error al registrar Libro, intentelo nuevamente.",
          type: "is-danger",
          position: "is-bottom",
          duration: 5000,
        });
      }
    }
  },
  created() {
    this.consumirApi();
    console.log("created");
  },
};

</script>


<style>
</style>
