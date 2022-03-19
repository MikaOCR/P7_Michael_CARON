<template>
    <div id="edit">
        <h1>Edition</h1>
        <div id="lastMessages">
            <div id="headerMessage" >
                <div id="userInfo">
                    <div id="Username">Auteur du message</div>
                </div>
                <div id="title">{{ post.title }}</div>
                <button id="delete" @click.prevent="deletePost" v-if="user.userId === post.authorId || user.role === 'ADMIN'"> Supprimer </button>
            </div>
            <div id="content">{{ post.content }}</div>
        </div>
        <div id="TextBox">
            <form @submit.prevent="editPost" method="PUT" class="form-message"> 
                <textarea name="title" id="title" rows="1" placeholder="Entrez votre titre..." v-model.trim="Form.title" required></textarea>
                <textarea name="content" id="content" rows="12" cols="35" maxlength="500" placeholder="Envoyez votre message..." v-model.trim="Form.content" required></textarea><br>
                <input type="submit" name="submit" value="Envoyer le message">
            </form>
        </div>    
    </div>

</template>

<script>
import { mapGetters, mapState } from 'vuex'
import axios from 'axios'

export default {
    data () {
        return {
            post: [],
            Form: {
                title: '',
                content: '',
            },
        }
    },
    computed: {
        ...mapState({
            user: 'auth/user'
        }),
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: ['auth/user'],
        }),
        gettersPost(){
            return this.$store.getters.onePost
        },
        gettersUser(){
            return this.$store.getters.user
        }

    },
    methods: {
        editPost(){
            axios.put('/edition/' + this.$route.params.id, this.Form).then(response => console.log(response));
            this.$router.replace('/forum');
        },
        deletePost(){
            axios.delete('/edition/' + this.$route.params.id).then(response => console.log(response));
            this.$router.replace('/forum');
        }
    },
    
    mounted(){
        axios.get('/edition/' + this.$route.params.id).then(response => this.post = response.data).catch(error => console.log(error));  
    },
}
</script>

<style lang="scss" scoped>

#edit {
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
        background-color: #5b7491;
        
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

    .formInfo {
        margin: 0 5px 10px 0;
    }

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
    #userInfoBloc {
        display: flex;

        .userInfo{
            margin: 0 10px 0 10px;
        }
    }
}
</style>