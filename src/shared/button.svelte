<script>
  export let label = "";
  export let type = "button";

  
</script>

<main>
  <button  class="btn" {type}> {label} </button>
</main>

<style>
  .btn {
    color: white;
    background-color: black;
    border-radius: 10px;
    padding: 1 rem;
  }
</style>
