<script>
  import Feedback from "./pages/feedback.svelte";
</script>

<main>
  <Feedback />
</main>
<!-- <script>
  import { each } from "svelte/internal";

  export let name;
  let arr = [
    {
      id: "1",
      name: "thilina",
    },
    {
      id: "2",
      name: "dilshan",
    },
    {
      id: "3",
      name: "heiya",
    },
  ];

  $: btnName = "Click Me";

  const toggleName = () => {
    if (btnName === "Click Me") {
      btnName = "Hello world";
    } else {
      btnName = "Click Me";
    }
  };

  const onAddUser = ()=>{
	  arr = [...arr, {id:'4', name:'hdhd'}]
  }
</script>

<main>
  <h1>Hello {name}!</h1>
  <button on:click={toggleName}> {btnName} </button>
  {#if btnName === "Click Me"}
    <p>This shows conditionally</p>
  {/if}

  {#each arr as ar (ar.id)}
    <p>{ar.name}</p>
  {/each}

  <button on:click={onAddUser}> Add Users </button>
</main>

<style>
</style> -->
