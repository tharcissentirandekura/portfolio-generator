import { Link } from 'react-router-dom';
import LandscapeDivider from '../components/LandscapeDivider';
import { COMPUTER_SCIENCE_COURSES, getCourse, LEARNING_THREADS, type ComputerScienceCourse } from '../data/academics';

const CourseButton = ({ course, inverse = false }: { course: ComputerScienceCourse; inverse?: boolean }) => {
  const current = course.status === 'In progress';

  return (
    <Link
      to={`/academics/${course.id}`}
      aria-label={`Read my reflection on ${course.title}`}
      className={`group inline-flex min-h-12 max-w-full items-center gap-3 rounded-full border py-1.5 pl-1.5 pr-2 text-left transition-colors ${
        inverse
          ? 'border-white/20 text-white hover:border-white hover:bg-white hover:text-ink dark:border-ink/20 dark:text-ink dark:hover:border-ink dark:hover:bg-ink dark:hover:text-white'
          : current
            ? 'border-accent/45 bg-paper hover:border-accent hover:bg-ink hover:text-white dark:bg-night dark:hover:bg-white dark:hover:text-ink'
            : 'border-ink/15 bg-paper hover:border-ink hover:bg-ink hover:text-white dark:border-white/15 dark:bg-night dark:hover:border-white dark:hover:bg-white dark:hover:text-ink'
      }`}
    >
      <span className={`shrink-0 rounded-full border bg-transparent px-3.5 py-2 font-mono text-[10px] font-semibold tracking-wide ${
        inverse
          ? 'border-white/25 text-white/65 group-hover:text-inherit dark:border-ink/20 dark:text-ink/60'
          : 'border-ink/15 text-stone-500 dark:border-white/20 dark:text-stone-300'
      }`}>{course.code}</span>
      <span className="font-medium leading-tight">{course.title}</span>
    </Link>
  );
};

const Academics = () => {
  const currentCourses = COMPUTER_SCIENCE_COURSES.filter((course) => course.status === 'In progress');

  return (
    <div>
      <header className="page-shell pb-12 pt-14 sm:pb-16 sm:pt-20">
        <h1 className="page-title">The ideas behind how I build.</h1>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-14">
          <p className="font-display text-2xl leading-snug tracking-tight text-stone-600 dark:text-stone-300 sm:text-3xl">My computer science coursework moves from core programming into systems, human-centered software, artificial intelligence, and theory.</p>
          <p className="max-w-lg text-base leading-relaxed text-stone-500 dark:text-stone-400">Rather than a transcript, this page groups courses by the questions and technical perspectives they helped me develop.</p>
        </div>
      </header>

      <LandscapeDivider filled />

      <section className="bg-ink text-white dark:bg-white dark:text-ink">
        <div className="page-shell grid gap-8 py-12 sm:py-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">Current semester</p>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">Working at the edges of the major.</h2>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {currentCourses.map((course) => (
              <CourseButton key={course.id} course={course} inverse />
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-14 sm:py-16">
        <div className="mb-10 grid gap-4 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <p className="eyebrow">Learning threads</p>
          <h2 className="section-title">Four paths through the curriculum.</h2>
        </div>

        <div className="space-y-4">
          {LEARNING_THREADS.map((thread) => {
            const courses = thread.courseIds.map(getCourse).filter((course): course is ComputerScienceCourse => Boolean(course));
            return (
              <article key={thread.number} className="py-7 sm:py-9">
                <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
                  <div>
                    <p className="font-mono text-xs text-stone-400">{thread.number}</p>
                    <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{thread.title}</h2>
                    <p className="mt-3 max-w-sm leading-relaxed text-stone-600 dark:text-stone-300">{thread.description}</p>
                  </div>
                  <div className="flex content-start flex-wrap gap-2.5 lg:pt-1">
                    {courses.map((course) => <CourseButton key={course.id} course={course} />)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <LandscapeDivider />
    </div>
  );
};

export default Academics;
