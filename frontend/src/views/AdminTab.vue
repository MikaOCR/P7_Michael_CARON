<template>
  <div class="adminPanel">
    <AdminTab />
  </div>
</template>

<script>
// @ is an alias to /src
import AdminTab from '@/components/AdminTab.vue'

export default {
  name: 'adminPanel',
  components: {
    AdminTab,
  },
}
</script>