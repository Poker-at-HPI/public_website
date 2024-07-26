<script>
  import { ModeWatcher } from "mode-watcher";
  import { Toaster } from "$lib/components/ui/sonner";
  import Footer from "$lib/components/ui/Footer.svelte";
  import { MainNav } from "$lib";

  import "../app.pcss";
</script>

<div class="app-container">
  <ModeWatcher />
  <Toaster />
  <MainNav />
  <main class="content"><slot /></main>
  <Footer />
</div>

<style>
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex: 1;
  }
</style>
