<script>
import { store } from '../store.js'

export default {
    name: 'ProductModal',
    props: { product: Object },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="modal">
        <div class="card">
            <div class="card_header">
                <i @click="$emit('closeModal')" class="fa-solid fa-circle-xmark"></i>
            </div>
            <div class="card_main">

                <div class="card_left">
                    <div class="card_image">
                        <img :src="'./img/' + product.frontImage" alt="">
                    </div>

                </div>

                <div class="card_right">
                    <div class="card_text">
                        <h5 class="brand">{{ product.brand }}</h5>
                        <h4>{{ product.name }}</h4>
                        <div class="price">
                            <span v-if="product.badges.some(badge => badge.type === 'discount')" class="new_price">
                                {{ store.getDiscountedPrice(product.price, product.badges.find(badge =>
                    badge.type === 'discount').value) }}&euro;
                            </span>
                            <span v-else class="new_price">{{ product.price }}&euro;</span>
                            <span v-if="product.badges.find(badge => badge.type === 'discount')" class="old_price">
                                {{ product.price }}&euro;
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
