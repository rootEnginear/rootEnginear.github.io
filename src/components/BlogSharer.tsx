import { $, Fragment, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { clsx } from "clsx";

interface BlogSharerProps {
  title: string;
  date?: string;
}

const BlogSharer = component$<BlogSharerProps>(({ date, title }) => {
  const url = useSignal("https://rootenginear.github.io/");
  const copyBtnText = useSignal("Copy URL");

  const copy = $(() => {
    navigator.clipboard
      .writeText(url.value)
      .then(
        () => {
          copyBtnText.value = "Copied";
        },
        () => {
          copyBtnText.value = "Failed, Try Again";
        }
      )
      .finally(() => {
        setTimeout(() => {
          copyBtnText.value = "Copy URL";
        }, 1000);
      });
  });

  useVisibleTask$(
    () => {
      url.value = window.location.href;
    },
    {
      strategy: "intersection-observer",
    }
  );

  return (
    <div class="flex flex-row-reverse flex-wrap-reverse items-baseline gap-8">
      <span class="text-xl font-bold">🪑</span>
      <button
        class={clsx([
          "inline-block underline decoration-accent decoration-dashed decoration-1 underline-offset-2 ",
          "hover:decoration-solid hover:decoration-2",
          "focus:decoration-solid focus:decoration-2",
          "focus-visible:bg-accent focus-visible:font-bold focus-visible:text-black focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-accent",
        ])}
        type="button"
        onClick$={copy}
      >
        {copyBtnText}
      </button>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?&t=${encodeURIComponent(
          title
        )}&u=${encodeURIComponent(url.value)}`}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?via=rootEnginear&text=${encodeURIComponent(
          title
        )}&url=${encodeURIComponent(url.value)}`}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Tweet
      </a>
      {date && (
        <Fragment>
          <span class="mr-auto">
            <time dateTime={new Date(date).toISOString()}>
              {new Date(date).toLocaleDateString("en-GB", { dateStyle: "short" })}
            </time>
          </span>
        </Fragment>
      )}
    </div>
  );
});

export default BlogSharer;
