"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Check, Clock } from "lucide-react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import type { Section } from "@/lib/types";
import { useCourseProgress } from "@/lib/progress";

interface Props {
  courseSlug: string;
  section: Section;
  defaultOpen?: boolean;
}

export function SectionAccordion({ courseSlug, section, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const { isComplete } = useCourseProgress(courseSlug);

  const sortedLessons = section.lessons.slice().sort((a, b) => a.order - b.order);
  const completedInSection = sortedLessons.filter((l) => isComplete(l.slug)).length;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-surface"
      >
        <div className="flex-1">
          <div className="font-semibold text-text">{section.title}</div>
          <div className="mt-0.5 text-sm text-text-secondary">
            {completedInSection} / {sortedLessons.length} lessons
          </div>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={18} strokeWidth={1.75} className="text-text-secondary" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-border">
              {sortedLessons.map((lesson) => {
                const done = isComplete(lesson.slug);
                return (
                  <Link
                    key={lesson.id}
                    href={`/courses/${courseSlug}/lessons/${lesson.slug}`}
                    className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-surface"
                  >
                    <div
                      className={clsx(
                        "flex size-5 shrink-0 items-center justify-center rounded-full border",
                        done
                          ? "border-success bg-success text-white"
                          : "border-border-strong",
                      )}
                    >
                      {done && <Check size={12} strokeWidth={3} />}
                    </div>
                    <span className="flex-1 text-sm font-medium text-text">
                      {lesson.title}
                    </span>
                    {lesson.duration && (
                      <span className="flex items-center gap-1 text-xs text-text-tertiary">
                        <Clock size={12} strokeWidth={1.75} />
                        {lesson.duration}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
