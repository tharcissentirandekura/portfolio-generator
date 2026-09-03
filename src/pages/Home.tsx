import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LandscapeDivider from '../components/LandscapeDivider';
import ProjectRow from '../components/ProjectRow';
import { useTheme } from '../context/ThemeContext';
import { WORK_PROJECTS } from '../data/workProjects';

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
    <section className="page-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
      <div className="min-w-0">
        <h1 className="max-w-4xl font-display text-[clamp(2.35rem,9vw,4rem)] font-medium leading-[0.96] tracking-[-0.045em] sm:text-[clamp(3rem,7vw,6.5rem)] sm:leading-[0.94]">
          Computer science,
          <span className="block text-stone-400 dark:text-stone-500">with an economic lens.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone-600 dark:text-stone-300 sm:text-lg">
          I’m Tharcisse, a senior at Oberlin College and full-stack software engineer. I build reliable products and study how technology shapes access, incentives, and communities.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link to="/work" className="button button-dark">View selected work <ArrowRight size={17} /></Link>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="button button-light">View resume <ArrowUpRight size={16} /></a>
        </div>
      </div>

      <div className="relative mx-auto h-[38rem] w-full max-w-[32rem] lg:h-[44rem] lg:justify-self-end">
        <figure className="absolute left-0 top-0 z-20 w-[68%] overflow-hidden rounded-[2rem] shadow-soft">
          <img
            src={theme === 'dark' ? '/images/headshot-dark.jpeg' : '/images/head-shot.jpeg'}
            alt="Tharcisse Ntirandekura"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </figure>

        <figure className="absolute bottom-0 right-0 z-10 w-[72%] overflow-hidden rounded-[2rem] shadow-soft">
          <img
            src={theme === 'dark' ? '/images/profile-dark.jpeg' : '/images/profile-light.jpeg'}
            alt="Tharcisse Ntirandekura at Oberlin College"
            className="aspect-[4/5] w-full object-cover object-center"
          />
        </figure>
      </div>
    </section>

    <LandscapeDivider />

    <section>
      <div className="page-shell py-20 sm:py-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div><p className="eyebrow">Selected work</p><h2 className="section-title mt-4">Things I’ve helped build.</h2></div>
          <Link to="/work" className="hidden items-center gap-2 text-sm font-medium sm:flex">All work <ArrowRight size={16} /></Link>
        </div>
        <div className="space-y-8 sm:space-y-12">
          {WORK_PROJECTS.map((project, index) => <ProjectRow key={project.slug} project={project} index={index} />)}
        </div>
      </div>
    </section>

    <LandscapeDivider />

    <section>
      <div className="page-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="eyebrow">Currently</p>
          <h2 className="section-title mt-4">Learning in public. Building in practice.</h2>
        </div>
        <div className="space-y-3">
          {[
            ['Engineering', 'Modernizing Oberlin’s Conservatory Audio Archive across authentication, performance, and maintainability.'],
            ['Research', 'Exploring coordination and decision-making in multi-agent systems through simulated wildfire response.'],
            ['Next', 'Looking for new-grad software engineering roles where product judgment and technical ownership both matter.'],
          ].map(([title, copy], index) => (
            <div key={title} className="grid gap-3 rounded-2xl bg-ink/[0.025] px-5 py-6 dark:bg-white/[0.04] sm:grid-cols-[3rem_8rem_1fr] sm:gap-5">
              <span className="font-mono text-xs text-stone-400">0{index + 1}</span>
              <h3 className="font-semibold">{title}</h3>
              <p className="leading-relaxed text-stone-600 dark:text-stone-300">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <LandscapeDivider filled />

    <section className="bg-ink text-white dark:bg-white dark:text-ink">
      <div className="page-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">How I think</p>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl">Build the system. Understand the incentives.</h2>
        </div>
        <div className="flex flex-col justify-between gap-10">
          <p className="text-lg leading-relaxed text-stone-300 dark:text-stone-600">Computer science gives me the tools to make ideas concrete. Economics helps me ask who benefits, what scales, and why people choose to use a system in the first place.</p>
          <Link to="/about" className="inline-flex items-center gap-2 font-medium">Read my story <ArrowUpRight size={18} /></Link>
        </div>
      </div>
    </section>

    <section className="page-shell py-24 text-center sm:py-32">
      <p className="eyebrow justify-center">Let’s make something useful</p>
      <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-medium tracking-tight sm:text-6xl">Have a problem worth working on?</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/contact" className="button button-dark">Start a conversation <ArrowRight size={17} /></Link>
        <a href="https://www.linkedin.com/in/tharcisse-ntirandekura" target="_blank" rel="noreferrer" className="button button-light">LinkedIn <ArrowUpRight size={16} /></a>
      </div>
    </section>
    </>
  );
};

export default Home;
