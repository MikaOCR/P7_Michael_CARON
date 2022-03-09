<template>
    <div id="lastPost">
        <h3>Derniers messages</h3>
        <div id="lastMessages" v-for="post in posts" :key="post.id">
            <div id="headerMessage" >
                <div id="userInfo">
                    <div id="firstName">User FirstName</div>
                    <div id="lastName">User LastName</div>
                </div>
                <div id="title">{{ post.title }}</div>
                <div id="delete"> message envoyé le 22/02/2022 à 12h00</div>
                <button id="edit">Editer</button>
            </div>
            <div id="comment">{{ post.post }}</div>
        </div>
        <div id="TextBox">
            <form @submit.prevent="addPost" method="POST" class="form-message"> 
                <textarea name="title" id="title" rows="1" placeholder="Entrez votre titre..." v-model.trim="Form.title" required></textarea>
                <textarea name="comment" id="comment" rows="12" cols="35" maxlength="500" placeholder="Envoyez votre message..." v-model.trim="Form.comment" required></textarea><br>
                <input type="submit" name="submit" value="Envoyer le message">
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {

    data () {
        return {
            posts: [],
            Form: {
                title: '',
                comment: '',
            },
        }
    },
    methods: {
        getPost(){
            axios.get('/forum').then(response => this.posts = response.data).catch(error => console.log(error));    //array data
        },
        addPost() {
            axios.post('/forum', this.Form).then(response => console.log(response)).catch(error => console.log(error));     //objet data
            
        }

    },
    mounted(){
        this.getPost();
    },
}
</script>


<style lang="scss" scoped>

#lastPost {
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

#TextBox {
    text-align: center;
    margin: 15px;

    .form-message {
        display: flex;
        flex-direction: column;
        align-items: center;

        #title {
            margin: 0 0 5px 0;
        }
    }

    textarea {
        width: 800px;
        background-color: #ffff;
    }
}
</style>