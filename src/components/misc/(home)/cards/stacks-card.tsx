import {
  CssIcon,
  HtmlIcon,
  IconGit,
  IconNextJS,
  IconNodeJS,
  IconPrisma,
  IconReactJS,
  IconTailwindcss,
  IconTypescript,
  JavaLightIcon,
  JavascriptIcon,
  MongodbIcon,
  NestjsIcon,
  OracleIcon,
  PlaywrightIcon,
  SkillIconsDocker,
  SpringLightIcon,
} from "@/components/icons";
import { Marquee } from "@/components/ui/marquee";
import type React from "react";

export const StacksCard = () => {
  return (
    <div className="p-1 flex h-36 flex-col gap-2 overflow-hidden rounded-xl mt-4">
      <Marquee className="" pauseOnHover fade>
        <IconTypescript width="48" height="48" />
        <JavascriptIcon width="48" height="48" />
        <IconNextJS width="48" height="48" />
        <IconReactJS width="48" height="48" />
        <IconTailwindcss width="48" height="48" />
        <NestjsIcon width="48" height="48" />
        <JavaLightIcon width="48" height="48" />
        <PlaywrightIcon width="48" height="48" />
      </Marquee>
      <Marquee className="mt-2" fade reverse pauseOnHover>
        <IconPrisma width="48" height="48" />
        <IconGit width="48" height="48" />
        <IconNodeJS width="48" height="48" />
        <HtmlIcon width="48" height="48" />
        <CssIcon width="48" height="48" />
        <OracleIcon width="48" height="48" />
        <SkillIconsDocker width="48" height="48" />
        <SpringLightIcon width="48" height="48" />
        <MongodbIcon width="48" height="48" />
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
    </div>
  );
};
