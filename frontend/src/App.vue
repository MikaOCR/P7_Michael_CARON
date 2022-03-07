<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/register">S'inscrire</router-link> |
      <router-link to="/login">Se connecter</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

</script>

<style lang="scss">

body {
  background-color: #f7ded9;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

#nav {
  display: flex;
  justify-content: flex-end;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0px 10px 0 10px;
    

    &.router-link-exact-active {
      color: #da624d;
    }
  }
}
</style>
