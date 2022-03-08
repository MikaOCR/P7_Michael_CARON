<template>
  <div class="Forum">
    <LastPosts />
    <TextBox />
  </div>
</template>

<script>
// @ is an alias to /src
import LastPosts from '@/components/LastPosts.vue'
import TextBox from '@/components/TextBox.vue'

export default {
  name: 'Forum',
  components: {
    LastPosts,
    TextBox
  },

}
</script>
