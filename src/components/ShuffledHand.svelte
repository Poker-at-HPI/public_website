<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import GameCard from "./GameCard.svelte";

  let key = 0;
  const chosenCards: string[] = [];
  // let range: number[] = [];
  const shuffleCards = () => {
    console.log('shuffling')
    chosenCards.length = 0;
    // range.length = 0;
    const colors: string[] = ["CLUB", "DIAMOND", "HEART", "SPADE"];
    const numbers: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11-JACK", "12-QUEEN", "13-KING"];

    for (let i = 0; i < 5; ++i) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
      const randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
      chosenCards.push(`${randomColor}-${randomNumber}.svg`);
      console.log(chosenCards[chosenCards.length-1])
    }

    // range = Array.from({ length: chosenCards.length }, (_, i) => i);
    key +=1;
  }

  shuffleCards();

</script>

{#key key}
<Container>
  <button on:click={shuffleCards}>new hand</button>
  <div class='cards-container'>
    {#each [0, 1, 2, 3, 4] as idx}
        <GameCard cardName={chosenCards[idx]} cardKey={idx}/> 
    {/each}
  </div>
</Container>
{/key}
<style>
.cards-container{
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
}
  
</style>