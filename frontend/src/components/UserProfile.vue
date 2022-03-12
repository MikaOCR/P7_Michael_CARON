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
        </div>
        <div id="bioText">
            Ceci est une bio    <!-- {{ content }} -->
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
            Form: {
                user: '',
                content:'',
            }
        }
    },
    methods: {
        addBio(){
            axios.post('/profil', this.Form).then(response => console.log(response))
        },

        getBio(){
            axios.get('/profil').then(response => console.log(response))
        }
    },
    computed: {
    ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
    })
	},

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
    margin: 10px 0 10px 0;
    width: 30%;
    height: 220px;
    background-color: #ffff;
}

#bio {
    text-align: center;
}

</style>