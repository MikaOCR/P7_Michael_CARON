<template>
    <div id="profileBloc">
        <h1>Votre Profil</h1>
        <div id="userBloc">
            <div class="userInfo">
                <p>Nom d'utilisateur : {{ user.userName }}</p>
            </div>
            <div class="userInfo">
                <p>Adresse email : {{ user.userEmail }}</p>
            </div>
            <button id="delete" @click.prevent="deleteUser" v-if="user.userEmail"> Supprimer </button>
        </div>
        <div id="bioText">
            {{ content.bio }}
        </div>
        <div id="bio">
            <form @submit.prevent="addBio" method="POST">
                <textarea name="bio" id="bioArea" rows="12" cols="35" maxlength="400" placeholder="Ecrivez votre bio..." v-model="Form.content"></textarea><br>
                <input type="submit" name="submit" value="Valider">   
            </form>         
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
    data(){
        return {
            content: [],
            Form: {
                user: '',
                content:'',
            }
        }
    },
    methods: {
        addBio(){
            axios.post('/profil/' + this.$route.params.id, this.Form).then(response => console.log(response));
            this.$router.replace('/forum');
        },
        deleteUser(){
            axios.delete('/profil/' + this.$route.params.id).then(response => console.log(response));
            const removeToken = sessionStorage.removeItem('token');
            this.$router.replace('/login');
            console.log(removeToken);
        }        
    },
    computed: {
    ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
        })
	},
    mounted(){
        axios.get('/profil/' + this.$route.params.id).then(response => this.content = response.data)
    }

}
</script>

<style lang="scss" scoped>

#profileBloc {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
}

#userBloc {
    display: flex;
    align-items: center;

    .userInfo {
        margin: 0 10px 0 0;
    }
}

#bioText {
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 30%;
    height: 220px;
    background-color: #ffff;
}

#bio {
    text-align: center;
}

</style>