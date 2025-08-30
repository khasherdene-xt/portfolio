import { MapPin, Navigation, Compass, Globe } from "lucide-react";
import Link from "next/link";

export const LocateMe = () => {
  return (
    <Link
      href={"https://www.google.com/maps/place/Mongolia/"}
      target="_blank"
      className="w-full h-36 hover:scale-95 transform duration-500 transition-all rounded-xl bg-gradient-to-r p-1 cursor-pointer group"
    >
      <div className="relative overflow-hidden flex flex-col justify-between h-full rounded-lg bg-white dark:bg-zinc-900">
        {/* Header */}
        <div className="flex flex-col justify-between">
          <div className="px-4 py-2">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-blue-500" />
              <p className="text-xl font-semibold">Maps</p>
            </div>
            <p className="w-full font-bold text-lg py-3 border-y dark:border-gray-700 border-gray-200 flex items-center gap-2">
              <Globe className="w-5 h-5 text-green-500" />
              Ulaanbaatar, Mongolia
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 pb-3">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Navigation className="w-4 h-4" />
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-1">
                <Compass className="w-4 h-4" />
                <span>Explore</span>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-blue-500">Open Maps →</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
