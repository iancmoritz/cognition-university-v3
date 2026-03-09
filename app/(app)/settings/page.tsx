import { SlidersHorizontal } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

export default function SettingsPage() {
  return (
    <EmptyState
      icon={SlidersHorizontal}
      title="Settings"
      description="Workspace and account settings. Placeholder for now."
    />
  );
}
