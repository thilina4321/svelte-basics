<script>
  import { beforeUpdate, onMount } from "svelte";
  let value = "";
  let items = [];

  const getDatas = async () => {
    const getData = await fetch(
      "https://shop-446d1-default-rtdb.firebaseio.com/items.json"
    );
    const res = await getData.json();
    for (const key in res) {
      if (Object.hasOwnProperty.call(res, key)) {
        const element = res[key];
        items = [...items, { id: key, value: element }];
      }
    }
  };

  onMount(() => {
    getDatas();
  });

  const addItemHandler = async () => {
    const data = JSON.stringify(value);
    const item = await fetch(
      "https://shop-446d1-default-rtdb.firebaseio.com/items.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }
    );

    const res = await item.json();
    for (const key in res) {
      if (Object.hasOwnProperty.call(res, key)) {
        const id = res[key];
        items = [...items, { id, value }];
      }
    }
    value = "";
  };

  const deleteItemHandler = async (id) => {
    items = items.filter((data) => data.id !== id);
    console.log(items);
    const item = await fetch(
      `https://shop-446d1-default-rtdb.firebaseio.com/items/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
</script>

<main>
  <h2>Http Component</h2>
  <input bind:value />
  <button on:click={addItemHandler}> Add Item </button>

  <h2>Data List</h2>
  {#each items as item (item.id)}
    <p>{item.value}</p>
    <span on:click={() => deleteItemHandler(item.id)}> x </span>
  {/each}
</main>
