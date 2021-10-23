<script>
  import { createEventDispatcher } from "svelte";
  export let value = "";

  const onInputHandler = (event) => {
    const value = event.target.value;
    console.log(value);
    createEventDispatcher("input-value", value);
  };
</script>

<main>
  <input bind:value on:input={onInputHandler} />
</main>
