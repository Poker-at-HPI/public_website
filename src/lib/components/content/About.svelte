<script>
    import { base } from "$app/paths";
    import RegisterButton from "../ui/button/RegisterButton.svelte";
    import Email from "../ui/email/email.svelte";

</script>

<section class="about-section">
  <h2>What to expect?</h2>
  <p>A hackathon-style competition in which you get to showcase your coding and strategy skills hosted at HPI in Potsdam!</p>
  <p>Open to everyone starting on January 10th and ending on January 17th 2025. Prior poker knowledge unnecessary. </p>
  <p>Simply implement your poker bot as a team, and win BIG with exclusive prizes and the ultimate bragging rights!</p>
  <p>This competition is inspired by <a href="https://pokerbots.org/">MIT Pokerbots</a>.</p>

  <h2>FAQ</h2>
  <div class="faq-grid">
    <div class="faq-item">
      <i class="fas fa-user"></i>
      <div>
        <h3>How can I participate?</h3>
        <p>
          Participation is free! You must be a student to participate. You can participate online or in person.
        </p>
      </div>
    </div>

    <div class="faq-item">
      <i class="fas fa-calendar-alt"></i>
      <div>
        <h3>When is the event?</h3>
        <p>
          The event takes place from January 10th until January 17th 2025. A more specific schedule can be found 
          <a href="{base}/schedule">here</a>.
        </p>
      </div>
    </div>

    <div class="faq-item">
      <i class="fas fa-question-circle"></i>
      <div>
        <h3>Which variant of poker will be played?</h3>
        <p>
          This will be published at the event to allow a fair competition.
        </p>
      </div>
    </div>

    <div class="faq-item">
      <i class="fas fa-brain"></i>
      <div>
        <h3>Which skills do I need?</h3>
        <p>
          No poker knowledge is required! At least one person in your team should have basic programming skills. Our team will give you an introduction into poker and bot programming.
        </p>
      </div>
    </div>
  
    <div class="faq-item">
      <i class="fas fa-trophy"></i>
      <div>
        <h3>What can I win?</h3>
        <p>
          We will host competitions where you can let your poker bot play against others in a tournament. Everyone will have the chance to win cool prizes in a raffle! The winners can win prize money. Also see <a href="{base}/competitions">Competitions</a>.
        </p>
      </div>
    </div>

    <div class="faq-item">
      <i class="fas fa-list-alt"></i>
      <div>
        <h3>How will the event be structured?</h3>
        <p>
          We are planning a kickoff and a final competition. Throughout the week there might be a few events but you will have free time to implement your bots.
        </p>
      </div>
    </div>

    <div class="faq-item">
      <i class="fas fa-code"></i>
      <div>
        <h3>In which programming language will I work?</h3>
        <p>
          You can implement your poker bot in Python or C++ in our predefined poker bot framework.
        </p>
      </div>
    </div>

    <div class="faq-item">
      <i class="fas fa-user-friends"></i>
      <div>
        <h3>Can I work in a team?</h3>
        <p>
          You will work in teams of 2. Solo participants can team up on the event day. 
        </p>
      </div>
    </div>

    <div class="faq-item">
      <i class="fas fa-laptop"></i>
      <div>
        <h3>Any hardware requirements?</h3>
        <p>
          Having a laptop is useful but you can also work at home from your PC. We will provide hardware for you to run your bots on.
        </p>
      </div>
    </div>
  </div>

  <div class="below-faq">
    <p class="no-margin"> Any more questions? Feel free to reach out to us by writing an email to </p>
    <p><Email /></p>
    <p> Sounds cool! How do I sign up? </p>
    <RegisterButton />
  </div>
</section>

<style>
  .about-section {
    margin: 2rem;
    text-align: left;
  }

  .about-section h2 {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .about-section .below-faq {
    margin-top: 2rem;
    /* center text */
    text-align: center;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .faq-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .faq-item i {
    font-size: 3rem;
    color: hsl(var(--accent));
    padding-top: 0.5rem;
  }

  .faq-item h3 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .faq-item p {
    font-size: 1.2rem;
    margin-bottom: 0;
  }

  .about-section p {
    font-size: 1.2rem;
  }

  .about-section a {
    font-weight: bold;
  }

  .below-faq p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .below-faq p.no-margin {
    margin-bottom: 0;
  }

  .faq-item a {
    font-weight: bold;
  }

</style>

<!-- Add Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">