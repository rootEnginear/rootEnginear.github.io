<script>
  import { onMount } from "svelte";

  onMount(() => {
    document
      .querySelectorAll("[data-lazy-font]")
      .forEach((el) => el.setAttribute("media", "all"));
  });
</script>
