<script>
  import { products, cart } from "../store";
  import Card from "../components/UI/card.svelte";
  import Input from "../components/UI/input.svelte";
  import Button from "../components/UI/button.svelte";

  $: productName = "";

  const addProductHandler = () => {
    const product = {
      id: $products.length + 1,
      name: productName,
    };

    const prods = [...$products, product];
    products.set(prods);
  };
</script>

<main>
  <form on:submit|preventDefault={addProductHandler}>
    <Input
      placeholder="Add New Product"
      value={productName}
      on:input-data={(data) => (productName = data.detail)}
    />
    <Button type="submit" label="Add Product" />
  </form>
  {#each $products as product (product.id)}
    <Card>{product.name}</Card>
  {/each}
</main>
