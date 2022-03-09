<template>
    <div>
        <h1>Votre Profil</h1>
        <div>
            email -- {{gettersAuthData.email}}
        </div>
        <div>
            Id  -- {{gettersAuthData.userId}}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('auth', {
            gettersAuthData:'getAuthData'
        })
    },

}
</script>

<style land="scss" scoped>

</style>