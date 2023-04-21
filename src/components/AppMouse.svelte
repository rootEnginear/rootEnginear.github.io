<script lang="ts">
  import { onMount } from "svelte";

  const THROTTLE_TIME = 50;

  let enabled = false;
  let hasFirstValue = false;
  let x = 0;
  let y = 0;
  let isIn = false;
  let isPointer = false;

  const update = (e: MouseEvent | null) =>
    requestAnimationFrame(() => {
      if (!e) return;
      if (window.getComputedStyle(e.target as HTMLElement).cursor === "pointer") {
        if (isPointer === false) isPointer = true;
      } else {
        isPointer = false;
      }

      x = e.clientX;
      y = e.clientY;

      if (!hasFirstValue)
        requestAnimationFrame(() => {
          hasFirstValue = true;
        });
    });

  let last: MouseEvent | null = null;
  let allowUpdate = true;
  let callLast: NodeJS.Timeout | null = null;
  let mouseMove = (e: MouseEvent) => {
    if (allowUpdate) {
      allowUpdate = false;
      if (!isIn) isIn = true;
      update(e);
      setTimeout(() => {
        allowUpdate = true;

        if (callLast) clearTimeout(callLast);
        callLast = setTimeout(() => {
          update(last);
        }, THROTTLE_TIME);
      }, THROTTLE_TIME);
    } else {
      last = e;
    }
  };
  let mouseLeave = () => {
    isIn = false;
  };

  onMount(() => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      enabled = true;

      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseleave", mouseLeave);
    }

    return () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseleave", mouseLeave);
    };
  });
</script>

{#if enabled}
  <div
    class="h-48 w-48 border border-accent transform-gpu ease-out fixed top-0 left-0 z-20 mix-blend-difference pointer-events-none transition-all"
    class:duration-200={hasFirstValue}
    class:border-2={isPointer}
    class:rotate-45={isPointer}
    style:--tw-translate-x="calc(var(--mouse-x)*1px - 50%)"
    style:--tw-translate-y="calc(var(--mouse-y)*1px - 50%)"
    style:--mouse-x={x}
    style:--mouse-y={y}
    style:--tw-scale-x={isIn && hasFirstValue ? (isPointer ? 0.5 : 1) : 0}
    style:--tw-scale-y={isIn && hasFirstValue ? (isPointer ? 0.5 : 1) : 0}
    style:--rounded={+!isPointer * 48}
    style:border-radius="calc(var(--rounded)*1px)"
  />
{/if}
