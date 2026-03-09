"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, Clock, BarChart3 } from "lucide-react";
import type { Course } from "@/lib/types";
import { getFlatLessons } from "@/lib/courses";
import { useCourseProgress } from "@/lib/progress";

export function CourseHeader({ course }: { course: Course }) {
  const flat = getFlatLessons(course);
  const { completedCount, isComplete } = useCourseProgress(course.slug);
  const started = completedCount > 0;

  // Resume target: first incomplete lesson, or first lesson if everything's done.
  const resumeTarget = flat.find((l) => !isComplete(l.slug)) ?? flat[0];

  const pct = flat.length > 0 ? (completedCount / flat.length) * 100 : 0;

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div className="relative h-64 w-full md:h-80">
        <Image
          src={course.coverImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            {course.title}
          </h1>
          <p className="mt-2 max-w-2xl text-white/90">{course.description}</p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/80">
            {course.duration && (
              <span className="flex items-center gap-1.5">
                <Clock size={14} strokeWidth={1.75} />
                {course.duration}
              </span>
            )}
            {course.difficulty && (
              <span className="flex items-center gap-1.5">
                <BarChart3 size={14} strokeWidth={1.75} />
                {course.difficulty}
              </span>
            )}
            <span>{flat.length} lessons</span>
          </div>

          {resumeTarget && (
            <Link
              href={`/courses/${course.slug}/lessons/${resumeTarget.slug}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
            >
              <Play size={16} fill="currentColor" />
              {started ? "Resume" : "Start course"}
            </Link>
          )}
        </div>
      </div>

      {/* Progress bar at very bottom of header */}
      {started && (
        <div className="h-1 w-full bg-white/20">
          <div className="h-full bg-primary transition-all" style={{ width: `${pct}%` }} />
        </div>
      )}
    </div>
  );
}
