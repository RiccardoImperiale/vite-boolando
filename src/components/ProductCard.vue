<script>
export default {
    name: 'ProductCard',
    props: ['product'],
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="card">
        <div class="card_image">
            <img @mouseover="product.imageHover = true" @mouseleave="product.imageHover = false"
                :src="product.imageHover ? product.srcOnHover : product.src" :alt="product.name">
            <div class="heart">&hearts;</div>
            <div class="promo_badges">
                <div v-if="'sale' in product.badges" class="badge percentage">
                    {{ product.badges.sale }}
                </div>
                <div v-show="product.badges.sustainable" class="badge sustainability">Sostenibilità</div>
            </div>
        </div>
        <div class="card_text">
            <h5 class="brand">{{ product.brand }}</h5>
            <h4>{{ product.name }}</h4>
            <div class="price">
                <span class="new_price">{{ product.price.newPrice }} &euro;</span>
                <span v-if="'oldPrice' in product.price" class="old_price">{{ product.price.oldPrice }}
                    &euro;</span>
            </div>
        </div>
    </div>

</template>

<style></style>
