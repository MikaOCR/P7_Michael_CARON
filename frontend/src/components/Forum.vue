<template>
    <div id="dataContainer">
        <div id="lastMessages">
            <div id="headerMessage" >
                <div id="userInfo">
                    <div id="firstName">Jean</div>
                    <div id="lastName">Reno</div>
                </div>
                <div id="timeStamp"> message envoyé le 22/02/2022 à 12h00</div>
            </div>
            <div id="lastText">
                <div v-text="forumValues.comment"></div>
            </div>
        </div>
        <div id="messageContainer">
            <form action="" method="get" class="form-message"> 
                <textarea name="comment" id="comment" rows="12" cols="35" maxlength="500" v-model="forumValues.comment">Envoyez votre message.</textarea><br>
                <input type="submit" name="submitInfo" value="Envoyer">
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Forum',
    data(){
        return{
            forumValues: {
                comment: ''
            }
        }
    }
}
</script>


<style lang="scss" scoped>

#dataContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
}

#lastMessages {
    border: 1px solid black;
    margin: 15px;
    width: 60%;
    height: 220px;
    background-color: #ffff;

    #headerMessage {
        display: flex;
        justify-content: space-between;
        padding: 10px 5px 5px 5px ;
        background-color: #d87462;
        
        #userInfo {
            display: flex;

            #firstName {
                margin: 0 10px 0 0;
            }
        }
    }

    #lastText {
        margin: 10px;
    }
}

#messageContainer {
    text-align: center;
    margin: 15px;

    textarea {
        width: 800px;
        background-color: #ffff;
    }
}
</style>