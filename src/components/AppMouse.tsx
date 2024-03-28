import {
  $,
  component$,
  noSerialize,
  useSignal,
  useVisibleTask$,
  type NoSerialize,
} from "@builder.io/qwik";
import clsx from "clsx";

const THROTTLE_TIME = 50;

const AppMouse = component$(() => {
  const enabled = useSignal(false);
  const hasFirstValue = useSignal(false);
  const x = useSignal(0);
  const y = useSignal(0);
  const isIn = useSignal(false);
  const isPointer = useSignal(false);
  const last = useSignal<NoSerialize<MouseEvent> | null>(null);
  const allowUpdate = useSignal(true);
  const callLast = useSignal<NodeJS.Timeout | null>(null);

  const update = $((e: NoSerialize<MouseEvent> | null) => {
    requestAnimationFrame(() => {
      if (!e) return;
      if (window.getComputedStyle(e.target as HTMLElement).cursor === "pointer") {
        if (isPointer.value === false) isPointer.value = true;
      } else {
        isPointer.value = false;
      }

      x.value = e.clientX;
      y.value = e.clientY;

      if (!hasFirstValue.value)
        requestAnimationFrame(() => {
          hasFirstValue.value = true;
        });
    });
  });

  const mouseMove = $((e: NoSerialize<MouseEvent>) => {
    if (!enabled.value) return;
    if (allowUpdate.value) {
      allowUpdate.value = false;
      if (!isIn.value) isIn.value = true;
      update(e);
      setTimeout(() => {
        allowUpdate.value = true;

        if (callLast.value) clearTimeout(callLast.value);
        callLast.value = setTimeout(() => {
          update(last.value);
        }, THROTTLE_TIME);
      }, THROTTLE_TIME);
    } else {
      last.value = e;
    }
  });

  const mouseLeave = $(() => {
    isIn.value = false;
  });

  useVisibleTask$(
    ({ cleanup }) => {
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        enabled.value = true;

        const _move = (event: MouseEvent) => mouseMove(noSerialize(event));

        document.addEventListener("mousemove", _move);
        document.addEventListener("mouseleave", mouseLeave);

        cleanup(() => {
          document.removeEventListener("mousemove", _move);
          document.removeEventListener("mouseleave", mouseLeave);
        });
      }
    },
    {
      strategy: "document-idle",
    }
  );

  return (
    enabled.value && (
      <div
        class={clsx([
          "pointer-events-none fixed left-0 top-0 z-20 h-48 w-48 transform-gpu border border-accent mix-blend-difference transition-all ease-out",
          hasFirstValue.value && "duration-200",
          isPointer.value && "border-2",
          isPointer.value && "rotate-45",
        ])}
        style={{
          "--tw-translate-x": "calc(var(--mouse-x)*1px - 50%)",
          "--tw-translate-y": "calc(var(--mouse-y)*1px - 50%)",
          "--mouse-x": x.value,
          "--mouse-y": y.value,
          "--tw-scale-x":
            isIn.value && hasFirstValue.value ? (isPointer.value ? 0.5 : 1) : 0,
          "--tw-scale-y":
            isIn.value && hasFirstValue.value ? (isPointer.value ? 0.5 : 1) : 0,
          "--rounded": +!isPointer.value * 48,
          borderRadius: "calc(var(--rounded)*1px)",
        }}
      />
    )
  );
});

export default AppMouse;
