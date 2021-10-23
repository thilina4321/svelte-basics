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
    width: 95%;
    margin: 0 auto;
    padding: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
</style>
