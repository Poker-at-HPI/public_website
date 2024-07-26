<script lang="ts">
  import { Container } from "$lib";
  import Team from "$lib/components/content/Team.svelte";
</script>

<Container>
  <div class="team-page">
    <h2>Team</h2>
  
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
  .team-page h2 {
    font-size: 2rem;
    margin-left: 2rem;
    margin-top: 2rem;
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
