<template>
  <div id="TextBox">
            <form @submit.prevent="created" method="POST" class="form-message"> 
                <textarea name="title" id="title" rows="1" placeholder="Entrez votre titre..." v-model.trim="Form.title" required></textarea>
                <textarea name="comment" id="comment" rows="12" cols="35" maxlength="500" placeholder="Envoyez votre message..." v-model.trim="Form.comment" required></textarea><br>
                <input type="submit" name="submit" value="Envoyer le message">
            </form>
        </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "TextBox",
    data() {
      return {
          Form: {
            title: '',
            comment: '',
        }
      }
    },
    
    methods: {
    async created() {
            const response = await axios.post('/forum', this.Form);
            console.log(response);
    },
    
  }
}
</script>

<style lang="scss" scoped>
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