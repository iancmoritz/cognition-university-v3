import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Course } from "@/lib/types";
import { mockUser } from "@/lib/mock-data";
import { CourseThumbnail } from "./CourseThumbnail";

function greeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

/**
 * The big lavender card at the top of Home. Serif greeting headline is
 * Sana's signature — it's the only serif on the page, which is what makes
 * it feel editorial rather than SaaS-generic.
 * Reference: design-reference/ref-homepage-full.png
 */
export function HeroCard({ todoCourses }: { todoCourses: Course[] }) {
  const firstName = mockUser.name.split(" ")[0];

  return (
    <section className="rounded-xl bg-lavender p-8 md:p-10">
      <h1 className="font-serif text-3xl font-medium tracking-tight text-text md:text-4xl">
        {greeting()}, {firstName}
      </h1>

      <div className="mt-5 flex items-center gap-2 text-sm">
        <span className="font-semibold text-text">To-do ({todoCourses.length})</span>
        <span className="text-text-tertiary">·</span>
        <Link
          href="/library"
          className="flex items-center gap-0.5 text-text-secondary hover:text-text"
        >
          View all
          <ChevronRight size={14} strokeWidth={2} />
        </Link>
      </div>

      {todoCourses.length > 0 && (
        <div className="thin-scrollbar mt-4 flex gap-5 overflow-x-auto pb-2">
          {todoCourses.map((c) => (
            <CourseThumbnail key={c.slug} course={c} />
          ))}
        </div>
      )}
    </section>
  );
}
