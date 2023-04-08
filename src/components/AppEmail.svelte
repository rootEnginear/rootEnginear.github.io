<script lang="ts">
  import { onMount } from "svelte";

  let is_mounted = false;
  let is_revealing = false;
  $: display_data = is_mounted
    ? is_revealing
      ? "suthep.chanchuphol@outlook.com"
      : `Double ${
          window.matchMedia("(hover: hover) and (pointer: fine)").matches
            ? "click"
            : "tap"
        } to show email`
    : "";

  const reveal = () => {
    is_revealing = !is_revealing;
  };

  onMount(() => (is_mounted = true));
</script>

<noscript>
  <span>Enable JavaScript to see the email</span>
</noscript>
{#if is_mounted}
  <button
    type="button"
    on:dblclick={reveal}
    class={is_revealing
      ? "select-all cursor-auto"
      : "underline decoration-accent decoration-dashed decoration-1 underline-offset-2 outline-0 hover:decoration-solid hover:decoration-2 focus-visible:bg-accent focus-visible:font-bold focus-visible:text-black focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-accent"}
    class:cursor-pointer={is_mounted && !is_revealing}
  >
    {display_data}
  </button>
{:else}
  <span>&nbsp;</span>
{/if}
