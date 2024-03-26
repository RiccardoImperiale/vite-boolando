<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import ProductModal from './components/ProductModal.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    ProductModal
  },
  data() {
    return {
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

}

</script>

<template>

  <AppHeader />
  <AppMain :showProduct="showProduct" />
  <ProductModal :product="productModal" v-if="isModalOpen" @close-modal="isModalOpen = false" />
  <AppFooter />

</template>

<style></style>
