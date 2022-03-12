<template>
    <div id="login">
        <img alt="Groupomania logo" src="../assets/icon.png">

        <form @submit.prevent="submit" method="POST" class="form-login">
            <div class="form-login">
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" v-model.trim="form.email" required>
            </div>
            <div class="form-login">
                <label for="password">Mot de passe: </label>
                <input type="password" name="password" id="password" v-model.trim="form.password" required>
            </div>
            <div class="form-login">
                <input type="submit" value="Connexion">
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
/* import axios from 'axios'; */


export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },

  methods: {
/*     async login() {
      const response = await axios.post('/login', {
        email: this.email,
        password: this.password
      });
      console.log(response);
      const userToken = sessionStorage.setItem('userAuth', response.data.token);
      const userId = sessionStorage.setItem('userId', response.data.userId);
      console.log(userId);

      if(userToken === false){
        alert('Connexion impossible')
        this.$router.push('/login')
        } else {
          alert('Vous êtes connecté !')
          this.$router.push('/profil');
        }
    }, */
    ...mapActions({
      signIn: 'auth/signIn'
    }),

    submit () {
      this.signIn(this.form).then(() => {
        this.$router.replace('/forum');
      }).catch(error => console.log(error))
    }    
  },
}

</script>

<style lang="scss" scoped>

img {
  width: 200px;
  height: auto;
}

#login {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 10px 0;
    padding-top: 10px;
    background-color: #FFFF;
}

form.form-login {
    display: table;
}

div.form-login {
    display: table-row;
}

label, input {
    display: table-cell;
    margin-bottom: 10px;
}

label {
    padding-right: 5px;
}

</style>