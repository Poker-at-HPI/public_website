<script>
  import { toast } from "svelte-sonner";
  import { Button } from "$lib/components/ui/button";
  import { Container } from "$lib";
  import About from "$lib/components/content/About.svelte";
  import Countdown from "$lib/components/ui/countdown/Countdown.svelte";
  import ShuffledHand from "../components/ShuffledHand.svelte";
</script>

<!-- TODO: This looks shit on mobile. 1. cards are not wrapping / to big. 2. Buttons are too big and take up most of vh-->
<Container>
  <section id="home" class="home-section">
    <h1 class="font-bold text-4xl">Welcome to the HPI Pokerbot Competition!</h1>
    <p class="mt-4">Join us for an exciting hackathon-style event with competitions and prizes!</p>
    <div class="content-wrapper">
      <div class="flex-1">
        <div class="flex mt-7 mb-2">
          <Button size="lg" class="wrap-text"><i class="fas fa-user"></i><a class="cta cal-link" href="/"> Register Now</a  ></Button>
        </div>
        <div class="flex mb-2">
          <Button size="lg" class="wrap-text"><i class="fas fa-calendar-alt" /><a class="cta cal-link" target="_blank" rel="noopener" href="/kickoff.ics"> 11th - 18th October 2024</a></Button>
        </div>
    
        <p>See you in <Countdown to="2024-10-11T14:00:00" />!</p>
      </div>
      <div class="flex-1">
        <ShuffledHand  />
      </div>
    </div>
  </section>

  <About />

</Container>

<style>
  .home-section {
    margin: 2rem;
    margin-bottom: 4rem;
  }

  .content-wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  }

  .content-wrapper > div {
    flex: 1 1 auto;
    margin-right: 2rem;
  }

  .content-wrapper > div:last-child {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    .content-wrapper {
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .content-wrapper > div {
      flex: 1 1 100%;
      margin-right: 0;
    }
  }

  .home-section p {
    font-size: 1.2rem;
  }

  .home-section i {
    margin-right: 1rem;
    font-size: 1.8rem;
    color: hsl(var(--accent));
  }

  .home-section .cal-link {
    font-size: 1.5rem;
    font-family: Helvetica, Arial, sans-serif;
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    display: inline-block;
  }
</style>

<!-- Add Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">