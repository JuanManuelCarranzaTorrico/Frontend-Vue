<template>
  <div class="card p-5 m-5">
    <div class="row">
        <center><h1>Nuevo usuario</h1></center>
        <br>
        <br>
        <section>
            <b-field label="Nombre">
            <b-input v-model="usuario.nombre"></b-input>
        </b-field>
        <b-button
              type="is-success"
              @click="registrar()"
              
              >Registrar usuario
        </b-button>
        
        </section>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
        usuario:{
        nombre: ""
        }
    }},
    methods: {
        async registrar() {

      console.log(this.usuario);

      try {
        const data = await fetch(`http://localhost:8282/ms-usuarios/usuario`, {
          method: `POST`,
          body: JSON.stringify(this.usuario),
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.$buefy.toast.open({
          message: "Usuario Registrado correctamente.",
          type: "is-success",
          duration: 5000,
        });
      } catch (error) {
        //console.log(error);
        this.$buefy.toast.open({
          message: "Hubo un error al registrar Usuario, intentelo nuevamente.",
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