"use client";

import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/lib/types";
import { getFlatLessons } from "@/lib/courses";
import { useCourseCompletion } from "@/lib/progress";

/**
 * Medium card used in Discover grid and Library list.
 * Shows cover + title + metadata row + progress bar.
 */
export function CourseGridCard({ course }: { course: Course }) {
  const lessonCount = getFlatLessons(course).length;
  const completion = useCourseCompletion(course.slug, lessonCount);

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-surface border border-border transition-all hover:border-border-strong hover:shadow-md"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={course.coverImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="font-semibold text-text">{course.title}</div>
        <div className="mt-1 line-clamp-2 flex-1 text-sm text-text-secondary">
          {course.description}
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-text-tertiary">
          <span>{course.duration}</span>
          <span>·</span>
          <span>{lessonCount} lessons</span>
          {course.difficulty && (
            <>
              <span>·</span>
              <span>{course.difficulty}</span>
            </>
          )}
        </div>
        {completion > 0 && (
          <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${completion * 100}%` }}
            />
          </div>
        )}
      </div>
    </Link>
  );
}
