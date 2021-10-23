<script>
  import { productStore } from "../../store/products";
  import { cartStore } from "../../store/cart";
  import Card from "../../shared/card.svelte";
  import Button from "../../shared/button.svelte";
  const { items } = productStore;
  const { addItem } = cartStore;

  let productId = "";

  const addToCartHandler = (id) => {
    const findPro = $items.find((it) => it.id === id);
    console.log(findPro);
    addItem(findPro);
  };
</script>

<main>
  Products List
  {#each $items as item (item.id)}
    <div class="section">
      <Card>
        <form
          on:submit|preventDefault={() => addToCartHandler(item.id)}
          class="item"
        >
          <p class="p">{item.prod}</p>
          <Button type="submit" label="Add To Cart" />
        </form>
      </Card>
    </div>
  {/each}
</main>

<style>
  .section {
    display: flex;
    flex-direction: column;
  }

  .item {
    display: flex;
    width: 100%;
    align-items: baseline;
  }
  .p {
    flex: 1;
  }
</style>
