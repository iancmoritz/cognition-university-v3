"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { getAllCourses, getFlatLessons } from "@/lib/courses";
import { useCourseCompletion } from "@/lib/progress";
import type { Course } from "@/lib/types";

type Tab = "assigned" | "in-progress" | "completed";

export default function LibraryPage() {
  const [tab, setTab] = useState<Tab>("assigned");
  const courses = getAllCourses();

  return (
    <div className="px-8 pb-16">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-text">My library</h1>
        <p className="mt-1 text-text-secondary">
          Content assigned to you, with your progress and due dates.
        </p>
      </div>

      <div className="mb-6 flex gap-1 border-b border-border">
        <TabButton active={tab === "assigned"} onClick={() => setTab("assigned")}>
          Assigned
        </TabButton>
        <TabButton active={tab === "in-progress"} onClick={() => setTab("in-progress")}>
          In progress
        </TabButton>
        <TabButton active={tab === "completed"} onClick={() => setTab("completed")}>
          Completed
        </TabButton>
      </div>

      <div className="flex flex-col gap-3">
        {courses.map((c) => (
          <LibraryRow key={c.slug} course={c} filter={tab} />
        ))}
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "border-b-2 px-4 py-2.5 text-sm font-medium transition-colors",
        active
          ? "border-primary text-text"
          : "border-transparent text-text-secondary hover:text-text",
      )}
    >
      {children}
    </button>
  );
}

function LibraryRow({ course, filter }: { course: Course; filter: Tab }) {
  const lessonCount = getFlatLessons(course).length;
  const completion = useCourseCompletion(course.slug, lessonCount);

  // Client-side filter — hide rows that don't match the active tab.
  const hidden =
    (filter === "in-progress" && (completion === 0 || completion >= 1)) ||
    (filter === "completed" && completion < 1);
  if (hidden) return null;

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex items-center gap-4 rounded-lg bg-surface border border-border p-3 transition-all hover:border-border-strong hover:shadow-sm"
    >
      <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md">
        <Image
          src={course.coverImage}
          alt=""
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate font-semibold text-text">{course.title}</div>
        <div className="mt-0.5 flex items-center gap-2 text-xs text-text-secondary">
          <span>{course.duration}</span>
          <span>·</span>
          <span>{lessonCount} lessons</span>
        </div>
      </div>
      <div className="hidden w-40 items-center gap-3 sm:flex">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${completion * 100}%` }}
          />
        </div>
        <span className="w-9 text-right text-xs font-medium text-text-secondary">
          {Math.round(completion * 100)}%
        </span>
      </div>
      <div className="hidden text-xs text-text-tertiary md:block">No due date</div>
    </Link>
  );
}
