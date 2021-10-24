import { writable } from "svelte/store";

const items = writable([]);

export const itemsStore = {
  itemss: items,
  subscribe: items.subscribe,
  addItem: (item) => {
    return items.update((items) => [...items, item]);
  },
  removeItem: (id) => {
    return items.update((items) => {
      return items.filter((item) => item.id !== id);
    });
  },
};
