import { writable } from "svelte/store";

export const products = writable([
  { id: 1, name: "T-Shirt" },
  { id: 2, name: "Denim" },
  { id: 3, name: "Frog" },
]);

export const cart = writable([]);
