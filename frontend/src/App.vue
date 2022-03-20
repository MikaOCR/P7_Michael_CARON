<template>
  <div id="app">
    <div id="nav">
      <Nav />
    </div>
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    Nav
  },
  ...mapGetters({
      authenticated: 'auth/authenticated',
      user: ['auth/user'],
		}),  
}
</script>

<style lang="scss">

body {
  background-color: #e2e2e28c;
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
  background-color: #2c3e50;

  a {
    font-weight: bold;
    color: #ffffff;
    padding: 0px 10px 0 10px;
    

    &.router-link-exact-active {
      color: #da624d;
    }
  }
}
</style>
