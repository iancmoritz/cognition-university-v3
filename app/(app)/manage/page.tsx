import { Building2 } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

export default function ManagePage() {
  return (
    <EmptyState
      icon={Building2}
      title="Manage"
      description="Manage users, groups, programs, certificates and more. Admin tooling is stubbed out — the nav item is present to match Sana's layout."
    />
  );
}
