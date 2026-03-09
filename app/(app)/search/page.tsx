import { Search } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";

export default function SearchPage() {
  return (
    <EmptyState
      icon={Search}
      title="Search"
      description="Search across all courses, lessons, and documentation in your workspace."
    />
  );
}
