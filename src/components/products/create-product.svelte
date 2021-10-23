<script>
  import Card from "../../shared/card.svelte";
  import Input from "../../shared/input.svelte";
  let value = "";

  const getValue = (event) => {
    console.log(event.detail);
  };
</script>

<main>
  <Card>
    <Input {value} on:input-value={getValue} />
  </Card>
</main>
