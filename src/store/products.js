import { writable } from "svelte/store";

const products = writable([{ id: 1, prod: "T-shirt" }]);

export const productStore = {
  items: products,
  subscribe: products.subscribe,
  addItem: (item) => {
    return products.update((items) => [...items, item]);
  },
  removeItem: (id) => {
    return products.filter((pro) => pro.id !== id);
  },
};
