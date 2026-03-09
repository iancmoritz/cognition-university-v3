"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  prevUrl?: string;
  nextUrl?: string;
}

// ArrowLeft/ArrowRight to move between lessons. Matches cognition-university's
// KeyboardNavigation component so imported content keeps its feel.
export function KeyboardNavigation({ prevUrl, nextUrl }: Props) {
  const router = useRouter();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === "ArrowLeft" && prevUrl) {
        router.push(prevUrl);
      } else if (e.key === "ArrowRight" && nextUrl) {
        router.push(nextUrl);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prevUrl, nextUrl, router]);

  return null;
}
