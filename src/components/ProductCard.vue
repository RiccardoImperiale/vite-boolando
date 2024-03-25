<script>

export default {
    name: 'ProductCard',
    props: { product: Object },
    data() {
        return {
            imageHover: false
        }
    }
}
</script>

<template>
    <div class="card">
        <div class="card_image">
            <!-- <img @mouseover="imageHover = true" @mouseleave="imageHover = false"
                :src="imageHover ? product.backImage : product.frontImage" alt=""> -->
            <div class="images_container" @mouseover="imageHover = true" @mouseleave="imageHover = false">
                <Transition>
                    <img v-if="imageHover" :src="product.backImage" alt="">
                    <img v-else :src="product.frontImage" alt="">
                </Transition>
            </div>
            <div class="heart">&hearts;</div>
            <div class="promo_badges">
                <div v-for="badge in product.badges2"
                    :class="badge.type === 'discount' ? 'percentage' : 'sustainability'" class="badge">{{ badge.value }}
                </div>
                <!-- <div v-if="'value' in product.badges2[0]" class="badge percentage">
                    {{ product.badges2[0].value }}
                </div>
                <div v-if="'value' in product.badges2[0]" class="badge sustainability">Sostenibilità</div> -->
            </div>
        </div>
        <div class="card_text">
            <h5 class="brand">{{ product.brand }}</h5>
            <h4>{{ product.name }}</h4>
            <div class="price">
                <span class="new_price">{{ product.price.newPrice }} &euro; </span>
                <span v-if="'oldPrice' in product.price" class="old_price">{{ product.price.oldPrice }}
                    &euro;</span>
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
