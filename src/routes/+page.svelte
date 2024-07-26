<script>
  import { toast } from "svelte-sonner";
  import { Button } from "$lib/components/ui/button";
  import { Container } from "$lib";
  import About from "$lib/components/content/About.svelte";
  import Countdown from "$lib/components/ui/countdown/Countdown.svelte";
</script>

<Container>
  <section id="home" class="home-section">
    <h1 class="font-bold text-4xl">Welcome to the HPI Pokerbot Competition!</h1>
    <p class="mt-4">Join us for an exciting hackathon-style event with competitions and prizes!</p>
    <div class="flex mt-7 mb-2">
      <Button><i class="fas fa-user"></i>Register Now!</Button>
    </div>
    <div class="flex mb-2">
      <Button><i class="fas fa-calendar-alt" /><a class="cta cal-link" target="_blank" rel="noopener" href="/kickoff.ics"> 11th - 18th October 2024</a></Button>
    </div>

    <p>See you in <Countdown to="2024-10-11T14:00:00" />!</p>
  </section>

  <About />

</Container>

<style>
  .home-section {
    margin: 2rem;
  }

  .home-section p {
    font-size: 1.2rem;
  }

  .home-section i {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: hsl(var(--accent));
  }

  .home-section .cal-link {
    font-size: 1rem;
    font-family: Helvetica, Arial, sans-serif;
    text-decoration: none;
    padding: 0.2rem;
    text-align: center;
    border-radius: 5px;
    display: inline-block;
  }
</style>

<!-- Add Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">