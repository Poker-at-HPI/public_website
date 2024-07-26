<script lang="ts">
  import ToogleMode from "./ToogleMode.svelte";
  import Container from "./Container.svelte";
  import NavRoutes from "./NavRoutes.svelte";
  import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
  import { Menu } from "lucide-svelte";
  import { assets, base } from '$app/paths';

  const routes = [
    { label: "home", url: `${base}/` },
    { label: "about", url: `${base}/about` },
    { label: "schedule", url: `${base}/schedule` },
    { label: "sponsors", url: `${base}/sponsors` },
    { label: "team", url: `${base}/team` },
    { label: "competitions", url: `${base}/competitions` },
  ];
</script>

<header class="header">
  <Container>
    <div class="relative flex px-8 sm:px-12 lg:px-16 h-24 items-center justify-between w-full">
      <div class="flex items-center">
        <!-- TODO: 1. Make sure that close button is visible on mobile sheet. 2. If not alot vertical space can't scroll through sheet navigation -->
        <Sheet>
          <SheetTrigger><Menu class="h-10 md:hidden w-10" /></SheetTrigger>
          <SheetContent side="left" class="w-[500px] sm:w-[600px]">
            <nav class="flex flex-col gap-8 mt-10 items-center">
              <NavRoutes {routes} />
            </nav>
          </SheetContent>
        </Sheet>
        <a href="{base}/" class="ml-8 lg:ml-0 h-12 w-24">
          <object type="image/svg+xml" data="{assets}/logo_white_animated.svg" title="Brand Logo" class="logo-dark h-12 w-24" />
          <object type="image/svg+xml" data="{assets}/logo_animated.svg" title="Brand Logo" class="logo-light h-12 w-24" />
        </a>
      </div>
      <nav class="mx-10 space-x-8 lg:space-x-10 hidden md:block">
        <NavRoutes {routes} />
      </nav>
      <div><ToogleMode /></div>
    </div>
  </Container>
</header>

<style>
  .h-24 {
    height: 6rem;
  }

  .h-12 {
    height: 3rem;
  }

  .w-24 {
    width: 6rem;
  }

  .ml-8 {
    margin-left: 2rem;
  }

  .mx-10 {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }

  .header a {
    cursor: pointer;
    pointer-events: auto;
    display: inline-block;
  }

  .header object {
    pointer-events: inherit;
    color-scheme: light;
  }
</style>