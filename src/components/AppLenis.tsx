import { component$, useVisibleTask$ } from "@builder.io/qwik";
import Lenis from "@studio-freight/lenis";

const AppLenis = component$(() => {
  useVisibleTask$(
    ({ cleanup }) => {
      const elRuler = document.getElementById("margin-ruler");
      if (elRuler) {
        const lenis = new Lenis();

        function raf(time: any) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        let el = document.querySelectorAll('[href^="#"]');
        let anchors: (() => ReturnType<Lenis["scrollTo"]>)[] = [];
        el.forEach((el, i) => {
          anchors[i] = () =>
            lenis.scrollTo(el.getAttribute("href"), {
              offset: -elRuler.getBoundingClientRect().height,
            });
          el.addEventListener("click", anchors[i]);
        });

        cleanup(() => {
          el.forEach((el, i) => el.removeEventListener("click", anchors[i]));
        });
      }
    },
    {
      strategy: "document-ready",
    }
  );

  return (
    <div class="fixed h-0 w-0" aria-hidden="true">
      <div id="margin-ruler" class="h-[--nav-height] lg:h-64" />
    </div>
  );
});

export default AppLenis;
