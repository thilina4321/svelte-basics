<script>
  export let label = "";
  export let type = "button";
</script>

<main>
  <div style="text-align: end;">
    <button class="btn" {type}> {label} </button>
  </div>
</main>

<style>
  .btn {
    color: white;
    background-color: black;
    padding: 5px;
    border-radius: 2px;
  }
</style>
