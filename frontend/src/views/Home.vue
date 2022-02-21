<template>
  <div class="home">
    <Forum />
  </div>
</template>

<script>
// @ is an alias to /src
import Forum from '@/components/Forum.vue'

export default {
  name: 'Home',
  components: {
    Forum
  }
}
</script>
