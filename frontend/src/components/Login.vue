<template>
    <div id="login">
        <img alt="Groupomania logo" src="../assets/icon.png">
        <form action="" method="get" class="form-login">
            <div class="form-login">
                <label for="lastName">Nom: </label>
                <input type="text" name="lastName" id="lastName" v-model.trim="lastName" required>
            </div>
            <div class="form-login">
                <label for="firstName">Prenom: </label>
                <input type="text" name="firstName" id="firstName" v-model.trim="firstName" required>
            </div>
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
 export default {
     name: 'Login',
     data(){
        return {
            lastName: '',
            firstName: '',
            email: '',
            password: ''
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