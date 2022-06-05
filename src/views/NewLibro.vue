<template>
  <div class="card p-5 m-5">
    <div class="row">
        <center><h1>Nuevo libro</h1></center>
        <br>
        <br>
        <section>
            <b-field label="Titulo">
            <b-input v-model="libro.titulo"></b-input>
        </b-field>
        <b-field label="Autor">
            <b-input v-model="libro.autor"></b-input>
        </b-field>
        <b-field label="Año de publicacion">
            <b-input v-model="libro.publicacion"></b-input>
        </b-field>
        <b-button
              type="is-success"
              @click="registrarLibro()"
              
              >Registrar Libro
        </b-button>
        
        </section>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
        libro:{
        "publicacion": 2022,
        "estado": 1,
        "titulo": "",
        "autor": ""

        }
    }},
    methods: {
        async registrarLibro() {

      console.log(this.libro);

      try {
        const data = await fetch(`http://localhost:8282/ms-libros/newLibro`, {
          method: `POST`,
          body: JSON.stringify(this.libro),
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.$buefy.toast.open({
          message: "Libro Registrado correctamente.",
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
    }

}
</script>

<style>

</style>