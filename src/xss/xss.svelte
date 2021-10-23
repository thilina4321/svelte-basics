<script>
  $: content = "";
</script>

<main>
  <input bind:value={content} />
  <p>{@html content}</p>
</main>
