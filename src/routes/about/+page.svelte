<script lang="ts">
  import { Container } from "$lib";
  import About from "$lib/components/content/About.svelte";
</script>

<Container>
  <div class="above-about">
    <h1>About</h1>
    <p>
      Almost a year ago we started with the organization and development of the HPI Pokerbot Competition as a side project.
    </p>
    <p>
      Inspired by the <a href="https://pokerbots.org/">MIT Pokerbots</a> event we wanted to create a similar competition at HPI...
      This year we are proud to present the first edition of the HPI Pokerbot Competition!
    </p>
  </div>
  <About />
</Container>

<style>
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
    margin-bottom: 1rem;
  }
</style>