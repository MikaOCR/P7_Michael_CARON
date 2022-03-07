<template>
  <div class="home">
    <Register />
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '../components/Register.vue'

export default {
  name: 'home',
  components: {
    Register
  }
}
</script>

<style lang="scss" scoped>

img {
  width: 5%;
}
</style>