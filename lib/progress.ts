"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * Progress tracking — localStorage only. No backend required for the UI clone.
 *
 * Storage shape:
 *   lms:progress:<courseSlug> → { "<lessonSlug>": { completed: true, at: "ISO" }, ... }
 *   lms:last-course          → "<courseSlug>"
 */

type LessonProgress = { completed: boolean; at: string };
type CourseProgress = Record<string, LessonProgress>;

const key = (courseSlug: string) => `lms:progress:${courseSlug}`;
const LAST_COURSE_KEY = "lms:last-course";

function read(courseSlug: string): CourseProgress {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(key(courseSlug));
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function write(courseSlug: string, progress: CourseProgress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key(courseSlug), JSON.stringify(progress));
  window.dispatchEvent(
    new CustomEvent("lms:progress-change", { detail: { courseSlug } }),
  );
}

export function markLessonComplete(courseSlug: string, lessonSlug: string) {
  const current = read(courseSlug);
  current[lessonSlug] = { completed: true, at: new Date().toISOString() };
  write(courseSlug, current);
}

export function markLessonIncomplete(courseSlug: string, lessonSlug: string) {
  const current = read(courseSlug);
  delete current[lessonSlug];
  write(courseSlug, current);
}

export function setLastViewedCourse(courseSlug: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LAST_COURSE_KEY, courseSlug);
}

export function getLastViewedCourse(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(LAST_COURSE_KEY);
}

/** Reactive hook — re-renders when progress for this course changes in any tab/component. */
export function useCourseProgress(courseSlug: string) {
  const [progress, setProgress] = useState<CourseProgress>({});

  useEffect(() => {
    setProgress(read(courseSlug));
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (!detail || detail.courseSlug === courseSlug) {
        setProgress(read(courseSlug));
      }
    };
    window.addEventListener("lms:progress-change", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("lms:progress-change", handler);
      window.removeEventListener("storage", handler);
    };
  }, [courseSlug]);

  const isComplete = useCallback(
    (lessonSlug: string) => progress[lessonSlug]?.completed ?? false,
    [progress],
  );

  const completedCount = Object.values(progress).filter((p) => p.completed).length;

  return { progress, isComplete, completedCount };
}

/** Fraction complete for a course. Client-only — returns 0 until hydrated. */
export function useCourseCompletion(courseSlug: string, totalLessons: number) {
  const { completedCount } = useCourseProgress(courseSlug);
  return totalLessons > 0 ? completedCount / totalLessons : 0;
}
