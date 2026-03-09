"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Home,
  Search,
  Archive,
  LayoutGrid,
} from "lucide-react";
import { useSidebar } from "./SidebarContext";
import { WorkspaceSwitcher } from "./WorkspaceSwitcher";
import { NavItem } from "./NavItem";
import { TeamspaceList } from "./TeamspaceList";
import { CreateNewButton } from "./CreateNewButton";
import { ResumeCard } from "./ResumeCard";
import { SidebarCourseOutline } from "./SidebarCourseOutline";
import { getCourseBySlug } from "@/lib/courses";

const SIDEBAR_WIDTH = 260;
const RAIL_WIDTH = 60;

/**
 * Sana's global sidebar. Three modes:
 *   1. Expanded — full nav (pinned)
 *   2. Rail — icon-only, hover to peek (unpinned)
 *   3. Course outline — content swaps when viewing a course/lesson
 *
 * Reference: design-reference/ref-sidebar-states.png
 */
export function GlobalSidebar() {
  const { pinned, expanded, setPeeking } = useSidebar();
  const pathname = usePathname();

  // Detect course context from URL — /courses/[slug] or /courses/[slug]/lessons/...
  const courseMatch = pathname.match(/^\/courses\/([^/]+)/);
  const course = courseMatch ? getCourseBySlug(courseMatch[1]) : null;

  const width = expanded ? SIDEBAR_WIDTH : RAIL_WIDTH;

  return (
    <>
      {/* Spacer — pushes main content. Only grows when pinned (peek overlays). */}
      <motion.div
        animate={{ width: pinned ? SIDEBAR_WIDTH : RAIL_WIDTH }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="shrink-0"
      />

      {/* Actual sidebar — fixed so hover-peek can overlay content. */}
      <motion.aside
        animate={{ width }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        onMouseEnter={() => !pinned && setPeeking(true)}
        onMouseLeave={() => !pinned && setPeeking(false)}
        className="fixed left-0 top-0 z-30 flex h-screen flex-col border-r border-border bg-bg transition-colors duration-200"
      >
        <WorkspaceSwitcher />

        {course ? (
          <SidebarCourseOutline course={course} />
        ) : (
          <>
            <ResumeCard />

            <nav className="thin-scrollbar min-h-0 flex-1 overflow-y-auto px-2.5 py-1">
              <div className="flex flex-col gap-0.5">
                <NavItem href="/home" icon={Home} label="Home" />
                <NavItem href="/search" icon={Search} label="Search" />
                <NavItem href="/discover" icon={Archive} label="Discover" />
                <NavItem href="/library" icon={LayoutGrid} label="My library" />
              </div>

              <div className="my-3 h-px bg-border" />

              <TeamspaceList />
            </nav>

            <CreateNewButton />
          </>
        )}
      </motion.aside>
    </>
  );
}
