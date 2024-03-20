import { defineStore } from "pinia";

interface Product {
  id: number;
  name: string;
  price: number;
}

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {
    totalProducts: (state) => state.products.length,
    filterByPrice: (state) => {
      return (priceLimit: number) =>
        state.products.filter((product) => product.price > priceLimit);
    },
  },
  actions: {
    addProduct(newProduct: Product) {
      this.products.push(newProduct);
    },
    removeProduct(productId: number) {
      this.products = this.products.filter(
        (product) => product.id !== productId
      );
    },
  },
});
