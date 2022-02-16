<template>
  <div class="home">
    <img alt="Groupomania logo" src="../assets/icon.png">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '../components/Login.vue'

export default {
  name: 'home',
  components: {
    Login
  }
}
</script>

<style lang="scss" scoped>

img {
  width: 5%;
}
</style>