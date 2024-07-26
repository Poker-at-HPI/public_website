<script lang="ts">
  import { page } from "$app/stores";
  import { createEventDispatcher } from 'svelte';

  export let routes: Routes[] = [];

  $: currentRoute = $page.url.pathname;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('closeSheet');
  }
</script>

{#each routes as route}
  <a href={route.url} class="nav-link" class:active={route.url === currentRoute || route.url === currentRoute.slice(0, -1)} on:click={handleClick}>
    {route.label.toUpperCase()}
  </a>
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