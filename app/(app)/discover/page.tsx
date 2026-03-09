import { getAllCourses } from "@/lib/courses";
import { CourseGridCard } from "@/components/home/CourseGridCard";

export default function DiscoverPage() {
  const courses = getAllCourses();

  return (
    <div className="px-8 pb-16">
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-semibold text-text">Discover</h1>
        <p className="mt-1 text-text-secondary">
          Browse all content available in your workspace.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseGridCard key={c.slug} course={c} />
        ))}
      </div>
    </div>
  );
}
