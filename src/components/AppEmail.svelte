<script lang="ts">
  import { onMount } from "svelte";

  let is_mounted = false;
  let is_revealing = false;
  $: display_data = is_mounted
    ? is_revealing
      ? "suthep.chanchuphol@outlook.com"
      : "Double click to show email"
    : "Waiting for hydration...";

  const reveal = () => {
    is_revealing = !is_revealing;
  };

  onMount(() => (is_mounted = true));
</script>

<span
  on:dblclick={reveal}
  class={is_revealing ? "select-all cursor-auto" : "select-none cursor-pointer"}
>
  {display_data}
</span>
<noscript>
  <span>Please enable JavaScript to see the email.</span>
</noscript>
