import { Fragment, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate, scroll } from "motion";

interface BlogHeaderProps {
  bgUrl?: string;
  fgUrl?: string;
  title: string;
  fullHeaderFg?: boolean;
  reversed?: boolean;
}

const BlogHeader = component$<BlogHeaderProps>(
  ({ bgUrl = "", fgUrl = "", title, fullHeaderFg = false, reversed = false }) => {
    const elImg = useSignal<HTMLImageElement>();

    useVisibleTask$(
      () => {
        if (elImg.value) {
          scroll(
            animate(elImg.value, {
              transform: ["translateY(0)", `translateY(${reversed ? "-" : ""}640px)`],
            })
          );
        }
      },
      {
        strategy: "document-idle",
      }
    );

    return (
      <header
        class="-m-32 mb-32 h-[50svh] overflow-hidden rounded-16 bg-cover bg-center text-5xl font-black leading-normal"
        style={{
          backgroundImage: bgUrl ? `url(${bgUrl})` : "",
        }}
      >
        {fgUrl && (
          <Fragment>
            <img
              ref={elImg}
              class={`absolute left-0 top-0 w-full object-cover ${
                fullHeaderFg ? "h-full" : "h-[75%]"
              }`}
              src={fgUrl}
              alt=""
              width="960"
              height="640"
              loading="eager"
              decoding="async"
            />
            <div class="absolute inset-0 top-1/2 bg-gradient-to-t from-gray-950 to-transparent" />
          </Fragment>
        )}
        <h1 class="blog-title absolute bottom-32 left-32 right-32 text-right">{title}</h1>
      </header>
    );
  }
);

export default BlogHeader;
