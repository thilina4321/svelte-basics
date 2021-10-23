<script>
</script>

<main>
  <div class="card">
    <slot />
  </div>
</main>

<style>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 10px auto;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  }
</style>
