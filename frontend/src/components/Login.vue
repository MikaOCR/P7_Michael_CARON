<template>
    <div id="login">
        <form action="" method="get" class="form-login">
            <div class="form-login">
                <label for="name">Nom: </label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="form-login">
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" required>
            </div>
            <div class="form-login">
                <label for="password">Mot de passe: </label>
                <input type="password" name="password" id="password" required>
            </div>
            <div class="form-login">
                <input type="submit" value="Se connecter">
            </div>
        </form>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

#login {
    display: flex;
    justify-content: center;
    margin: 10px 0 10px 0;
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