<template>
	<ul id="navBloc">
		<template v-if="authenticated">
			<li>
				<router-link :to="{ name: 'Forum' }">Accueil</router-link>
			</li>
			<li>
				<router-link :to="{name: 'UserProfile', params: {id: user.userId}}">Profil</router-link>
			</li>
			<li>
				<a href="#" @click.prevent="logOut">Se déconnecter</a>
			</li>
		</template>
		<template v-else>
			<li>
				<router-link :to="{ name: 'Register' }">S'inscrire</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'Login' }">Se connecter</router-link>
			</li>
		</template>
	</ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters({
			authenticated: 'auth/authenticated',
			user: 'auth/user',
		})
	},
	methods: {
		logOut(){
			const removeToken = sessionStorage.clear();
			this.$router.replace('/login');
			console.log(removeToken);
		},

	}
}
</script>

<style lang="scss" scoped>

#navBloc {
	display: flex;
	list-style-type: none;
}
</style>