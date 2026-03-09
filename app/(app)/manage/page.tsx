import { Building2 } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

export default function ManagePage() {
  return (
    <EmptyState
      icon={Building2}
      title="Manage"
      description="Manage users, teams, and organization settings for your Devin deployment."
    />
  );
}
