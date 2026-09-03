import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { WorkProject } from '../data/workProjects';

const ProjectRow = ({ project, index }: { project: WorkProject; index: number }) => (
  <Link to={`/work/${project.slug}`} className="group grid gap-6 border-t border-ink/10 py-8 dark:border-white/10 md:grid-cols-[3rem_1fr_12rem] md:items-center md:gap-8">
    <span className="font-mono text-xs text-stone-400">0{index + 1}</span>
    <div>
      <p className="mb-2 text-sm text-stone-500 dark:text-stone-400">{project.roleLabel} · {project.company} · {project.period}</p>
      <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
      <p className="mt-3 max-w-2xl leading-relaxed text-stone-600 dark:text-stone-300">{project.shortDescription}</p>
      <p className="mt-3 text-sm font-medium text-ink dark:text-stone-100">Impact: {project.impact}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((technology) => <span key={technology} className="tag">{technology}</span>)}
      </div>
    </div>
    <div className="relative hidden aspect-[4/3] overflow-hidden rounded-xl bg-stone-200 dark:bg-stone-800 md:block">
      <img src={project.featured_image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-paper/90 text-ink opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={17} /></span>
    </div>
  </Link>
);

export default ProjectRow;
