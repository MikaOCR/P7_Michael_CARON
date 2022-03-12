<template>
  <div id="admin">
      <button @click.prevent="getUserConnections" >Afficher Users</button>
      <div id="bloc" v-for="gettersUser in gettersUsers" :key="gettersUser.id">
          <p>User name : {{ gettersUser.name }}</p>
          <p>User email : {{ gettersUser.email }}</p>
          <p>User id : {{ gettersUser.id }}</p>
      </div>
  </div>
</template>

<script>

export default {
    name: 'admin',
    data(){
        return {
            users: []
        }
    },
    computed: {
        gettersUsers(){
            return this.$store.getters.allUsers
        },
        stateUsers(){
            return this.$store.state.users
        }
    }, 
    methods: {

    },
    mounted(){
        this.$store.dispatch('getUsers');
    },    
}
</script>

<style lang='scss' scoped>

#bloc {
    border: solid 1px black;
}
</style>