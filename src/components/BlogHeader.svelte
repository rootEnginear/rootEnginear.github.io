<script lang="ts">
  import { onMount } from "svelte";
  import { animate, scroll } from "motion";
  import { balancer } from "svelte-action-balancer";

  onMount(() => {
    if (elImg) {
      scroll(
        animate(elImg, {
          transform: ["translateY(0)", "translateY(640px)"],
        })
      );
    }
  });

  export let bgUrl: string | undefined = "";
  export let fgUrl: string | undefined = "";
  export let title: string;

  let elImg: HTMLImageElement;
</script>

<header
  class="-m-32 mb-32 h-[50vh] rounded-16 bg-cover bg-center text-5xl font-black leading-normal overflow-hidden"
  style:background-image={bgUrl ? `url(${bgUrl})` : ""}
>
  {#if fgUrl}
    <img
      bind:this={elImg}
      class="absolute top-0 left-0 object-cover w-full h-[75%]"
      src={fgUrl}
      alt=""
      width="960"
      height="640"
      loading="eager"
      decoding="async"
    />
    <div class="absolute inset-0 top-1/2 bg-gradient-to-t from-gray-950 to-transparent" />
  {/if}
  <h1 class="absolute bottom-32 right-32 text-right blog-title" use:balancer>
    {title}
  </h1>
</header>
