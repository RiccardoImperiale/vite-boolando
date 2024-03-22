<script>
import ProductCard from './ProductCard.vue';

export default {
    name: 'AppMain',
    props: { product: Object },
    components: {
        ProductCard
    },
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
                }
            ]
        }
    }
}
</script>

<template>
    <main>
        <div class="container cards_container">
            <ProductCard :product="product" v-for="product in products" />
        </div>
    </main>
</template>

<style></style>
