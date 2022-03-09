<template>
    <div id="login">
        <img alt="Groupomania logo" src="../assets/icon.png">

        <form @submit.prevent="login" method="POST" class="form-login">
            <div class="form-login">
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" v-model.trim="email" required>
            </div>
            <div class="form-login">
                <label for="password">Mot de passe: </label>
                <input type="password" name="password" id="password" v-model.trim="password" required>
            </div>
            <div class="form-login">
                <input type="submit" value="Connexion">
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters('auth', {
      getterLoginStatus:'getLoginStatus'
    })
  },
  methods: {
    ...mapActions('auth', {
      actionLogin:'login'
    }),
    async login(){
      await this.actionLogin({email:this.email, password:this.password});
      if(this.getterLoginStatus === 'success'){
        this.$router.push('/profil');
      }else{
        alert('failed to login')
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