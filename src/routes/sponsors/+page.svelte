<script lang="ts">
  import { assets } from "$app/paths";
  import { Container } from "$lib";
  import { onMount } from "svelte";
  
  let isWhiteMode = false;
  
  onMount(() => {
    console.log(window.getComputedStyle(document.body).getPropertyValue('background-color'));
    isWhiteMode = window.getComputedStyle(document.body).getPropertyValue('background-color') !== 'rgb(2, 8, 23)';
    const handleClick = () => {
      isWhiteMode = window.getComputedStyle(document.body).getPropertyValue('background-color') !== 'rgb(2, 8, 23)';
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick)
    }
  });

  $: quantcoSrc = `${assets}/sponsors/quantco_${isWhiteMode ? 'black' : 'white'}.svg`;
  $: meisterSystemsSrc = `${assets}/sponsors/ms_logo_${isWhiteMode ? 'black.jpg' : 'white.png'}`;
  $: googleSrc = `${assets}/sponsors/Google__G__logo.svg`;

</script>

<Container>
  <section class="sponsors-section">
    <div class="title-container">
      <i class="fas fa-star"></i>
      <h1>Sponsors</h1>
    </div>
    <h2>
      We are proud to present QuantCo as the main sponsor of HPI Showdown 2025:
    </h2>
    <div class="main-sponsor-container">
      <a href="https://www.quantco.com/">
        <img src={quantcoSrc} alt="Quantco" />
      </a>
    </div>
    <h2>
      Further support of the event is provided by:
    </h2>
    <div class="sponsor-container">
      <a  href="https://www.google.com/">
        <img id="google-image" src="{googleSrc}" alt="Google" />
      </a>
      <a href="https://meistersystems.de/en">
        <img id="meister-systems-image" src="{meisterSystemsSrc}" alt="MeisterSystems" />
      </a>
    </div>
  </section>
</Container>

<style>
  .title-container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .title-container h1 {
    margin: 0;
    display: flex;
    align-items: center;
  }

  .title-container i {
    /* padding: 1rem; */
    color: hsl(var(--accent));
    font-size: 1.8rem;
    padding: 1rem;
    padding-bottom: 0.8rem;
  }

  .sponsors-section {
    margin: 2rem;
  }

  .sponsors-section h1 {
    font-size: 2rem;
  }

  .sponsors-section h3 {
    font-size: 1.4rem;
    margin-top: 1rem;
  }

  .sponsors-section h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .sponsors-section p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .main-sponsor-container {
    justify-content: center;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .main-sponsor-container a {
    margin: 2rem;
    height: 12rem;
    width: auto;
  }

  .main-sponsor-container img {
    height: 100%;
    width: 100%;
  }

  .sponsor-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  .sponsor-container a {
    margin: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sponsor-container img {
    height: 100%;
    width: 100%;
  }

  #google-image {
    height: 8rem;
    width: 8rem;
  }

  #meister-systems-image {
    height: auto;
    width: 35rem;
  }

</style>

<!-- Add Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">