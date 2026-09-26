import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatProjectIndex(index: number, pad = 2) {
  return String(index + 1).padStart(pad, "0");
}
