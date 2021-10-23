<script>
  import { createEventDispatcher } from "svelte";
  export let value = "";

  const dispath = createEventDispatcher();

  const onInputHandler = (event) => {
    const value = event.target.value;
    dispath("input-value", value);
  };
</script>

<main>
  <input class="input" {value} on:input={onInputHandler} />
</main>

<style>
  .input {
    width: 100%;
  }
</style>
