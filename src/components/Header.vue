<template>
	<header class="header">
		<div class="header__logo">
			<RouterLink :to="{ name: 'home'}">Logo</RouterLink>
		</div>

		<nav class="header__navigation">
			<RouterLink class="header__navigation-link" v-for="page in pagesFromStore" :to="{ name: 'page', params: { page_id: page.id } }">{{ page.title }}</RouterLink>
		</nav>	

		<div class="header__cart"><Cart /></div>	
	</header>
</template>

<script>
	import Cart from '../components/Cart.vue';

	export default {
		components: {
			Cart
		},
		computed: {
			pagesFromStore() {
				// return this.$store.state.navigation.pages; (dette funker men ikke gjor det)
				return this.$store.getters['getPages'];
			}
		}
	};
</script>

<style>
	header {
		background: #fff;
		display: flex;
		justify-content: space-between;
	}
 
	.header__navigation-link {
		margin-left: 1em;
		color: rgb(37, 78, 29);
		text-decoration: none;
	}

	.header__navigation-link:hover {
		font-weight: bolder;
	}
</style>
