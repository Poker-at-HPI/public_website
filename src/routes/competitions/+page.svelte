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
      This event consists of several small and large competitions. Here you can find an overview over those.
    </p>
    <h2>Competitions 2025</h2>
    <h3>Final Tournament</h3>
    <p>
      We will play a large final tournament on the final day of the event.
      The tournament consists of a group stage and a knockout stage. This way every bot will play against several different opponents and can show their skills.
      The top performing teams will be awarded price money!

      On January 17 we will watch the final tournament together in an epic showdown!
    </p>
    <h3>Challenges</h3>
    <p>
      Throughout the week we will host several side competitions and challenges.
      In a challenge your poker bots will compete against each other to complete a specific task.
      These challenges offer a gradual learning curve. 
      If you are not sure yet if you want to participate at the final competition you can first have some fun with the challenges.
    </p>

    <div class="title-container">
      <i class="fas fa-award"></i>
      <h1>Prizes</h1>
    </div> 
    <p>
      During the event you will get the chance to win some amazing prizes. 
      The top performing teams in the final Showdown will be awarded price money.
      Other prices include custom HPI card sets, poker & card game accessories and more.
      
      Throughout the week you can win tickets to the raffle by participating in side competitions. 
      While prize money is reserved for the top performing teams, you will have high chances of winning other prizes in the raffle.
    </p>
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
  
  .competitions-section h3 {
    font-size: 1.4rem;
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