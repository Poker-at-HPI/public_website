<script>
  export let email = 'klub-casual-coding-sprecher@hpi.de'; // TODO: Change to poker-at-hpi.de
  export let text = null;

  if (!text) {
    text = email;
  }
</script>

<a href="mailto:{email}">{text}</a>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }
</style>