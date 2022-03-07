<template>
  <div class="home">
    <LastPosts />
    <TextBox />
  </div>
</template>

<script>
// @ is an alias to /src
import LastPosts from '@/components/LastPosts.vue'
import TextBox from '@/components/TextBox.vue'

export default {
  name: 'Home',
  components: {
    LastPosts,
    TextBox
  },

/*   async created() {
  if (!this.$store.getters.isLoggedIn) {
    this.$router.push('/login');
    }
  } */
}
</script>
