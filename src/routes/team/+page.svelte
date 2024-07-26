<script lang="ts">
  import { Container } from "$lib";
  import Team from "$lib/components/content/Team.svelte";
</script>

<Container>
  <div class="team-page">
    <div class="title-container">
      <i class="fas fa-users"></i>
      <h1>Team</h1>
    </div>
  
    <Team />
  
    <div class="below-team-page">
      <p>
        This project has been development and organized as a part of the Casual Coding Club at HPI. 
      </p>
      <p>
        If you are interested in joining the team, feel free to reach out!
        Helping hands in organizing, programming or anything else are always welcome.
      </p>
    </div>
  </div>
</Container>

<style>
  .title-container {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-left: 2rem;
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

  .below-team-page {
    text-align: center;
    margin-bottom: 2rem;
  }

  .below-team-page p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 2rem;
  }
</style>

<!-- Add Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">