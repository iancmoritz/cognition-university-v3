"use client";

import { getFlatLessons } from "@/lib/courses";
import { useCourseCompletion } from "@/lib/progress";
import type { Course } from "@/lib/types";

// Thin fixed progress bar at the very top of the viewport while reading a lesson.
export function LessonProgressBar({ course }: { course: Course }) {
  const total = getFlatLessons(course).length;
  const completion = useCourseCompletion(course.slug, total);

  return (
    <div className="fixed left-0 right-0 top-0 z-40 h-0.5 bg-border">
      <div
        className="h-full bg-primary transition-all duration-300"
        style={{ width: `${completion * 100}%` }}
      />
    </div>
  );
}
