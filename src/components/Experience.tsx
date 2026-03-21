import { Link } from 'react-router-dom';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { WORK_PROJECTS, type WorkProject } from '../data/workProjects';

const INITIAL_WORK_COUNT = 3;

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** Diagonal up-right arrow (↗) for “Read More” CTA */
const ArrowUpRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M7 17L17 7M17 7H9M17 7V15"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type WorkCardProps = {
  exp: WorkProject;
  index: number;
  loading: 'eager' | 'lazy';
};

const WorkCard = ({ exp, index, loading }: WorkCardProps) => (
  <article
    className="flex flex-col scroll-mt-28"
    id={`work-${index}`}
  >
    <Link
      to={`/work/${exp.slug}`}
      className="mb-4 block overflow-hidden rounded-2xl bg-gray-100 ring-1 ring-black/5 transition-opacity hover:opacity-95 dark:bg-gray-800/80 dark:ring-white/10"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={exp.featured_image}
          alt={`${exp.title} — ${exp.company}`}
          className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
          loading={loading}
        />
      </div>
    </Link>
    <Link to={`/work/${exp.slug}`} className="block">
      <h3 className="text-base font-bold leading-snug text-black transition-colors hover:text-gray-700 dark:text-white dark:hover:text-gray-200 sm:text-lg">
        {exp.title}
        <span className="font-bold text-gray-500 dark:text-gray-400"> — </span>
        <span className="font-bold">{exp.company}</span>
      </h3>
    </Link>
    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
      {exp.shortDescription}
    </p>
    <div className="mt-5">
      <Link
        to={`/work/${exp.slug}`}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-black shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:bg-white dark:text-black"
      >
        Read More
        <ArrowUpRightIcon className="shrink-0 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </div>
  </article>
);

const Experience = () => {
  const experiences = WORK_PROJECTS;

  const hasMoreWork = experiences.length > INITIAL_WORK_COUNT;
  const featuredWork = experiences.slice(0, INITIAL_WORK_COUNT);
  const moreWork = experiences.slice(INITIAL_WORK_COUNT);

  const introBullets = (exp: WorkProject) => {
    const fromAchievements = exp.achievements.slice(0, 3);
    if (fromAchievements.length >= 3) return fromAchievements;
    return [exp.shortDescription, ...fromAchievements].slice(0, 3);
  };

  return (
    <ScrollAnimationWrapper direction="left" delay={0.2}>
      <section
        id="experience"
        className="experience-section mb-0 max-w-6xl mx-auto px-4 scroll-mt-24 text-gray-900 dark:text-gray-100"
      >
        <h2 className="work-section-heading">
          My past work
        </h2>

        {/* First roles: original two-column layout */}
        <div className="space-y-20 sm:space-y-24">
          {featuredWork.map((exp, index) => (
            <article
              key={`${exp.company}-${exp.title}-${index}`}
              className="scroll-mt-28"
              id={`work-${index}`}
            >
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                <Link
                  to={`/work/${exp.slug}`}
                  className={`rounded-[2rem] overflow-hidden p-6 sm:p-8 ${exp.bgColor} border border-black/5 shadow-sm transition-opacity hover:opacity-95`}
                >
                  <div className="rounded-2xl bg-white/60 backdrop-blur-sm overflow-hidden ring-1 ring-black/5">
                    <img
                      src={exp.featured_image}
                      alt={`${exp.title} at ${exp.company}`}
                      className="w-full h-auto max-h-[min(420px,55vh)] object-contain bg-white"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </Link>

                <div className="flex flex-col pt-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-900 dark:text-slate-100 leading-tight">
                    <Link
                      to={`/work/${exp.slug}`}
                      className="hover:opacity-80 transition-opacity"
                    >
                      {exp.title}
                      <span className="text-slate-500 dark:text-slate-400"> — </span>
                      <span className="text-slate-800 dark:text-slate-200">{exp.company}</span>
                    </Link>
                  </h3>
                  {exp.period ? (
                    <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </p>
                  ) : null}

                  <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    {introBullets(exp).map((line, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckIcon className={`shrink-0 mt-0.5 ${exp.accentColor}`} />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      to={`/work/${exp.slug}`}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-black shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:bg-white dark:text-black"
                    >
                      Read More
                      <ArrowUpRightIcon className="shrink-0 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {index < featuredWork.length - 1 ? (
                <div className="mt-16 sm:mt-20 border-b border-gray-200 dark:border-gray-700" aria-hidden />
              ) : null}
            </article>
          ))}
        </div>

        {/* Extra roles: horizontal card row (only when there are more than 3) */}
        {hasMoreWork ? (
          <div className="mt-14 sm:mt-16">
            <h3 className="work-section-heading">
              More work
            </h3>
            <div className="grid grid-cols-1 gap-10 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12">
              {moreWork.map((exp, i) => (
                <WorkCard
                  key={`${exp.company}-${exp.title}-more-${i}`}
                  exp={exp}
                  index={INITIAL_WORK_COUNT + i}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </ScrollAnimationWrapper>
  );
};

export default Experience;
