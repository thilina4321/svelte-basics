<script>
  import { createEventDispatcher } from "svelte";
  export let placeholder = "";
  export let value = "";

  const dispath = createEventDispatcher();

  const onInputHandler = (e) => {
    const inputData = e.target.value;
    dispath('input-data', inputData);
  };
</script>

<main>
  <input class="input" {placeholder} bind:value on:input={onInputHandler} />
</main>

<style>
  .input {
    width: 100%;
  }
</style>
