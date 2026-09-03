import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { WorkProject } from '../data/workProjects';

const visualStyles = [
  'bg-[#dbeafe] dark:bg-[#172554]',
  'bg-[#ede9fe] dark:bg-[#2e1065]',
  'bg-[#ffedd5] dark:bg-[#431407]',
];

const ProjectRow = ({ project, index }: { project: WorkProject; index: number }) => (
  <Link
    to={`/work/${project.slug}`}
    className="group grid overflow-hidden rounded-[1.75rem] bg-ink/[0.025] transition-transform duration-300 hover:-translate-y-1 dark:bg-white/[0.04] lg:grid-cols-[0.85fr_1.15fr]"
  >
    <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.13em] text-stone-400">
        <span className="font-mono">0{index + 1}</span>
        <span>{project.roleLabel}</span>
      </div>

      <h3 className="mt-7 max-w-xl font-display text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">
        {project.title}
      </h3>
      <p className="mt-3 text-sm text-stone-500 dark:text-stone-400">{project.company} · {project.period}</p>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-600 dark:text-stone-300 sm:text-lg">
        {project.shortDescription}
      </p>
      <p className="mt-5 max-w-xl text-sm font-medium leading-relaxed">{project.impact}</p>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((technology) => (
          <span key={technology} className="tag">{technology}</span>
        ))}
      </div>

      <span className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent">
        View case study
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>

    <div className={`flex min-h-[22rem] items-center justify-center p-6 sm:min-h-[28rem] sm:p-10 lg:min-h-[34rem] ${visualStyles[index % visualStyles.length]}`}>
      <img
        src={project.featured_image}
        alt={`${project.title} project interface`}
        className="w-full max-w-3xl rounded-xl object-contain shadow-[0_24px_70px_rgba(15,23,42,0.24)] transition-transform duration-500 group-hover:scale-[1.015]"
        loading={index === 0 ? 'eager' : 'lazy'}
      />
    </div>
  </Link>
);

export default ProjectRow;
