"use client";

import { useEffect } from "react";
import { setLastViewedCourse } from "@/lib/progress";

// Fires on mount to record the last-viewed course for the sidebar Resume card.
export function TrackCourseView({ slug }: { slug: string }) {
  useEffect(() => {
    setLastViewedCourse(slug);
  }, [slug]);
  return null;
}
