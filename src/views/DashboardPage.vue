<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard. Total products: {{ totalProducts }}</p>

    <!-- Product List -->
    <div v-for="product in products" :key="product.id">
      {{ product.name }} - ${{ product.price }}
      <button @click="removeProduct(product.id)">Remove</button>
    </div>

    <!-- Add Product Form -->
    <div>
      <input v-model="newProduct.id" type="number" placeholder="ID" />
      <input v-model="newProduct.name" type="text" placeholder="Name" />
      <input v-model="newProduct.price" type="number" placeholder="Price" />
      <button @click="addNewProduct">Add Product</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useProductStore } from "@/store/productStore";

export default {
  name: "DashboardPage",
  setup() {
    const productStore = useProductStore();
    const newProduct = ref({ id: 0, name: "", price: 0 });

    const addNewProduct = () => {
      productStore.addProduct({ ...newProduct.value });
      newProduct.value = { id: 0, name: "", price: 0 }; // Reset form
    };

    return {
      products: productStore.products,
      totalProducts: productStore.totalProducts,
      newProduct,
      addNewProduct,
      removeProduct: productStore.removeProduct,
    };
  },
};
</script>

<style scoped>
h1 {
  color: #4a90e2;
  text-align: center;
}

div {
  padding: 20px;
  text-align: center;
}

button {
  margin-left: 10px;
}
</style>
