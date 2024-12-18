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
      The Poker Bot Competition will start with a kickoff event on Friday, 
      January 10th, and wrap up with a closing event on Friday, January 17th. 
      In between, you'll have plenty of time to hack on your own schedule.
    </p>

    <h3>
      Kickoff, on-site at HPI Campus 2, January 10th, starting at 2pm
    </h3>
    <p>
      At first you will have some time for the check-in.
      You will recieve an introduction to the poker variant and the bot framework.
      There will be a warm up where you can test out your strategies in an in person poker round.
      Afterwards there will be more information on the competition and prices, and some drinks and pizza.
      The free hacking time is planned to start at 6pm, after which you are more than welcome to stay till the HPI closes (11 pm).
    </p>
    <h3>
      Asynchronous Hacking, January 11th - 16th
    </h3>
    <p>
      During the rest of the time of the event, you can work on your poker bots, whenever you find the time. 
      There will be side competitions giving you a chance to collect even more prizes. 
      We will stay in contact through discord, and publish a pointer or two.
    </p>
    <h3>
      Closing, on-site at HPI Campus 1, January 17th starting at 3pm
    </h3>
    <p>
      Join us at the closing event for the BIG Showdown: We will hold the final tournament 
      followed by award ceremonies and raffle for everyone! The event will conclude with open end drinks and pizza.
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
    font-size: 1.4rem;
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