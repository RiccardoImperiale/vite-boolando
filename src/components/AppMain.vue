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
            isModalOpen: false,
            productModal: {}
        }
    },
    methods: {
        showProduct(prod) {
            console.log(prod);
            this.isModalOpen = true
            this.productModal = { name: prod.name }
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
        <div v-if="isModalOpen" class="modal">
            <div class="card">
                {{ productModal.name }}
            </div>
        </div>
    </main>
</template>

<style scoped>
.modal {
    background-color: rgba(132, 0, 255, 0.597);
    position: fixed;
    inset: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;

    .card {
        width: 500px;
        height: 700px;
        background-color: white;
        border-radius: 1rem;
    }
}
</style>