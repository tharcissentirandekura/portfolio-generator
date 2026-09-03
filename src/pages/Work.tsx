import ProjectRow from '../components/ProjectRow';
import { WORK_PROJECTS } from '../data/workProjects';

const Work = () => (
  <div className="page-shell page-top">
    <p className="eyebrow">Selected work · 2024—Now</p>
    <h1 className="page-title mt-5">Work with a reason behind it.</h1>
    <p className="page-intro">A short collection of software, education, and infrastructure projects. I care about systems that are dependable, accessible, and useful beyond the demo.</p>
    <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-stone-500 dark:text-stone-400">
      <span><strong className="font-semibold text-ink dark:text-white">Focus</strong> Full-stack engineering</span>
      <span><strong className="font-semibold text-ink dark:text-white">Strengths</strong> Product ownership · Systems thinking</span>
      <span><strong className="font-semibold text-ink dark:text-white">Domain</strong> Education · Infrastructure · Fintech</span>
    </div>
    <div className="mt-16 border-b border-ink/10 dark:border-white/10 sm:mt-24">
      {WORK_PROJECTS.map((project, index) => <ProjectRow key={project.slug} project={project} index={index} />)}
    </div>
  </div>
);

export default Work;
