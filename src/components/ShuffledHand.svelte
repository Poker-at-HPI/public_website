<script lang="ts">
  import { onMount } from 'svelte';

  import Container from "$lib/components/Container.svelte";
  import GameCard from "./GameCard.svelte";

  let key = 0;
  const chosenCards: string[] = [];
  // let range: number[] = [];
  const shuffleCards = () => {
    chosenCards.length = 0;
    // range.length = 0;
    const colors: string[] = ["CLUB", "DIAMOND", "HEART", "SPADE"];
    const numbers: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11-JACK", "12-QUEEN", "13-KING"];

    for (let i = 0; i < 5; ++i) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
      const randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
      chosenCards.push(`${randomColor}-${randomNumber}.svg`);
    }

    // range = Array.from({ length: chosenCards.length }, (_, i) => i);
    key +=1;
  };

  onMount(() => {
    shuffleCards();
  });

  shuffleCards();

</script>

{#key key}
<Container>
  <!-- <button on:click={shuffleCards}>new hand</button> -->
  <div class='cards-container'>
    {#each [0, 1, 2, 3, 4] as idx}
        <GameCard cardName={chosenCards[idx]} cardKey={idx}/> 
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
  flex: 0 1 auto;
  margin: 0.5rem;
}

@media (max-width: 600px) {
  .cards-container > * {
    flex: 1 1 45%;
  }
}

</style>