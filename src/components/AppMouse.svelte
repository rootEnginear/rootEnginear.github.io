<script lang="ts">
  import { onMount } from "svelte";

  const THROTTLE_TIME = 50;

  let enabled = false;
  let isIn = false;
  let left: number = 0;
  let top: number = 0;

  let isPointer = false;

  const update = (e: MouseEvent | null) =>
    requestAnimationFrame(() => {
      if (!e) return;
      if (window.getComputedStyle(e.target as HTMLElement).cursor === "pointer") {
        if (isPointer === false) isPointer = true;
      } else {
        isPointer = false;
      }

      left = e.clientX;
      top = e.clientY;
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
    class="h-48 w-48 border border-accent transform-gpu ease-out fixed top-0 left-0 duration-200 rounded-full z-20 mix-blend-difference pointer-events-none"
    style:--tw-translate-x={`calc(-50% + ${left}px)`}
    style:--tw-translate-y={`calc(-50% + ${top}px)`}
    style:--tw-scale-x={isIn ? (isPointer ? 1.33 : 1) : 0}
    style:--tw-scale-y={isIn ? (isPointer ? 1.33 : 1) : 0}
  />
{/if}
