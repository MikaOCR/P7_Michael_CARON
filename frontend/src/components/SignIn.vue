<template>
    <div id="signIn">
        <form action="" method="get" class="form-signIn">
            <div class="form-signIn">
                <label for="name">Nom: </label>
                <input type="text" name="name" id="name" required>
            </div>
            <div class="form-signIn">
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" required>
            </div>
            <div class="form-signIn">
                <label for="password">Mot de passe: </label>
                <input type="password" name="password" id="password" required>
            </div>
            <div class="form-signIn">
                <input type="submit" value="S'inscrire !">
            </div>
        </form>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

#signIn {
    display: flex;
    justify-content: center;
    margin: 10px 0 10px 0;
}

form.form-signIn {
    display: table;
}

div.form-signIn {
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