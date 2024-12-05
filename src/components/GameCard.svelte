<script lang="ts">
  import { assets } from "$app/paths";
  import { onMount } from "svelte";

  import { createEventDispatcher } from "svelte";
  
  const dispatch = createEventDispatcher();
  
  export let cardName: string;
  export let cardKey: number;
  export let initialDelay: number;
  export let flipTrigger: boolean;

  let clickable = false;

  // Delay in milliseconds (e.g., 2000ms = 2 seconds)
  const delay = initialDelay + (cardKey+1) * 500 + Math.max(0, (cardKey - 2) * 1350);

  onMount(() => {
    const gameCard = document.getElementById(`game-card-inner-${cardKey}`);
    // Set a timeout to update the 'flipped' variable after the specified delay
    setTimeout(() => {
      gameCard?.style.setProperty('transform', 'rotateY(180deg)');
      dispatch('update', cardKey);
      clickable = true;
    }, delay);
  });

  function clickCard() {
    if (clickable) {
      dispatch('update', 5);
    }
  }

  $: if (flipTrigger) {
    const gameCard = document.getElementById(`game-card-inner-${cardKey}`);
    gameCard?.style.setProperty('transform', 'rotateY(0deg)'); // React to changes in the `trigger` prop
    setTimeout(() => {
      dispatch('update', -cardKey);
    }, 1000);
  }
</script>

<button on:click={clickCard}>
  <div class="game-card">
    <div class="game-card-inner" id="game-card-inner-{cardKey}">
      <div class="game-card-back">
        <img src="{assets}/cards/BACK.svg" alt="Back" id="game-card-back-img-{cardKey}">
      </div>
      <div class="game-card-front">
        <img src="{assets}/cards/{cardName}" alt="Card">
      </div>
    </div>
  </div>
</button> 

<style>
.game-card {
  padding: 10px;
  background-color: transparent;
  width: 10rem;
  height: 13rem;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.game-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1.5s;
  transform-style: preserve-3d;
}

/* Position the front and back side */
.game-card-front, .game-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 7px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Add shadow */
}

.game-card img {
    display: block; /* Remove any space below the image */
    width: 100%; /* Make the image responsive */
    height: auto; /* Maintain aspect ratio */
  }

.game-card-front {
  /* background-color: dodgerblue;
  color: white; */
  transform: rotateY(180deg);
}

.game-card-front img {
  /* background-color: dodgerblue;
  color: white; */
  transform: scaleX(1.0425);
  width: 100%;
  height: 100%;
}

.game-card-back img {
  /* transform: scaleY(0.943) */
  transform: scaleX(1.07);

  width: 100%;
  height: 100%
}
</style>