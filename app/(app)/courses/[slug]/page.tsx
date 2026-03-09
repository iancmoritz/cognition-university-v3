import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/lib/courses";
import { CourseHeader } from "@/components/course/CourseHeader";
import { SectionAccordion } from "@/components/course/SectionAccordion";
import { TrackCourseView } from "./track-view";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const sortedSections = course.sections.slice().sort((a, b) => a.order - b.order);

  return (
    <div className="px-8 pb-16">
      <TrackCourseView slug={slug} />
      <CourseHeader course={course} />

      <div className="mt-8 max-w-3xl">
        <h2 className="mb-4 text-2xl font-semibold text-text">Outline</h2>
        <div className="flex flex-col gap-3">
          {sortedSections.map((s, i) => (
            <SectionAccordion
              key={s.id}
              courseSlug={course.slug}
              section={s}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
