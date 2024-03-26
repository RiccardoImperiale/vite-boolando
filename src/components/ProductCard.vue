<script>

export default {
    name: 'ProductCard',
    props: { product: Object },
    data() {
        return {
            imageHover: false
        }
    },
    methods: {
        getDiscountedPrice(price, discount) {
            const percentageValue = Math.abs(parseInt(discount));
            const discountedPrice = price - (price / 100) * percentageValue;
            return Math.floor(discountedPrice * 100) / 100; // get only 2 decimals without rounding the number
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="card_image">
            <div class="images_container" @mouseover="imageHover = true" @mouseleave="imageHover = false">
                <Transition>
                    <img v-if="imageHover" :src="'./img/' + product.backImage" :alt="product.name">
                    <img v-else :src="'./img/' + product.frontImage" :alt="product.name">
                </Transition>
            </div>
            <div class="heart">&hearts;</div>
            <div class="promo_badges">
                <div v-for="badge in product.badges.slice().reverse()"
                    :class="badge.type === 'discount' ? 'percentage' : 'sustainability'" class="badge">{{ badge.value }}
                </div>
            </div>
        </div>
        <div class="card_text">
            <h5 class="brand">{{ product.brand }}</h5>
            <h4 @click="$emit('showProduct', product)">{{ product.name }}</h4>
            <div class="price">
                <span v-if="product.badges.some(badge => badge.type === 'discount')" class="new_price">
                    {{ getDiscountedPrice(product.price, product.badges.find(badge => badge.type ===
                'discount').value) }}&euro;
                </span>
                <span v-else class="new_price">{{ product.price }}&euro;</span>
                <span v-if="product.badges.find(badge => badge.type === 'discount')" class="old_price">{{ product.price
                    }}&euro;</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
