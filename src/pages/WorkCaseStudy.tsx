import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import LandscapeDivider from '../components/LandscapeDivider';
import { defaultProjectStatus, getWorkProjectBySlug } from '../data/workProjects';

const WorkCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getWorkProjectBySlug(slug);

  if (!project) return <Navigate to="/work" replace />;

  return (
    <article>
      <header className="page-shell page-top pb-14 sm:pb-20">
        <Link to="/work" className="mb-12 inline-flex items-center gap-2 text-sm text-stone-500 hover:text-ink dark:text-stone-400 dark:hover:text-white"><ArrowLeft size={16} /> All work</Link>
        <p className="eyebrow">{project.platform} · {defaultProjectStatus(project)}</p>
        <h1 className="page-title mt-5">{project.title}</h1>
        <p className="page-intro">{project.shortDescription}</p>
        <div className="mt-10 grid gap-7 border-t border-ink/10 pt-7 text-sm dark:border-white/10 sm:grid-cols-3">
          <div><p className="meta-label">Role</p><p className="mt-2">{project.roleLabel}</p></div>
          <div><p className="meta-label">Timeline</p><p className="mt-2">{project.period}</p></div>
          <div><p className="meta-label">Tools</p><p className="mt-2 leading-relaxed">{project.technologies.join(', ')}</p></div>
        </div>
      </header>

      <LandscapeDivider />

      <div className="page-shell mt-8 sm:mt-12">
        <div className="overflow-hidden rounded-2xl bg-stone-200 p-2 dark:bg-stone-800 sm:p-4">
          <img src={project.featured_image} alt={`${project.title} interface`} className="max-h-[42rem] w-full rounded-xl object-cover object-top" />
        </div>
      </div>

      <LandscapeDivider />

      <div className="page-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
        <div><p className="eyebrow">The project</p></div>
        <div className="max-w-3xl">
          <p className="font-display text-3xl leading-snug tracking-tight sm:text-4xl">{project.fullDescription}</p>
          <div className="mt-14 grid gap-8 border-y border-ink/10 py-8 dark:border-white/10 sm:grid-cols-2">
            <div>
              <p className="meta-label">Challenge</p>
              <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-300">{project.challenge}</p>
            </div>
            <div>
              <p className="meta-label">My contribution</p>
              <p className="mt-3 leading-relaxed text-stone-600 dark:text-stone-300">{project.contribution}</p>
            </div>
          </div>
          <section className="mt-16">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em]">What I worked on</h2>
            <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10 dark:divide-white/10 dark:border-white/10">
              {project.achievements.map((achievement, index) => (
                <li key={achievement} className="grid grid-cols-[2rem_1fr] gap-4 py-5 leading-relaxed text-stone-600 dark:text-stone-300"><span className="font-mono text-xs text-stone-400">0{index + 1}</span>{achievement}</li>
              ))}
            </ul>
          </section>
          <section className="mt-12 rounded-2xl bg-ink p-8 text-white dark:bg-white dark:text-ink sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">Outcome</p>
            <p className="mt-4 font-display text-2xl leading-snug sm:text-3xl">{project.impact}</p>
          </section>
          <a href={project.link} target="_blank" rel="noreferrer" className="button button-dark mt-10">Visit project <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </article>
  );
};

export default WorkCaseStudy;
