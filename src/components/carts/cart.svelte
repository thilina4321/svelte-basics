<script>
    import { cartStore } from "../../store/cart";
    import Card from "../../shared/card.svelte";
    const { items } = cartStore;
  </script>
  
  <main>
    Cart List
    {#each $items as item (item.id)}
      <div class="section">
        <Card>
          <div class="item">
            <p class="p">{item.prod}</p>
          </div>
        </Card>
      </div>
    {/each}
  </main>
  
  <style>
    .section {
      display: flex;
      flex-direction: column;
    }
  
    .item {
      display: flex;
      width: 100%;
      align-items: baseline;
    }
    .p {
      flex: 1;
    }
  </style>
  