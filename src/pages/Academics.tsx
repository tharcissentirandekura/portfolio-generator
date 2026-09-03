import { useEffect, useRef } from 'react';
import { MoveHorizontal } from 'lucide-react';
import LandscapeDivider from '../components/LandscapeDivider';
import { COMPUTER_SCIENCE_COURSES, COURSE_CONNECTIONS, type ComputerScienceCourse } from '../data/academics';

const NODE_WIDTH = 280;
const NODE_HEIGHT = 126;

const CourseNode = ({ course }: { course: ComputerScienceCourse }) => {
  const complete = course.status === 'Completed';

  return (
    <article
      className={`absolute flex h-[126px] w-[280px] flex-col items-center justify-center rounded-[1.7rem] border px-5 text-center ${complete ? 'border-emerald-400 bg-[#306b55]' : 'border-indigo-400 bg-[#535b8c]'}`}
      style={{ left: course.x, top: course.y }}
    >
      <h2 className="font-display text-[23px] font-semibold leading-tight tracking-tight text-white">{course.title}</h2>
      <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-white">
        <div className="h-full rounded-full bg-emerald-400" style={{ width: `${course.progress}%` }} />
      </div>
    </article>
  );
};

const Academics = () => {
  const coursesById = new Map(COMPUTER_SCIENCE_COURSES.map((course) => [course.id, course]));
  const canvasViewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = canvasViewport.current;
    if (viewport && viewport.scrollWidth > viewport.clientWidth) {
      viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2;
    }
  }, []);

  return (
    <div>
      <header className="page-shell pb-14 pt-16 sm:pb-20 sm:pt-24">
        <p className="eyebrow">Academics · Computer Science</p>
        <h1 className="page-title mt-5">My CS course map.</h1>
        <p className="page-intro">A prerequisite-style view of how my computer science coursework has progressed from foundations into systems, theory, AI, and interdisciplinary work.</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-stone-500 dark:text-stone-400">
          <span className="inline-flex items-center gap-2"><span className="size-2.5 rounded-full bg-emerald-500" /> Completed</span>
          <span className="inline-flex items-center gap-2"><span className="size-2.5 rounded-full bg-indigo-400" /> In progress</span>
          <span className="inline-flex items-center gap-2 sm:hidden"><MoveHorizontal size={16} /> Scroll to explore</span>
        </div>
      </header>

      <LandscapeDivider />

      <div className="py-10 sm:py-16">
        <div className="page-shell mb-6 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Learning path</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-500 dark:text-stone-400">Connections show the academic foundation that led into each later course.</p>
          </div>
          <p className="hidden font-mono text-xs text-stone-400 sm:block">Foundations ↓ Advanced work</p>
        </div>

        <div ref={canvasViewport} className="mx-auto max-w-[90rem] overflow-x-auto px-5 pb-5 sm:px-8 lg:px-12">
          <div
            className="relative mx-auto h-[1160px] w-[1230px] overflow-hidden rounded-[2rem] bg-[#1d1d20]"
            aria-label="Computer science course prerequisite map"
          >
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1230 1160" fill="none" aria-hidden="true">
              {COURSE_CONNECTIONS.map((connection) => {
                const from = coursesById.get(connection.from);
                const to = coursesById.get(connection.to);
                if (!from || !to) return null;
                const startX = from.x + NODE_WIDTH / 2;
                const startY = from.y + NODE_HEIGHT;
                const endX = to.x + NODE_WIDTH / 2;
                const endY = to.y;
                const midpoint = startY + (endY - startY) / 2;
                return <path key={`${connection.from}-${connection.to}`} d={`M ${startX} ${startY} C ${startX} ${midpoint}, ${endX} ${midpoint}, ${endX} ${endY}`} stroke="#aaa9ac" strokeWidth="4" strokeLinecap="round" />;
              })}
            </svg>

            {COMPUTER_SCIENCE_COURSES.map((course) => <CourseNode key={course.id} course={course} />)}
          </div>
        </div>
      </div>

      <LandscapeDivider />
    </div>
  );
};

export default Academics;
