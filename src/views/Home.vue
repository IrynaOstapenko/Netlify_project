<template>
	<!-- <div><button @click="addPageToStore">This adds a new page</button></div> -->	
	<ProductOverview />
</template>

<script>
	import ProductOverview from '../components/ProductOverview.vue';

	export default {
		components: {
			ProductOverview
		},
		methods: {
			addPageToStore() {
				this.$store.commit('addPage', { title: 'From home', id: 'from-home'})
			}
		}
	}
</script>

<style>
</style>