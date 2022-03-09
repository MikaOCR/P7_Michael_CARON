<template>
  <div class="Forum">
    <LastPosts />
  </div>
</template>

<script>
// @ is an alias to /src
import LastPosts from '@/components/LastPosts.vue'

export default {
  name: 'Forum',
  components: {
    LastPosts,
  },
}
</script>
