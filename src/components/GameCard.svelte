<script lang="ts">
    import { onMount } from "svelte";

  export let cardName: string;
  export let cardKey: number;

  // Delay in milliseconds (e.g., 2000ms = 2 seconds)
  const delay = (cardKey+1) * 500 + Math.max(0, (cardKey - 2) * 1350);

  onMount(() => {
    const gameCard = document.getElementById(`game-card-inner-${cardKey}`);
    console.log('here')
    // Set a timeout to update the 'flipped' variable after the specified delay
    setTimeout(() => {
      gameCard?.style.setProperty('transform', 'rotateY(180deg)')
    }, delay);
  });
</script>

<!-- <img class='card' src='/cards/BACK.svg' alt='card'/> -->

<div class="game-card">
  <div class="game-card-inner" id="game-card-inner-{cardKey}">
    <div class="game-card-back">
      <img src="/cards/BACK.svg" alt="Back">
    </div>
    <div class="game-card-front">
      <img src="/cards/{cardName}" alt="Back">
    </div>
  </div>
</div> 

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

.game-card-back img {
  transform: scaleY(0.943)
}
</style>