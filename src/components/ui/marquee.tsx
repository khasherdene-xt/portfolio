import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  fade?: boolean; // <-- added fade
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  fade = false, // <-- default false
  ...props
}: MarqueeProps) {
  const gradientDirection = vertical ? "to bottom" : "to right";

  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--duration:14s] [--gap:1rem] [gap:var(--gap)]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      style={{
        ...(fade && {
          maskImage: `linear-gradient(${gradientDirection}, transparent 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, transparent 100%)`,
          WebkitMaskImage: `linear-gradient(${gradientDirection}, transparent 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, transparent 100%)`,
        }),
      }}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
