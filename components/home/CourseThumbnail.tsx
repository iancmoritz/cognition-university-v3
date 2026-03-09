"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import type { Course } from "@/lib/types";
import { getFlatLessons } from "@/lib/courses";
import { useCourseCompletion } from "@/lib/progress";

/**
 * Compact course card — image with overlay badge + thin progress bar + title/subtitle.
 * Used in the To-do section of the Home hero card.
 * Reference: design-reference/ref-homepage-full.png (hot air balloons card)
 */
export function CourseThumbnail({ course }: { course: Course }) {
  const lessonCount = getFlatLessons(course).length;
  const completion = useCourseCompletion(course.slug, lessonCount);

  return (
    <Link href={`/courses/${course.slug}`} className="group block w-72 shrink-0">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={course.coverImage}
          alt=""
          fill
          sizes="288px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {course.badge && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-text shadow-sm">
            <CalendarDays size={12} strokeWidth={2} />
            {course.badge}
          </div>
        )}
      </div>

      {/* Thin progress bar directly under the image */}
      <div className="mt-1 h-0.5 w-full overflow-hidden rounded-full bg-black/10">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${completion * 100}%` }}
        />
      </div>

      <div className="pt-2.5">
        <div className="truncate text-sm font-semibold text-text">{course.title}</div>
        <div className="truncate text-sm text-text-secondary">
          {course.badge === "In-person" ? "Choose a session" : course.description}
        </div>
      </div>
    </Link>
  );
}
