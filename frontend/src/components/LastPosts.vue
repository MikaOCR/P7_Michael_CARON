<template>
    <div id="lastPost">
        <h3>Derniers messages</h3>
        <div id="lastMessages" v-for="gettersPost in gettersPosts" :key="gettersPost.id">
            <div id="headerMessage" >
                <div id="userInfo">
                    <div id="Username">{{ gettersPost.author }}</div>
                </div>
                <div id="title">{{ gettersPost.title }}</div>
                <div id="timeStamp">{{ gettersPost.createdAt }}</div>
                <button id="delete" @click.prevent="DeletePost"> Supprimer </button>
                <button id="edit" @click.prevent="EditPost" >Editer</button>
            </div>
            <div id="content">{{ gettersPost.content }}</div>
        </div>
        <div id="TextBox">
            <form @submit.prevent="addPost" method="POST" class="form-message"> 
<!--                 <div id="infoBloc">
                <label class="formInfo" for="email">Email: </label>
                <input class="formInfo" type="email" name="email" id="email" v-model.trim="Form.authorEmail" required>
                <label class="formInfo" for="name">Nom: </label>
                <input class="formInfo" type="name" name="name" id="name" v-model.trim="Form.author" required>                    
                </div> -->
                <div id="userInfoBloc">
                    <div class="userInfo">Nom : {{ user.userName }}</div>
                    <div class="userInfo">Email : {{ user.userEmail }}</div>
                </div>
                <textarea name="title" id="title" rows="1" placeholder="Entrez votre titre..." v-model.trim="Form.title" required></textarea>
                <textarea name="content" id="content" rows="12" cols="35" maxlength="500" placeholder="Envoyez votre message..." v-model.trim="Form.content" required></textarea><br>
                <input type="submit" name="submit" value="Envoyer le message">
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapState } from 'vuex'

export default {

    data () {
        return {
            posts: [],
            Form: {
                title: '',
                content: '',
                authorEmail: '',
                author: '',
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
        gettersPosts(){
            return this.$store.getters.allPosts
        },

    },    
    methods: {
        addPost() {
            axios.post('/forum', this.Form).then(response => console.log(response)).catch(error => console.log(error));     //objet data
            
            
        },
        EditPost(){
            this.$router.push('/post/:id/edition')
        },
        DeletePost(){
            const postId = this.$store.gettersPosts.id;
            axios.delete(`/post/${postId}`).then(response => console.log(response))
        }
    },
    mounted(){
        this.$store.dispatch('getPosts');
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