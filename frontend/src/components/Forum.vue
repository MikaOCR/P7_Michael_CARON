<template>
    <div id="dataContainer">
        <div id="lastMessages">
            <p>ceci est un test</p>
        </div>
        <div id="messageContainer">
            <form action="" method="get" class="form-message"> 
                <textarea name="comment" rows="12" cols="35" maxlength="500">Envoyez votre message.</textarea><br>
                <input type="submit" name="submitInfo" value="Envoyer">
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>

#dataContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
}

#messageContainer {
    text-align: center;

    textarea {
        width: 800px;
    }
}
</style>