<script>
  import CreateProduct from "../components/products/create-product.svelte";
  import ProductList from "../components/products/product-list.svelte";
  import CartList from "../components/carts/cart.svelte";
</script>

<main>
  <h1>Svelte Shop</h1>
  <div class="layout">
    <CreateProduct />
    <div class="sub-layout">
      <ProductList />
      <CartList />
    </div>
  </div>
</main>

<style>
  .layout {
    display: flex;
    width: 80%;
    margin: 10px auto;
    flex-direction: column;
  }

  .sub-layout {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
</style>
