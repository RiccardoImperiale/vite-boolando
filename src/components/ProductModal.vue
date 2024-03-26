<script>
import { store } from '../store.js'

export default {
    name: 'ProductModal',
    props: { product: Object },
    data() {
        return {
            store,
            frontImage: true
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
                        <img v-if="frontImage" :src="'./img/' + product.frontImage" alt="">
                        <img v-else :src="'./img/' + product.backImage" alt="">
                        <div class="promo_badges">
                            <div v-for="badge in product.badges.slice().reverse()"
                                :class="badge.type === 'discount' ? 'percentage' : 'sustainability'" class="badge">
                                {{ badge.value }}
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <i @click="frontImage = !frontImage" class="prev fa-solid fa-circle-chevron-left"></i>
                        <i @click="frontImage = !frontImage" class="next fa-solid fa-circle-chevron-right"></i>
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
