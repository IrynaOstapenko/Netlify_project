<template>
	<div class="cart">
		<div class="cart__item-count">({{ itemCount }})</div>
		<div class="cart__items">
			<div class="cart__item" v-for="(item, index) in cartItems">
				<span>{{ item.name }}</span>
				<button class="cart__item-remove" @click="removeItem(index)">X</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			this.$store.dispatch('getFromLocalStorage');
		},
		
		computed: {
			cartItems() {
				return this.$store.getters.getItems;
			},
			
			itemCount() {
				return this.$store.getters.getItemCount;
			}
		},

		methods: {
			removeItem(itemIndex) {
				this.$store.dispatch('removeItem', itemIndex)
			}
		}
	}
</script>

<style>
	.cart {
		text-align: right;
	}

	.cart__item-remove {
		margin-left: 0.25em;
	}
</style>
