import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LandscapeDivider from '../components/LandscapeDivider';
import { PERSPECTIVES } from '../data/perspectives';

const skills = ['TypeScript', 'React', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'REST APIs'];

const About = () => (
  <div className="page-shell page-top">
    <p className="eyebrow">About</p>
    <h1 className="page-title mt-5">Engineer, economics student, community builder.</h1>
    <div className="mt-10 sm:mt-14"><LandscapeDivider fullWidth /></div>
    <div className="mt-10 grid gap-12 sm:mt-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
      <div>
        <img src="/images/head-shot.jpeg" alt="Portrait of Tharcisse Ntirandekura" className="aspect-[4/5] w-full rounded-2xl object-cover object-top" />
        <p className="mt-4 text-sm leading-relaxed text-stone-500 dark:text-stone-400">Born in Bujumbura, Burundi. Currently studying and building in Oberlin, Ohio.</p>
      </div>
      <div className="space-y-10">
        <div className="space-y-5 text-lg leading-relaxed text-stone-600 dark:text-stone-300 sm:text-xl">
          <p className="font-display text-3xl leading-snug text-ink dark:text-white sm:text-4xl">I’m interested in the systems behind everyday life—and how thoughtful technology can make them work better.</p>
          <p>I’m a senior at Oberlin College double majoring in Computer Science and Economics. My work sits between software engineering, applied AI, and products built for public benefit.</p>
          <p>Growing up in Burundi shaped what I choose to build. From exam preparation to cross-border fundraising, my projects often start with a practical barrier I have seen up close.</p>
        </div>
        <div className="grid gap-8 border-t border-ink/10 pt-10 dark:border-white/10 sm:grid-cols-2">
          <div><p className="eyebrow">Education</p><h2 className="mt-3 text-lg font-semibold">Oberlin College</h2><p className="mt-2 text-stone-500 dark:text-stone-400">B.A. Computer Science & Economics<br />Senior · Oberlin, Ohio</p></div>
          <div><p className="eyebrow">Focus</p><p className="mt-3 text-stone-500 dark:text-stone-400">Software systems, human-computer interaction, applied AI, product thinking, and technology for social impact.</p></div>
        </div>
        <div className="border-t border-ink/10 pt-10 dark:border-white/10">
          <p className="eyebrow">Toolkit</p><div className="mt-5 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="tag">{skill}</span>)}</div>
        </div>
        <div className="flex flex-wrap gap-5 border-t border-ink/10 pt-10 text-sm font-medium dark:border-white/10">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5">View resume <ArrowUpRight size={16} /></a>
          <a href="https://www.linkedin.com/in/tharcisse-ntirandekura" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5">LinkedIn <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </div>

    <div className="mt-20 sm:mt-28"><LandscapeDivider fullWidth /></div>
    <section className="mt-10 sm:mt-14">
      <p className="eyebrow">What I bring</p>
      <h2 className="section-title mt-4 max-w-3xl">Technical range with a product point of view.</h2>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {PERSPECTIVES.map((perspective, index) => (
          <Link
            key={perspective.slug}
            to={`/perspectives/${perspective.slug}`}
            aria-label={`Read my reflection on ${perspective.title}`}
            className={`group flex min-h-[22rem] flex-col rounded-[1.75rem] bg-ink/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:bg-ink/[0.065] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent dark:bg-white/[0.05] dark:hover:bg-white/[0.09] sm:p-8 ${index === 1 ? 'lg:mt-8' : ''}`}
          >
            <div className="flex items-center justify-between gap-4">
              <span className={`rounded-full px-3 py-1.5 font-mono text-xs ${perspective.accent}`}>{perspective.number}</span>
              <span className="grid size-10 place-items-center rounded-full bg-paper text-ink transition-transform duration-300 group-hover:rotate-12 dark:bg-night dark:text-white">
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </div>
            <h3 className="mt-12 max-w-xs font-display text-3xl font-semibold leading-tight tracking-tight">{perspective.title}</h3>
            <p className="mt-5 leading-relaxed text-stone-600 dark:text-stone-300">{perspective.summary}</p>
            <span className="mt-auto pt-10 text-sm font-semibold text-accent">
              Read reflection <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>

    <div className="mt-16"><LandscapeDivider fullWidth /></div>
    <section className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
      <div><p className="eyebrow">Relevant coursework</p><p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300">Algorithms, software engineering, systems programming, human-computer interaction, natural language processing, and econometrics.</p></div>
      <div><p className="eyebrow">Research interest</p><p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300">How autonomous agents coordinate under uncertainty, and how technical systems can be evaluated through both performance and human outcomes.</p></div>
    </section>
  </div>
);

export default About;
