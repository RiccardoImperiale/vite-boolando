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
        <div v-if="isModalOpen" class="modal">
            <div class="card">
                <div class="card_header">
                    <i @click="isModalOpen = false" class="fa-solid fa-circle-xmark"></i>
                </div>
                <div class="card_main">

                    <div class="card_left">
                        ger
                    </div>
                    <div class="card_right">
                        <div class="card_text">
                            <h5 class="brand">{{ productModal.brand }}</h5>
                            <h4>{{ productModal.name }}</h4>
                            <!-- <div class="price">
                        <span v-if="product.badges.some(badge => badge.type === 'discount')" class="new_price">
                            {{ getDiscountedPrice(product.price, product.badges.find(badge => badge.type ===
                'discount').value) }}&euro;
                        </span>
                        <span v-else class="new_price">{{ product.price }}&euro;</span>
                        <span v-if="product.badges.find(badge => badge.type === 'discount')" class="old_price">{{
                product.price
                            }}&euro;</span>
                    </div> -->
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>