<template>
    <div id="lastPost">
        <h3>Derniers messages</h3>
        <div id="lastMessages" v-for="gettersPost in gettersPosts" :key="gettersPost.id">
            <div id="headerMessage" >
                <div id="userInfo">
                    <div id="Username">{{ gettersPost.createdAt }}</div>
                </div>
                <div id="title">{{ gettersPost.title }}</div>
                <router-link :to="{name: 'Edition', params: {id: gettersPost.id}}" v-if="user.userId === gettersPost.authorId || user.role === 'ADMIN'">
                    <button id="edit">Editer</button>
                </router-link>
            </div>
            <div id="content">{{ gettersPost.content }}</div>
        </div>
        <div id="TextBox">
            <form @submit.prevent="addPost" method="POST" class="form-message"> 
                <textarea name="title" id="title" rows="1" placeholder="Entrez votre titre..." v-model.trim="Form.title" required></textarea>
                <textarea name="content" id="content" rows="12" cols="35" maxlength="500" placeholder="Envoyez votre message..." v-model.trim="Form.content" required></textarea><br>
                <div>
                    <input type="submit" name="submit" value="Envoyer le message">
<!--                     <input type="file" @change="onFileSelected"> -->
                </div>
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
/*                 selectedFile: null */
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
        gettersUser(){
            return this.$store.getters.user
        }

    },    
    methods: {
        addPost() {
            axios.post('/forum', this.Form).then(() => this.$store.dispatch('getPosts')).catch(error => console.log(error));     //objet data
        },
        /* onFileSelected(event){
            this.Form.selectedFile = event.target.files[0]
            console.log(event);
        } */

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
        justify-content: space-around;
        padding: 10px 5px 5px 5px ;
        background-color: #5b7491;
        
        #userInfo {
            display: flex;

            #firstName {
                margin: 0 10px 0 0;
            }
        }
    }

    #content {
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