<script lang="ts">
  import { onMount } from 'svelte';

  import Container from "$lib/components/Container.svelte";
  import GameCard from "./GameCard.svelte";

  let key = 0;
  let chosenCards: string[] = [];
  const shuffleCards = () => {
    chosenCards = [];
    const colors: string[] = ["CLUB", "DIAMOND", "HEART", "SPADE"];
    const numbers: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11-JACK", "12-QUEEN", "13-KING"];

    for (let i = 0; i < 5; ++i) {
      let j = 0, randomColor, randomNumber;
      do {
        j++;
        randomColor = colors[Math.floor(Math.random() * colors.length)]; 
        randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      } while (chosenCards.includes(`${randomColor}-${randomNumber}.svg`) && j < 100);
      chosenCards.push(`${randomColor}-${randomNumber}.svg`);
    }

    key +=1;
  };

  onMount(() => {
    shuffleCards();
  });

</script>

{#key key}
<Container>
  <!-- <button on:click={shuffleCards}>new hand</button> -->
  <div class='cards-container'>
    {#each chosenCards as card, idx}
      <GameCard cardName={card} cardKey={idx}/> 
    {/each}
  </div>
</Container>
{/key}
<style>

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.cards-container > * {
  flex: 1 1 calc(20% - 1rem); /* Adjusted to allow 5 cards per row */
  margin: 0.5rem;
}

@media (max-width: 800px) {
  .cards-container > * {
    flex: 1 1 calc(33.33% - 1rem); /* Adjusted to allow 3 cards per row */
  }
}
</style>