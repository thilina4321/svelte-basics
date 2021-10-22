<script>
  import { beforeUpdate, onMount } from "svelte";

  $: toggleValue = true;

  onMount(() => {
    console.log("App is mounted");
  });

  beforeUpdate(() => {
    console.log("Before mount");
  });

  const onToggleHandler = () => {
    toggleValue = !toggleValue;
  };
</script>

<main>
  Life cycle hooks
  <button on:click={onToggleHandler}> Click Me </button>
  {toggleValue}
</main>
