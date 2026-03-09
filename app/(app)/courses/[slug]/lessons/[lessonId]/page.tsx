import { notFound } from "next/navigation";
import { getCourseBySlug, getLesson } from "@/lib/courses";
import { LessonFooter } from "@/components/lesson/LessonFooter";
import { LessonProgressBar } from "@/components/lesson/LessonProgressBar";
import { KeyboardNavigation } from "@/components/lesson/KeyboardNavigation";
import { Video } from "@/components/mdx/Video";
import { TrackCourseView } from "../../track-view";

interface Props {
  params: Promise<{ slug: string; lessonId: string }>;
}

export default async function LessonPage({ params }: Props) {
  const { slug, lessonId } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const result = getLesson(course, lessonId);
  if (!result) notFound();
  const { lesson, section, prev, next } = result;

  const prevUrl = prev ? `/courses/${slug}/lessons/${prev.slug}` : undefined;
  const nextUrl = next ? `/courses/${slug}/lessons/${next.slug}` : undefined;

  return (
    <>
      <TrackCourseView slug={slug} />
      <LessonProgressBar course={course} />
      <KeyboardNavigation prevUrl={prevUrl} nextUrl={nextUrl} />

      <div className="flex min-h-full flex-col">
        <article className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-text-tertiary">
            {section.title}
          </div>
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-text">
            {lesson.title}
          </h1>
          {lesson.duration && (
            <div className="mt-2 text-sm text-text-secondary">{lesson.duration}</div>
          )}

          <div className="prose-lesson mt-8">
            {lesson.videourl && <Video url={lesson.videourl} />}
            {lesson.body ?? <PlaceholderBody title={lesson.title} />}
          </div>
        </article>

        <LessonFooter courseSlug={slug} lesson={lesson} prev={prev} next={next} />
      </div>
    </>
  );
}

/**
 * Placeholder body for mock lessons that don't have MDX content yet.
 * When cognition-university content is imported, lesson.body will be
 * the rendered MDX and this branch won't execute.
 */
function PlaceholderBody({ title }: { title: string }) {
  return (
    <>
      <p>
        This is placeholder content for <strong>{title}</strong>. Real lesson content will
        be rendered from MDX files in <code>content/courses/</code> once imported from
        cognition-university.
      </p>
      <p>
        The lesson player supports <code>&lt;Video&gt;</code> and{" "}
        <code>&lt;CsvQuiz&gt;</code> MDX components out of the box, so existing lessons
        will render without modification.
      </p>
      <h2>What you&apos;ll learn</h2>
      <ul>
        <li>Key concept one — foundational understanding of the topic.</li>
        <li>Key concept two — practical techniques you can apply immediately.</li>
        <li>Key concept three — common pitfalls and how to avoid them.</li>
      </ul>
      <blockquote>
        Use the arrow keys to move between lessons, or click &ldquo;Mark complete&rdquo;
        below to record your progress.
      </blockquote>
    </>
  );
}
