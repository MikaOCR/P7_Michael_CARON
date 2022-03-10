<template>
	<div id="NavLink">
		<div id="logged">
			<router-link :to="{ name: 'Forum' }">Accueil</router-link> 
			<router-link :to="{ name: 'UserProfile' }">Profil</router-link>
			<router-link @click.prevent="handleLogout" :to="{ name: 'Login' }">Se déconnecter</router-link>			
			<router-link :to="{ name: 'Register' }">S'inscrire</router-link>
			<router-link :to="{ name: 'Login' }">Se connecter</router-link>		
		</div>		
	</div>
</template>

<script>
export default {
	name: 'NavLink',
	data(){
		return{

		}
	},
	methods: {
/* 		created(){
			const LoggedUser = sessionStorage.getItem('userAuth')
			console.log(LoggedUser);
		},

		notLogged(){
			const notYetLogged = sessionStorage.getItem();
			console.log(notYetLogged);

		}, */

		handleLogout(){
            sessionStorage.removeItem('userAuth');
            this.$router.push('/login');
        },
	},
}
</script>

<style>

</style>