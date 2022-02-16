<template>
  <div class="home">
    <img alt="Groupomania logo" src="../assets/icon.png">
    <SignIn />
  </div>
</template>

<script>
// @ is an alias to /src
import SignIn from '../components/SignIn.vue'

export default {
  name: 'home',
  components: {
    SignIn
  }
}
</script>

<style lang="scss" scoped>

img {
  width: 5%;
}
</style>