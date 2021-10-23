import { writable } from "svelte/store";

const cart = writable([]);

export const cartStore = {
  items: cart,
  addItem: (item) => {
    return cart.update((cart)=> [...cart, item]);
  },
};
