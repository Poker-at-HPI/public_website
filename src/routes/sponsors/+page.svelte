<script lang="ts">
  import { Container } from "$lib";
</script>

<Container>
  <section class="sponsors-section">
    <div class="title-container">
      <i class="fas fa-award"></i>
      <h1>Sponsors</h1>
    </div>
    <p>
      The sponsors of the event will be published soon!
    </p>
    <!-- TODO: Find and write sponsors here -->
    <p>
      We are still looking for sponsors to support the HPI Poker Bot Competition. If you are interested in sponsoring the event, please contact us!
    </p>
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

  .sponsors-section p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
</style>

<!-- Add Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">