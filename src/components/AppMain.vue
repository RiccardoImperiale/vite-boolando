<script>
import ProductCard from './ProductCard.vue';
import { products } from '../data.js'

export default {
    name: 'AppMain',
    props: { product: Object },
    components: {
        ProductCard
    },
    data() {
        return {
            products
        }
    }
}
</script>

<template>
    <main>
        <div class="container cards_container">
            <ProductCard :product="product" v-for="product in products" :key="product.id" />
        </div>
    </main>
</template>

<style></style>
