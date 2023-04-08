<script>
  import Lenis from "@studio-freight/lenis";
  import { onMount } from "svelte";

  onMount(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    let el = document.querySelectorAll('[href^="#"]');
    let anchors = [];
    el.forEach((el, i) => {
      anchors[i] = () =>
        lenis.scrollTo(el.getAttribute("href"), {
          offset: -document.getElementById("margin-ruler").getBoundingClientRect().height,
        });
      el.addEventListener("click", anchors[i]);
    });

    return () => {
      el.forEach((el, i) => el.removeEventListener("click", anchors[i]));
    };
  });
</script>

<div class="fixed h-0 w-0" aria-hidden="true">
  <div id="margin-ruler" class="h-[--nav-height] lg:h-64" />
</div>
