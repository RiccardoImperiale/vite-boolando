<script>
import ProductCard from './ProductCard.vue';
import ProductModal from './ProductModal.vue';
import { store } from '../store.js'

export default {
    name: 'AppMain',
    props: ['product', 'showProduct'],
    components: {
        ProductCard,
        ProductModal
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
            <ProductCard :product="product" v-for="product in store.products" :key="product.id"
                @show-product="showProduct" />
        </div>
    </main>
</template>

<style></style>