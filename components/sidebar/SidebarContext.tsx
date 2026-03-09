"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface SidebarState {
  /** User's pinned preference. When false, sidebar lives as an icon rail. */
  pinned: boolean;
  setPinned: (v: boolean) => void;
  /** Transient hover-to-peek while collapsed. */
  peeking: boolean;
  setPeeking: (v: boolean) => void;
  /** true when sidebar should render at full width (pinned OR peeking). */
  expanded: boolean;
}

const Ctx = createContext<SidebarState | null>(null);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [pinned, setPinned] = useState(true);
  const [peeking, setPeeking] = useState(false);

  return (
    <Ctx.Provider
      value={{ pinned, setPinned, peeking, setPeeking, expanded: pinned || peeking }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useSidebar() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
}
