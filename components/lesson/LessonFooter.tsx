"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import clsx from "clsx";
import type { Lesson } from "@/lib/types";
import { markLessonComplete, markLessonIncomplete, useCourseProgress } from "@/lib/progress";

interface Props {
  courseSlug: string;
  lesson: Lesson;
  prev: Lesson | null;
  next: Lesson | null;
}

/**
 * Sticky footer with prev/next navigation and a "Mark complete" toggle.
 * Clicking complete also auto-advances to the next lesson (Sana does this).
 */
export function LessonFooter({ courseSlug, lesson, prev, next }: Props) {
  const router = useRouter();
  const { isComplete } = useCourseProgress(courseSlug);
  const done = isComplete(lesson.slug);

  const toggleComplete = () => {
    if (done) {
      markLessonIncomplete(courseSlug, lesson.slug);
    } else {
      markLessonComplete(courseSlug, lesson.slug);
      if (next) {
        router.push(`/courses/${courseSlug}/lessons/${next.slug}`);
      }
    }
  };

  return (
    <footer className="sticky bottom-0 border-t border-border bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-4">
        {prev ? (
          <Link
            href={`/courses/${courseSlug}/lessons/${prev.slug}`}
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-text"
          >
            <ArrowLeft size={16} strokeWidth={1.75} />
            <span className="hidden sm:inline">Previous</span>
          </Link>
        ) : (
          <div />
        )}

        <button
          type="button"
          onClick={toggleComplete}
          className={clsx(
            "flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all",
            done
              ? "bg-success text-white hover:opacity-90"
              : "bg-primary text-white hover:bg-primary-hover",
          )}
        >
          <Check size={16} strokeWidth={2.5} />
          {done ? "Completed" : "Mark complete"}
        </button>

        {next ? (
          <Link
            href={`/courses/${courseSlug}/lessons/${next.slug}`}
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-text"
          >
            <span className="hidden sm:inline">Next</span>
            <ArrowRight size={16} strokeWidth={1.75} />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </footer>
  );
}
