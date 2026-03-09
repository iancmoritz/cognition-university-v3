"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ChevronDown, type LucideIcon } from "lucide-react";
import { useSidebar } from "./SidebarContext";

interface NavItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  /** Show a chevron — used for Manage / Settings which have sub-items in Sana. */
  expandable?: boolean;
}

export function NavItem({ href, icon: Icon, label, expandable }: NavItemProps) {
  const pathname = usePathname();
  const { expanded } = useSidebar();
  const active = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={clsx(
        "group flex items-center gap-3 rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-lavender text-text"
          : "text-text-secondary hover:bg-surface hover:text-text",
        !expanded && "justify-center px-2",
      )}
      title={!expanded ? label : undefined}
    >
      <Icon
        size={18}
        strokeWidth={1.75}
        className={clsx("shrink-0", active ? "text-text" : "text-text-secondary")}
      />
      {expanded && (
        <>
          <span className="flex-1 truncate">{label}</span>
          {expandable && (
            <ChevronDown size={14} strokeWidth={1.75} className="text-text-tertiary" />
          )}
        </>
      )}
    </Link>
  );
}
