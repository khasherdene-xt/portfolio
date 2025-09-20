import { Emoji } from "@/components/misc/emoji";
import { clsx } from "clsx";
import type { ComponentProps } from "react";
import { GithubIcon } from "../icons";
import { personalInfo } from "@/lib/config";

export const Footer = ({ className, ...props }: ComponentProps<"footer">) => {
  const year = String(new Date().getFullYear());

  return (
    <footer
      className={clsx(
        "flex flex-col font-medium text-zinc-700 dark:text-zinc-100 md:pt-0 pt-5",
        className
      )}
      {...props}
    >
      <hr className="w-full border-t border-zinc-150 dark:border-zinc-800" />
      <div className="flex items-center pt-2">
        <span>
          <Emoji />{" "}
          <time className="hidden sm:inline" dateTime={String(year)}>
            {year}{" "}
          </time>
          <span className="text-zinc-300 dark:text-zinc-600">—</span> he
          <span className="text-zinc-300 dark:text-zinc-600">/</span>him
        </span>
        <a
          className="link ml-auto inline-flex items-center gap-1.5"
          href={personalInfo.github}
          rel="noreferrer"
          target="_blank"
        >
          <GithubIcon />
          <span>
            <span>khasherdene-xt</span>
          </span>
        </a>
      </div>
    </footer>
  );
};
