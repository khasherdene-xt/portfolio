import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractDate = (dateString: string | number | Date) =>
  new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
