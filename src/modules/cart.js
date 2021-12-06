export default {
	state() {
		return {
			localStoreName: 'cart-state',
			shop: {
				currency: 'NOK',
				cart: [],
				products: [
					{ id: '001', name: 'Bread', price: 20 },
					{ id: '002', name: 'Milk', price: 10 },
					{ id: '003', name: 'Cheese', price: 30 },
					{ id: '004', name: 'Fish', price: 50 },
					{ id: '005', name: 'Meat', price: 90 },
				],
			},
		}
	},

	getters: {
		getProducts(state) {
			return state.shop.products;
		},

		getItems(state) {
			return state.shop.cart;
		},

		getItemCount(state) {
			return state.shop.cart.length;
		},
	},
	
	mutations: {
		addToCart(state, product) {
			state.shop.cart.push(product);
		},

		removeItem(state, itemIndex) {
			state.shop.cart.splice(itemIndex, 1);
		},

		setItems(state, items) {
			state.shop.cart = items;
		}
	},
 
	actions: {
		addToCart({ state, commit, dispatch, getters, rootState, rootGetters }, product) {
			commit('addToCart', product);
			dispatch('setToLocalStorage');
		},

		removeItem({ commit, dispatch }, itemIndex) {
			commit('removeItem', itemIndex);
			dispatch('setToLocalStorage');
		},

		setToLocalStorage({ state }) {
			window.localStorage.setItem(state.localStoreName, JSON.stringify(state.shop.cart));
		},
		
		getFromLocalStorage({ state, commit }) {
			/* 
				{
					'cart-state': '[{"id":"005","name":"Pear","price":90},{"id":"002","name":"Apple","price":10}]'
				} 
			*/
			
			const localCartState = window.localStorage.getItem(state.localStoreName);
			const localCartStateObject = JSON.parse(localCartState);

			commit('setItems', localCartStateObject);
		},

		removeFromLocalStorage({ state }) {
			window.localStorage.removeItem(state.localStoreName)
		},

		clearLocalStorage() {
			window.localStorage.clear();
		}
	}
}