<script>

export default {
    name: 'AppMain',
    data() {
        return {
            products: [
                {
                    name: 'Relaxed fit tee unisex',
                    brand: "Levi's",
                    src: '/img/1.webp',
                    srcOnHover: '/img/1b.webp',
                    imageHover: false,
                    price: {
                        newPrice: '14,99',
                        oldPrice: '29,99'
                    },
                    badges: {
                        sale: '-50%',
                        sustainable: true
                    }
                },
                {
                    name: 'Rose tee',
                    brand: 'Guess',
                    src: '/img/2.webp',
                    srcOnHover: '/img/2b.webp',
                    imageHover: false,
                    price: {
                        newPrice: '20,99',
                        oldPrice: '29,99'
                    },
                    badges: {
                        sale: '-30%',
                        sustainable: false
                    }
                },
                {
                    name: 'Voglia di colori pastello',
                    brand: 'Come Zucchero Filato',
                    src: '/img/3.webp',
                    srcOnHover: '/img/3b.webp',
                    imageHover: false,
                    price: {
                        newPrice: '129,99',
                        oldPrice: '184,99'
                    },
                    badges: {
                        sale: '-30%',
                        sustainable: false
                    }
                },
                {
                    name: 'Voglia di colori pastello',
                    brand: "Levi's",
                    src: '/img/4.webp',
                    srcOnHover: '/img/4b.webp',
                    imageHover: false,
                    price: {
                        newPrice: '14,99',
                        oldPrice: '29,99'
                    },
                    badges: {
                        sale: '-50%',
                        sustainable: true
                    }
                },
                {
                    name: 'Stripe Bodice',
                    brand: 'Maya Deluxe',
                    src: '/img/5.webp',
                    srcOnHover: '/img/5b.webp',
                    imageHover: false,
                    price: {
                        newPrice: '99,99',
                    },
                    badges: {
                    }
                },
                {
                    name: 'Maglione - Black',
                    brand: 'Espirit',
                    src: '/img/6.webp',
                    srcOnHover: '/img/6b.webp',
                    imageHover: false,
                    price: {
                        newPrice: '29,99',
                    },
                    badges: {
                        sustainable: true
                    }
                },

            ]
        }
    }
}
</script>

<template>
    <main>
        <!-- Cards -->
        <div class="container cards_container">
            <!-- First Card  -->
            <div v-for="(product, index) in products" class="card" :key="index">
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

        </div>
    </main>
</template>

<style></style>
