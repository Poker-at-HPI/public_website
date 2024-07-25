<script>
  import { toast } from "svelte-sonner";
  import { Button } from "$lib/components/ui/button";
  import { Container } from "$lib";
</script>

<Container
  ><h1 class="font-bold text-2xl text-center mt-7">Welcome to SvelteKit</h1>
  <p class="text-center">
    Shandcn for Svelte is also configured and dark mode toggle is ready
  </p>
  <div class="flex flex-col items-center mt-7">
    <Button
      on:click={() =>
        toast("Congrats!, you are now using Shadcn", {
          description: "Shadcn build for Svelte",
          action: {
            label: "Close",
            onClick: () => console.log("Close"),
          },
        })}>Test Click</Button
    >
  </div></Container
>
