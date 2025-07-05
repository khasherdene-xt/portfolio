import Link from "next/link";
import { InstagramIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/config";

export const LinksCard = () => {
  const { linkedin, instagram } = personalInfo;
  return (
    <div className="flex gap-2">
      <Link
        href={linkedin}
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#2867b2] w-full "
      >
        <LinkedinIcon />
        <p className="text-[12px] text-white/90 -rotate-3">(serious stuff)</p>
      </Link>
      <Link
        href={instagram}
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#1c1d1f] w-full"
        rel="noreferrer"
      >
        <InstagramIcon className="text-2xl" />
        <p className="text-[12px] text-white/55 -rotate-3">(for connection)</p>
      </Link>
    </div>
  );
};
