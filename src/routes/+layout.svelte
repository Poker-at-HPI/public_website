<script>
  import { ModeWatcher } from "mode-watcher";
  import { Toaster } from "$lib/components/ui/sonner";
  import { MainNav } from "$lib";

  import "../app.pcss";
</script>

<ModeWatcher />
<Toaster />
<MainNav />
<main><slot /></main>
