<script lang="ts">
  import ToogleMode from "./ToogleMode.svelte";
  import Container from "./Container.svelte";
  import NavRoutes from "./NavRoutes.svelte";
  import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
  import { Menu } from "lucide-svelte";

  const routes = [
    { label: "home", url: "/" },
    { label: "about", url: "/about" },
    { label: "schedule", url: "/schedule" },
    { label: "sponsors", url: "/sponsors" },
    { label: "team", url: "/team" },
    { label: "competitions", url: "/competitions" },
  ];
</script>

<header>
  <Container>
    <div class="relative flex px-8 sm:px-12 lg:px-16 h-24 items-center justify-between w-full">
      <div class="flex items-center">
        <Sheet>
          <SheetTrigger><Menu class="h-10 md:hidden w-10" /></SheetTrigger>
          <SheetContent side="left" class="w-[500px] sm:w-[600px]">
            <nav class="flex flex-col gap-8 mt-10 items-center">
              <NavRoutes {routes} />
            </nav>
          </SheetContent>
        </Sheet>
        <a href="/" class="ml-8 lg:ml-0 h-12 w-24">
          <img src="/logo.svg" alt="Brand Logo" class="logo-light h-12 w-24" />
          <img src="/logo_white.svg" alt="Brand Logo" class="logo-dark h-12 w-24" />
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
</style>