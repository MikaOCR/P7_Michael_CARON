<template>
  <div id="signIn">
    <img alt="Groupomania logo" src="../assets/icon.png" />
    <form @submit.prevent="createAccount" method="POST" class="form-signIn">
      <div class="form-signIn">
        <label for="lastName">Nom: </label>
        <input type="text" name="lastName" id="lastName" v-model.trim="lastName" required/>
      </div>
      <div class="form-signIn">
        <label for="firstName">Prenom: </label>
        <input
          type="text" name="firstName" id="firstName" v-model.trim="firstName" required/>
      </div>
      <div class="form-signIn">
        <label for="email">Email: </label>
        <input
          type="email" name="email" id="email" v-model.trim="email" required/>
      </div>
      <div class="form-signIn">
        <label for="password">Mot de passe: </label>
        <input
          type="password" name="password" id="password" v-model.trim="password" required/>
      </div>
      <div class="form-signIn">
        <button type="submit" class="button"> Créer mon compte </button>
      </div>
    </form>
  </div>
</template>

<script>
const axios = require('axios').default;

export default {
  name: "SignIn",
    data() {
      return {
        lastName: '',
        firstName: '',
        email: '',
        password: ''
      }
    },

  methods: {

    async createAccount(){

      const response = await axios.post('/signin', {
        lastName: this.lastName,
        firstName: this.firstName,
        email: this.email,
        password: this.password
      });

      console.log(response);
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 200px;
  height: auto;
}

#signIn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 10px 0;
  padding-top: 10px;
  background-color: #ffff;
}

form.form-signIn {
  display: table;
}

div.form-signIn {
  display: table-row;
}

label,
input {
  display: table-cell;
  margin-bottom: 10px;
}

label {
  padding-right: 5px;
}
</style>
