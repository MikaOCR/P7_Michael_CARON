<template>
  <div id="nav">
    <router-link to="/accueil">Accueil</router-link> |
    <router-link to="/signin">S'inscrire</router-link> |
    <router-link to="/login">Connexion</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
