"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Search, Check } from "lucide-react";
import clsx from "clsx";
import type { Course } from "@/lib/types";
import { getFlatLessons } from "@/lib/courses";
import { useCourseProgress } from "@/lib/progress";
import { useSidebar } from "./SidebarContext";

/**
 * Sana's "card navigation view" — when inside a course, the sidebar's
 * content swaps to show Back/Search buttons + the course outline as a
 * nested lesson tree. Same container, different content.
 */
export function SidebarCourseOutline({ course }: { course: Course }) {
  const router = useRouter();
  const params = useParams();
  const { expanded } = useSidebar();
  const { isComplete } = useCourseProgress(course.slug);
  const currentLessonSlug = params.lessonId as string | undefined;

  if (!expanded) {
    // Rail mode: just show a back arrow.
    return (
      <div className="flex flex-col items-center gap-1 px-2 pt-3">
        <button
          type="button"
          onClick={() => router.push("/home")}
          className="rounded-md p-2 text-text-secondary hover:bg-surface hover:text-text"
          aria-label="Back"
        >
          <ArrowLeft size={18} strokeWidth={1.75} />
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* Back / Search row — sits above the course title per Sana docs */}
      <div className="flex items-center gap-1 px-2.5 pb-2 pt-3">
        <button
          type="button"
          onClick={() => router.push("/home")}
          className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-text-secondary hover:bg-surface hover:text-text"
        >
          <ArrowLeft size={16} strokeWidth={1.75} />
          <span>Back</span>
        </button>
        <Link
          href="/search"
          className="rounded-md p-1.5 text-text-secondary hover:bg-surface hover:text-text"
          aria-label="Search"
        >
          <Search size={16} strokeWidth={1.75} />
        </Link>
      </div>

      {/* Course title */}
      <div className="px-4 pb-3">
        <Link
          href={`/courses/${course.slug}`}
          className="block truncate font-serif text-lg font-semibold text-text hover:opacity-70"
        >
          {course.title}
        </Link>
      </div>

      {/* Outline */}
      <div className="thin-scrollbar min-h-0 flex-1 overflow-y-auto px-2.5 pb-4">
        {course.sections
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((section) => (
            <div key={section.id} className="mb-3">
              <div className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-text-tertiary">
                {section.title}
              </div>
              {section.lessons
                .slice()
                .sort((a, b) => a.order - b.order)
                .map((lesson) => {
                  const active = lesson.slug === currentLessonSlug;
                  const done = isComplete(lesson.slug);
                  return (
                    <Link
                      key={lesson.id}
                      href={`/courses/${course.slug}/lessons/${lesson.slug}`}
                      className={clsx(
                        "group flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                        active
                          ? "bg-lavender font-medium text-text"
                          : "text-text-secondary hover:bg-surface hover:text-text",
                      )}
                    >
                      <div
                        className={clsx(
                          "flex size-4 shrink-0 items-center justify-center rounded-full border",
                          done
                            ? "border-success bg-success text-white"
                            : "border-border-strong",
                        )}
                      >
                        {done && <Check size={10} strokeWidth={3} />}
                      </div>
                      <span className="flex-1 truncate">{lesson.title}</span>
                    </Link>
                  );
                })}
            </div>
          ))}
      </div>

      {/* Progress summary footer */}
      <OutlineProgressFooter course={course} />
    </div>
  );
}

function OutlineProgressFooter({ course }: { course: Course }) {
  const flat = getFlatLessons(course);
  const { completedCount } = useCourseProgress(course.slug);
  const pct = flat.length > 0 ? (completedCount / flat.length) * 100 : 0;

  return (
    <div className="border-t border-border px-4 py-3">
      <div className="mb-1.5 flex items-center justify-between text-xs text-text-secondary">
        <span className="font-medium">Progress</span>
        <span>
          {completedCount} / {flat.length}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-border">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
