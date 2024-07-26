<script lang="ts">
  import { Container } from "$lib";
</script>

<Container>
  <section class="competitions-section">
    <div class="title-container">
      <i class="fas fa-trophy"></i>
      <h1>Competitions</h1>
    </div>  
    <p>
      The HPI Pokerbots Event consist of several competitions. Here you can find an overview over the results of those competitions.
    </p>
    <h2>Competitions 2024</h2>
    <p>
      More information will be published soon!
    </p>
    <!-- TODO: Specify which competitions exist (Speed competition, Final Competition). Make Cards for each and link to somewhere-->
  </section>
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
    font-size: 2rem;
  }

  .title-container i {
    /* padding: 1rem; */
    color: hsl(var(--accent));
    font-size: 1.8rem;
    padding: 1rem;
    padding-bottom: 0.8rem;
  }

  .competitions-section {
    margin: 2rem;
  }

  .competitions-section h1 {
    font-size: 2rem;
  }

  .competitions-section h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  .competitions-section p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
</style>

<!-- Add Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">