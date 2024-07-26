<script lang="ts">
  import { page } from "$app/stores";

  export let routes: Routes[] = [];

  $: currentRoute = $page.url.pathname;
</script>

{#each routes as route}
  <a href={route.url} class="nav-link" class:active={route.url === currentRoute}
    >{route.label.toUpperCase()}</a
  >
{/each}

<style>
  .nav-link {
    font-size: 1.75rem;
    text-decoration: none;
    color: inherit;
  }

  .nav-link.active {
    text-decoration: underline;
    text-underline-offset: 5px;
    font-weight: bold;
  }
</style>