<script>
  import Input from "../../shared/input.svelte";
  import Button from "../../shared/button.svelte";
  import {productStore} from '../../store/products'
  const {addItem, items} = productStore

  let value = "";


  const onSubmitHandler = () => {
      const id = $items.length + 1
      const item = {id , prod:value}
    addItem(item)
    value = ""
  };
</script>

<main>
  <section>
    <form class="section" on:submit|preventDefault={onSubmitHandler}>
      <div class="input">
        <Input {value} on:input-value={(event) => (value = event.detail)} />
      </div>
      <Button type="submit" label="Add Product" />
    </form>
  </section>
</main>

<style>
  .section {
    display: flex;
    width: 100%;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
    padding: 10px;
  }

  .input {
    flex: 1;
    margin-right: 5px;
  }
</style>
