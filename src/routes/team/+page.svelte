<script lang="ts">
  import { Container } from "$lib";
    import Team from "$lib/components/content/Team.svelte";
</script>

<Container>
  <Team />

  <div class="below-team-page">
    <p>
      Development and organization of the event has been done as a part of the Casual Coding Club at HPI. 
    </p>
    <p>
      If you are interested in joining the team, feel free to reach out!
      Helping hands in organizing, programming or anything else are always welcome.
    </p>
  </div>
</Container>

<style>
  .below-team-page {
    text-align: center;
    margin-bottom: 2rem;
  }

  .below-team-page p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
</style>
