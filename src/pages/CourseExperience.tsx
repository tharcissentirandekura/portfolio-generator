import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import LandscapeDivider from '../components/LandscapeDivider';
import MarkdownArticle from '../components/MarkdownArticle';
import { getCourseMarkdown } from '../content/courseMarkdown';
import { COMPUTER_SCIENCE_COURSES, getCourse } from '../data/academics';

const CourseExperience = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? getCourse(courseId) : undefined;

  if (!course) return <Navigate to="/academics" replace />;

  const currentIndex = COMPUTER_SCIENCE_COURSES.findIndex((item) => item.id === course.id);
  const nextCourse = COMPUTER_SCIENCE_COURSES[(currentIndex + 1) % COMPUTER_SCIENCE_COURSES.length];
  const inProgress = course.status === 'In progress';
  const markdown = getCourseMarkdown(course.id);

  return (
    <article>
      <header className="page-shell pb-14 pt-14 sm:pb-20 sm:pt-20">
        <Link to="/academics" className="inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-ink dark:text-stone-400 dark:hover:text-white">
          <ArrowLeft size={16} /> All courses
        </Link>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          <div className="flex flex-wrap content-start gap-2">
            <span className="rounded-full border border-ink/15 px-4 py-2 font-mono text-xs dark:border-white/20">{course.code}</span>
            <span className="rounded-full bg-ink/[0.05] px-4 py-2 text-xs text-stone-500 dark:bg-white/[0.07] dark:text-stone-300">{course.term}</span>
          </div>
          <div>
            <p className={`mb-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${inProgress ? 'text-accent' : 'text-stone-400'}`}>
              {!inProgress && <Check size={13} />}{course.status}
            </p>
            <h1 className="page-title">{course.title}</h1>
            <p className="page-intro">{course.introduction}</p>
          </div>
        </div>
      </header>

      <LandscapeDivider />

      <div className="page-shell py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {markdown ? <MarkdownArticle source={markdown} /> : <p>Reflection coming soon.</p>}

          <div className="mt-20 flex items-center justify-between gap-6 border-t border-ink/10 pt-8 dark:border-white/10 sm:mt-24">
            <span className="text-xs uppercase tracking-[0.15em] text-stone-400">Next course</span>
            <Link to={`/academics/${nextCourse.id}`} className="group inline-flex items-center gap-3 text-right font-medium">
              {nextCourse.title}<ArrowRight size={18} className="shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseExperience;
