<template>
  <div class="blocEdit">
    <Edition />
  </div>
</template>

<script>
// @ is an alias to /src
import Edition from '@/components/Edition.vue'

export default {
  name: 'blocEdit',
  components: {
    Edition,
  },
}
</script>