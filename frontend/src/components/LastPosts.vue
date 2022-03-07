<template>
    <div id="dataContainer">
        <h3 v-if="user">Hi, {{user.firstName}} {{user.lastName}}</h3>
        <h3 v-if="!user">You are not logged</h3>
        <div id="lastMessages">
            <div id="headerMessage" >
                <div id="userInfo">
                    <div id="firstName">Jean</div>
                    <div id="lastName">Reno</div>
                </div>
                <div id="timeStamp"> message envoyé le 22/02/2022 à 12h00</div>
            </div>
            <div id="lastText">
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios').default;

export default {
    name: 'Last_Post',
    data(){
        return{
            user: null
        }
    },
    async created() {
        const response = await axios.get('user');

        this.user = response.data;
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
</style>