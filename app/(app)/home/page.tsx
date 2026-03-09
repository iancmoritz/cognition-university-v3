import { getFeaturedCourses, getTodoCourses } from "@/lib/courses";
import { HeroCard } from "@/components/home/HeroCard";
import { FeaturedRow } from "@/components/home/FeaturedRow";

export default function HomePage() {
  const todo = getTodoCourses();
  const featured = getFeaturedCourses();

  return (
    <div className="px-8 pb-16">
      <HeroCard todoCourses={todo} />
      <FeaturedRow courses={featured} />
    </div>
  );
}
