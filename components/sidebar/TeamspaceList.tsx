"use client";

import { ChevronDown, Plus } from "lucide-react";
import clsx from "clsx";
import { mockTeamspaces } from "@/lib/mock-data";
import { useSidebar } from "./SidebarContext";

export function TeamspaceList() {
  const { expanded } = useSidebar();

  if (!expanded) {
    // In rail mode Sana shows just the avatars stacked.
    return (
      <div className="flex flex-col items-center gap-1 py-2">
        {mockTeamspaces.map((ts) => (
          <div
            key={ts.id}
            className="flex size-6 items-center justify-center rounded-md text-xs"
            style={{ backgroundColor: ts.color }}
            title={ts.name}
          >
            {ts.emoji}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="py-1">
      {mockTeamspaces.map((ts) => (
        <button
          key={ts.id}
          type="button"
          className={clsx(
            "group flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm",
            "text-text-secondary hover:bg-surface hover:text-text",
          )}
        >
          <div
            className="flex size-5 shrink-0 items-center justify-center rounded text-xs"
            style={{ backgroundColor: ts.color }}
          >
            {ts.emoji}
          </div>
          <span className="flex-1 truncate text-left font-medium">{ts.name}</span>
          <ChevronDown size={14} strokeWidth={1.75} className="text-text-tertiary" />
        </button>
      ))}
      <button
        type="button"
        className="mt-1 flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm text-text-secondary hover:bg-surface hover:text-text"
      >
        <div className="flex size-5 items-center justify-center">
          <Plus size={14} strokeWidth={2} />
        </div>
        <span className="font-medium">Browse</span>
      </button>
    </div>
  );
}
