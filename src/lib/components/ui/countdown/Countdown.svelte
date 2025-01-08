<script lang="ts">
  import { onMount } from "svelte";
  import { afterUpdate } from "svelte";

  export let to;

  let countdown: string = "";
  let targetDate: Date;

  function updateCountdown() {
    const now = new Date();
    if (!targetDate) {
      countdown = "";
      return;
    }

    const timeDifference = targetDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
      countdown = "0h 0m";
      return;
    }


    console.log(timeDifference, targetDate, now);

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    if (days < 1) {
      countdown = `${hours}h ${minutes}m`;
    } else if (days < 2) {
      countdown = `${days} day ${hours}h`;
    } else {
      countdown = `${days} days`;
    }
  }

  onMount(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  });

  afterUpdate(() => {
    targetDate = new Date(to);
    updateCountdown();
  });
</script>

<span class="countdown">
  {countdown}
</span>

<style>
  .countdown {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    margin-top: 1rem;
  }
</style>
