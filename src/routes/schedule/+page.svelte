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
      The HPI Poker Bot Competition will start with a kickoff event on Friday, the 11th of October.
      The final competition will be held on Friday, the 18th of October.
    </p>
  
    <h3>Competitions</h3>
    <p>
      There will be fun competitions with prizes throughout the event to test your bots.
      We are planning on hosting a speed competition on Sunday, the 13th of October. 
      If you do not have the time to participate for the entire week, this is a great opportunity to still participate in a competition.
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