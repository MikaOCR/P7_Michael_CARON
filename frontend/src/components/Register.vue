<template>
  <div id="register">
    <img alt="Groupomania logo" src="../assets/icon.png" />
    <form @submit.prevent="signUp" method="POST" class="form-signIn">
      <div class="form-signIn">
        <label for="name">Nom: </label>
        <input type="text" name="name" id="name" v-model.trim="name" required/>
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
import AuthService from '@/services/auth.service.js';

export default {
  name: "Register",
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },

  methods: {

    async signUp() {
      try {
        const credentials = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        const response = await AuthService.signUp(credentials);
        this.msg = response.msg;
        this.$router.push('/login');
      } catch (error) {
        this.msg = error.response.data.msg;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 200px;
  height: auto;
}

#register {
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
