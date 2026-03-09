import { PenLine } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

export default function CreatePage() {
  return (
    <EmptyState
      icon={PenLine}
      title="Create"
      description="Create and manage learning content for your team. Course authoring tools coming soon."
    />
  );
}
