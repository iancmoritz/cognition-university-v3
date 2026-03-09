"use client";

import { ChevronDown, PanelLeft } from "lucide-react";
import { useSidebar } from "./SidebarContext";
import { mockWorkspace } from "@/lib/mock-data";

export function WorkspaceSwitcher() {
  const { pinned, setPinned, expanded } = useSidebar();

  return (
    <div className="flex items-center justify-between gap-2 px-2.5 py-3">
      <button
        type="button"
        className="flex min-w-0 items-center gap-2 rounded-md px-1 py-1 hover:bg-surface"
      >
        <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-semibold text-black">
          {mockWorkspace.initial}
        </div>
        {expanded && (
          <>
            <span className="truncate text-sm font-semibold text-text">
              {mockWorkspace.name}
            </span>
            <ChevronDown size={14} strokeWidth={2} className="text-text-tertiary" />
          </>
        )}
      </button>
      {expanded && (
        <button
          type="button"
          onClick={() => setPinned(!pinned)}
          className="rounded-md p-1.5 text-text-secondary hover:bg-surface hover:text-text"
          aria-label={pinned ? "Collapse sidebar" : "Pin sidebar"}
        >
          <PanelLeft size={16} strokeWidth={1.75} />
        </button>
      )}
    </div>
  );
}
