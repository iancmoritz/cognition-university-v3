import { PenLine } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

export default function CreatePage() {
  return (
    <EmptyState
      icon={PenLine}
      title="Create"
      description="View and manage all courses you own or collaborate on. The authoring tool itself is intentionally out of scope for this UI clone."
    />
  );
}
