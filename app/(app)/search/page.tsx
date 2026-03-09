import { Search } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

export default function SearchPage() {
  return (
    <EmptyState
      icon={Search}
      title="Search"
      description="Search across all content in your workspace. In Sana this is an AI-powered assistant — here it's a placeholder so the nav never 404s."
    />
  );
}
