<template>
    <div class="product-overview">
        <div class="product-overview__product" v-for="product in products" :key="product.id">
            <div class="product-overview__product-title">{{ product.name }}</div>
            <div class="product-overview__product-price">{{ product.price }}</div>
            <div class="product-overview__product-controls">
                <button @click="addProductToCart(product)">Add to cart</button>
            </div>
        </div>
    </div>
    <!-- <Product v-for="product in products" :product="product" :key="product.id" /> -->    
</template>

<script>
import Product from '../components/Product.vue'
export default {
    components: {
        Product
    },
    computed: {
        products() {
            return this.$store.getters.getProducts;
        }
    },
    methods: {
        addProductToCart(product) {
            this.$store.commit('addToCart', product);
            this.$store.dispatch('setToLocalStorage', product);
        }
    }
}
</script>

<style>
    .product-overview {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 0.5em;
        grid-row-gap: 0.5em;
    }

    .product-overview__product {
        background: rgba(2, 248, 187, 0.1);
		margin-bottom: 1em;
        border: 0.7px solid rgb(37, 78, 29);
        border-radius: 10px;
    }

</style>
