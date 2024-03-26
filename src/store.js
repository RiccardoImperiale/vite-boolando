import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    products: [],

    getProducts() {
        axios.get('http://localhost:3000/products').then(res => {
            this.products = res.data;
        }).catch(err => console.error(err.message));
    },
    getDiscountedPrice(price, discount) {
        const percentageValue = Math.abs(parseInt(discount));
        const discountedPrice = price - (price / 100) * percentageValue;
        return Math.floor(discountedPrice * 100) / 100; // get only 2 decimals without rounding the number
    }
})