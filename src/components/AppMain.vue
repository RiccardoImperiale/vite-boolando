<script>
import ProductCard from './ProductCard.vue';
import { store } from '../store.js'

export default {
    name: 'AppMain',
    props: { product: Object },
    components: {
        ProductCard
    },
    data() {
        return {
            store,
        }
    },
    mounted() {
        this.store.getProducts();
    }
}
</script>

<template>
    <main>
        <div class="container cards_container">
            <ProductCard :product="product" v-for="product in store.products" :key="product.id" />
        </div>
    </main>
</template>

<style></style>