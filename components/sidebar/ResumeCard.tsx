"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { getLastViewedCourse } from "@/lib/progress";
import { getCourseBySlug } from "@/lib/courses";
import { useSidebar } from "./SidebarContext";

/**
 * The "Resume <course>" pill that Sana pins above the nav after you've
 * viewed a course. Reads last-viewed course from localStorage.
 * See: design-reference/ref-sidebar-resume.png
 */
export function ResumeCard() {
  const { expanded } = useSidebar();
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    setSlug(getLastViewedCourse());
  }, []);

  if (!slug || !expanded) return null;
  const course = getCourseBySlug(slug);
  if (!course) return null;

  return (
    <div className="px-2.5 pb-1">
      <Link
        href={`/courses/${course.slug}`}
        className="flex items-center gap-2 rounded-md border border-border-strong px-3 py-2.5 text-sm transition-colors hover:border-text"
      >
        <span className="font-medium text-text-secondary">Resume</span>
        <span className="flex-1 truncate font-semibold text-text">{course.title}</span>
        <div className="flex size-5 items-center justify-center rounded bg-primary">
          <Play size={10} fill="black" className="text-black" />
        </div>
      </Link>
    </div>
  );
}
