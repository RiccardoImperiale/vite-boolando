<script>
import ProductCard from './ProductCard.vue';
import ProductModal from './ProductModal.vue';
import { store } from '../store.js'

export default {
    name: 'AppMain',
    props: { product: Object },
    components: {
        ProductCard,
        ProductModal
    },
    data() {
        return {
            store,
            isModalOpen: false,
            productModal: null
        }
    },
    methods: {
        showProduct(product) {
            this.isModalOpen = true;
            this.productModal = product;
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

        <ProductModal :product="productModal" v-if="isModalOpen" @close-modal="isModalOpen = false" />
    </main>
</template>

<style lang="scss" scoped></style>