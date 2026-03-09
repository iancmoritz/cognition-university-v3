import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function EmptyState({ icon: Icon, title, description }: Props) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-8 text-center">
      <div className="mb-4 rounded-xl bg-lavender p-4">
        <Icon size={28} strokeWidth={1.5} className="text-primary" />
      </div>
      <h1 className="text-2xl font-semibold text-text">{title}</h1>
      <p className="mt-2 max-w-md text-text-secondary">{description}</p>
    </div>
  );
}
