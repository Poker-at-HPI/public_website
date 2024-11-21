<script>
  import { base } from "$app/paths"; 
  import Email from "./email/email.svelte";

</script>

<div class="footer bg-secondary">
  <p>&copy; 2025 HPI Pokerbot Competition. All rights reserved.</p>
  <div class="flex justify-center space-x-4 mt-2">
    <a class="text-secondary-foreground" href="https://hpi.de">HPI</a>
    <!-- <a class="text-secondary-foreground" href="{base}/privacy-policy">Privacy Policy</a> -->
    <a class="text-secondary-foreground" href="{base}/imprint">Imprint</a>
    <span class="text-secondary-foreground"><Email text="Contact" /></span>
    <a class="text-secondary-foreground" href="{base}/code-of-conduct">Code of Conduct</a>

    <!-- TODO: Link Github -->
    <!-- TODO: Link Documentation -->
    <!-- TODO: Link Bot Scheduling Page? -->

  </div>
</div>

<style>
  .footer {
    padding: 1rem;
    text-align: center;
    margin-top: auto;
  }
  .footer a, .footer span {
    text-decoration: none;
  }
  .footer a:hover {
    text-decoration: underline;
  }
  .footer p {
    color: grey;
  }
</style>
