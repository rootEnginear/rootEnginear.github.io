<script lang="ts">
  import { onMount } from "svelte";
  import { clsx } from "clsx";

  export let title: string;
  export let date: string;
  let url = "https://rootenginear.github.io/";

  let copyBtnText = "Copy URL";

  const copy = () => {
    navigator.clipboard
      .writeText(url)
      .then(
        () => {
          copyBtnText = "Copied";
        },
        () => {
          copyBtnText = "Failed, Try Again";
        }
      )
      .finally(() => {
        setTimeout(() => {
          copyBtnText = "Copy URL";
        }, 1000);
      });
  };

  onMount(() => {
    url = window.location.href;
  });
</script>

<div class="flex items-baseline gap-8 flex-row-reverse">
  <span class="text-xl font-bold">🪑</span>
  <button
    class={clsx([
      "inline-block underline decoration-accent decoration-dashed decoration-1 underline-offset-2 ",
      "hover:decoration-solid hover:decoration-2",
      "focus:decoration-solid focus:decoration-2",
      "focus-visible:bg-accent focus-visible:font-bold focus-visible:text-black focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-accent",
    ])}
    type="button"
    on:click={copy}>{copyBtnText}</button
  >
  <a
    href="https://www.facebook.com/sharer/sharer.php?&t={encodeURIComponent(
      title
    )}&u={encodeURIComponent(url)}"
    target="_blank"
    rel="nofollow noopener noreferrer">Facebook</a
  >
  <a
    href="https://twitter.com/intent/tweet?via=rootEnginear&text={encodeURIComponent(
      title
    )}&url={encodeURIComponent(url)}"
    target="_blank"
    rel="nofollow noopener noreferrer">Tweet</a
  >
  <span class="mr-auto">
    <time datetime={new Date(date).toISOString()}
      >{new Date(date).toLocaleDateString("en-GB", { dateStyle: "short" })}</time
    >
  </span>
</div>
