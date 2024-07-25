<script lang="ts">
  import { page } from "$app/stores";

  export let routes: Routes[] = [];

  $: currentRoute = $page.url.pathname;
</script>

{#each routes as route}
  <a href={route.url} class:font-bold={route.url === currentRoute}
    >{route.label.toUpperCase()}</a
  >
{/each}
