"use client";
import Image from "next/image";
import Link from "next/link";

export const MusicCard = () => {
  const mockData = {
    artist: "Billie Eilish",
    title: "Birds of a Feather",
    duration: "3:30",
    year: 2024,
    imageUrl: "/assets/music.jpeg",
  };

  return (
    <Link
      href="https://www.youtube.com/watch?v=V9PVRfjEBTI&t=7s"
      target="_blank"
      className="dark:bg-neutral-900 bg-gray-100  relative h-full w-full group flex flex-col justify-between overflow-hidden rounded-2xl transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100 hover:scale-95"
    >
      <div className="p-4 flex gap-4">
        {/* Album Art */}
        <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
          <Image
            src={mockData.imageUrl}
            alt={mockData.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold leading-tight">
              {mockData.title}
            </h3>
            <p className="text-sm dark:text-neutral-400">{mockData.artist}</p>
          </div>

          <div className="flex items-center justify-between text-xs dark:text-neutral-500 mt-2">
            <span>{mockData.year}</span>
            <span>{mockData.duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
