<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/NewLibro">NewLibro</router-link> |
      <router-link to="/ListUsuarios">List usuarios</router-link> | 
      <router-link to="/NewUser">NewUser</router-link> |
      <router-link to="/ListLoan">ListLoan</router-link> | 
      <router-link to="/NewLoan">NewLoan</router-link> | 
      <router-link to="/ListDevolucion">ListDevolucion</router-link>    
      <p align="right">
      <b-button type="is-danger">Logout</b-button>  
      </p>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
