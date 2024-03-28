import { $, component$, useSignal } from "@builder.io/qwik";
import clsx from "clsx";

const EMAIL_CONTENT = [
  "Double click/tap to show email",
  "suthep.chanchuphol@outlook.com",
];

const AppEmail = component$(() => {
  const isRevealing = useSignal(false);

  const reveal = $(() => {
    isRevealing.value = !isRevealing.value;
  });

  return (
    <>
      <button
        type="button"
        onDblClick$={reveal}
        class={clsx([
          isRevealing.value
            ? "cursor-auto select-all"
            : "underline decoration-accent decoration-dashed decoration-1 underline-offset-2 outline-0 hover:decoration-solid hover:decoration-2 focus-visible:bg-accent focus-visible:font-bold focus-visible:text-black focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-accent",
          ,
          !isRevealing.value && "cursor-pointer",
        ])}
      >
        {EMAIL_CONTENT[+isRevealing.value]}
      </button>
    </>
  );
});

export default AppEmail;
