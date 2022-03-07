<template>
  <div id="messageContainer">
            <form action="" method="get" class="form-message"> 
                <textarea name="comment" id="comment" rows="12" cols="35" maxlength="500">Envoyez votre message.</textarea><br>
                <input type="submit" name="submitInfo" value="Envoyer">
            </form>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#messageContainer {
    text-align: center;
    margin: 15px;

    textarea {
        width: 800px;
        background-color: #ffff;
    }
}
</style>