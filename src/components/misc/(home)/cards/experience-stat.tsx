import { LogosVisualStudioCode } from "@/components/icons";
import { Code2 } from "lucide-react";

export const ExperienceStat = async () => {
  return (
    <div className="hover:scale-95 duration-500 transform-gpu">
      <div className="h-[4.125rem] relative flex flex-col justify-center overflow-hidden items-center rounded-lg dark:text-white">
        <LogosVisualStudioCode className="absolute blur-sm text-[60px] top-0 left-0 -rotate-45 brightness-50" />
        <span className="font-semibold items-center font-mono text-3xl -rotate-2">
          <Code2 className="inline-block mr-1 -mt-[0.15rem]" size={18} />
          {new Date().getFullYear() - 2021} Years
        </span>
        <span className="text-sm">coding experience</span>
      </div>
    </div>
  );
};
