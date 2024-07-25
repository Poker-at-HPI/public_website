<script lang="ts">
  import ToogleMode from "./ToogleMode.svelte";
  import Container from "./Container.svelte";
  import NavRoutes from "./NavRoutes.svelte";
  import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
  import { Menu } from "lucide-svelte";

  const routes = [
    { label: "home", url: "/" },
    { label: "about", url: "/about" },
  ];
</script>

<header>
  <Container
    ><div
      class="relative flex px-4 sm:px-6 lg:px-8 h-16 items-center justify-between w-full"
    >
      <div class="flex items-center">
        <Sheet
          ><SheetTrigger><Menu class="h-6 md:hidden w-6" /></SheetTrigger
          ><SheetContent side="left" class="w-[300px] sm:w-[400px]"
            ><nav class="flex flex-col gap-4 mt-6">
              <NavRoutes {routes} />
            </nav>
          </SheetContent>
        </Sheet>
        <h1><a href="/" class="ml-4 lg:ml-0">Brand Logo</a></h1>
      </div>
      <nav class="mx-6 space-x-4 lg:space-x-6 hidden md:block">
        <NavRoutes {routes} />
      </nav>
      <div><ToogleMode /></div>
    </div>
  </Container>
</header>
