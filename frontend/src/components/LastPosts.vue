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
                <div id="timeStamp"> message envoyé le 22/02/2022 à 12h00</div>
            </div>
            <div id="comment">{{ post.post }}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'lastPost',
    data () {
        return {
            posts: [],
        }
    },
    methods: {
        getPost(){
            axios.get('/forum').then(response => this.posts = response.data).catch(error => console.log(error));
        }
    },
    beforeMount(){
    this.getPost()
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
</style>