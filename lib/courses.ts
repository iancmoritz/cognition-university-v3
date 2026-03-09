import type { Course, Lesson, Section } from "./types";
import { mockCourses } from "./mock-data";

/**
 * Data layer — same function signatures as cognition-university's lib/courses.ts.
 *
 * Today this reads from mock-data. When cognition-university content is imported,
 * swap the implementation to scan content/courses/ for MDX files (gray-matter +
 * the generated import map pattern) without changing any call sites.
 */

export function getAllCourses(): Course[] {
  return [...mockCourses].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function getCourseBySlug(slug: string): Course | null {
  return mockCourses.find((c) => c.slug === slug) ?? null;
}

export function getFeaturedCourses(): Course[] {
  return mockCourses.filter((c) => c.featured);
}

/** Courses that should appear in the To-do card on Home. For now: first non-featured course. */
export function getTodoCourses(): Course[] {
  return mockCourses.filter((c) => !c.featured).slice(0, 1);
}

/** Flatten all lessons across sections, sorted by section order then lesson order. */
export function getFlatLessons(course: Course): Array<Lesson & { section: Section }> {
  return course.sections
    .slice()
    .sort((a, b) => a.order - b.order)
    .flatMap((section) =>
      section.lessons
        .slice()
        .sort((a, b) => a.order - b.order)
        .map((lesson) => ({ ...lesson, section })),
    );
}

export function getLesson(
  course: Course,
  lessonSlug: string,
): { lesson: Lesson; section: Section; prev: Lesson | null; next: Lesson | null } | null {
  const flat = getFlatLessons(course);
  const idx = flat.findIndex((l) => l.slug === lessonSlug);
  if (idx === -1) return null;
  const { section, ...lesson } = flat[idx];
  return {
    lesson,
    section,
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}
