import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    products: [],

    getProducts() {
        axios.get('http://localhost:3000/products').then(res => {
            console.log(res.data);
            this.products = res.data;
        }).catch(err => console.error(err.message));
    }
})