import Link from "next/link";
import Image from "next/image";
import { Pin } from "lucide-react";
import type { Course } from "@/lib/types";

/**
 * Large image cards in a 2-up grid. Sana uses ~24px radius and full-bleed
 * photos with the title revealed on hover.
 * Reference: design-reference/ref-homepage-full.png (Earth + purple gradient cards)
 */
export function FeaturedRow({ courses }: { courses: Course[] }) {
  if (courses.length === 0) return null;

  return (
    <section className="mt-10">
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-text-secondary">
        <Pin size={15} strokeWidth={1.75} />
        <span>Featured</span>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {courses.map((c) => (
          <Link
            key={c.slug}
            href={`/courses/${c.slug}`}
            className="group relative aspect-video overflow-hidden rounded-xl"
          >
            <Image
              src={c.coverImage}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="text-xl font-semibold text-white">{c.title}</div>
              <div className="mt-1 text-sm text-white/80">
                {c.duration} · {c.difficulty}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
