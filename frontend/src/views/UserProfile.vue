<template>
  <div class="profile">
    
    <UserProfile />
  </div>
</template>

<script>
// @ is an alias to /src
import UserProfile from '../components/UserProfile.vue'

export default {
  name: 'profile',
  components: {
    UserProfile
  }
}
</script>

<style lang="scss" scoped>


</style>