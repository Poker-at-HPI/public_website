<script lang="ts">
  import { Container } from "$lib";
  import About from "$lib/components/content/About.svelte";
</script>

<Container>
  <div class="above-about">
    <div class="title-container">
      <i class="fas fa-info"></i>
      <h1>About</h1>
    </div>
    <p>
      Almost a year ago we started with the organization and development of a Poker Bot Competition as a side project.
    </p>
    <p>
      Inspired by the <a href="https://pokerbots.org/">MIT Pokerbots</a> event we wanted to create a similar competition at HPI.
      This year we are proud to present the first edition of HPI Showdown's Poker Bot Competition!
    </p>
  </div>
  <About />
</Container>

<style>
  .title-container {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
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
  }

  .above-about {
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .above-about p {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  .above-about h1 {
    font-size: 2rem;
  }
</style>

<!-- Add Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">