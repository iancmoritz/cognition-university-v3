"use client";

import { Plus } from "lucide-react";
import clsx from "clsx";
import { useSidebar } from "./SidebarContext";

// No editor behind this yet — button is present to match Sana's layout
// (it's the most prominent CTA in their sidebar).
export function CreateNewButton() {
  const { expanded } = useSidebar();

  return (
    <div className="p-2.5">
      <button
        type="button"
        disabled
        aria-disabled
        title="Content creation coming soon"
        className={clsx(
          "flex w-full items-center justify-center gap-2 rounded-full bg-primary py-2.5 text-sm font-medium text-black",
          "transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-90",
        )}
      >
        {expanded ? "Create new" : <Plus size={18} strokeWidth={2.5} />}
      </button>
    </div>
  );
}
