<script lang="ts">
  import { Container } from "$lib";
</script>

<Container>
  <section class="schedule-section">
    <div class="title-container">
      <i class="fas fa-calendar-alt"></i>
      <h2>10th January - 17th January 2025</h2>
    </div>

    <p>
      The Poker Bot Competition will start with a kickoff event on Friday, the 10th of January. 
      The check-in will start at 2 pm. 
      That day you will have time to work on your bots until 11 pm.
      The award ceremony will begin at 3 pm on Friday, the 17th of January.
    </p>

    <h3>Competitions</h3>
    <p>
      There will be fun competitions with prizes throughout the event to test your bots, 
      with the final competition on Friday where your bots will compete against each other.
    </p>
  
    <h3>Asynchronous Event</h3>
    <p>
      During the rest of the time of the event, you will have lots of time to work on your poker bots.
      We will try and provide you with rooms to work in.
      We understand that lectures might already start again and we will make sure to consider that. 
      You can simply work on your poker bots whenever you find the time!
    </p>
  
    <p>
      More specifics on the schedule will be published soon!
    </p>
  </section>
</Container>

<style>
  .schedule-section {
    margin: 2rem;
  }

  .title-container {
    display: flex;
    align-items: center;
  }

  .title-container h2 {
    margin: 0;
    display: flex;
    align-items: center;
  }

  .title-container i {
    /* padding: 1rem; */
    color: hsl(var(--accent));
    font-size: 3rem;
    padding: 1rem;
  }

  @media (min-width: 600px) {
    .title-container i {
      font-size: 1.5rem;
      padding: 0.5rem;
      padding-bottom: 1rem;
    }
  }
  .schedule-section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .schedule-section h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .schedule-section p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
</style>

<!-- Add Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">