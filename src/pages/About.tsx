import { ArrowUpRight } from 'lucide-react';

const skills = ['TypeScript', 'React', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'Git', 'REST APIs'];

const About = () => (
  <div className="page-shell page-top">
    <p className="eyebrow">About</p>
    <h1 className="page-title mt-5">Engineer, economics student, community builder.</h1>
    <div className="mt-14 grid gap-12 sm:mt-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
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

    <section className="mt-24 border-t border-ink/10 pt-16 dark:border-white/10 sm:mt-32 sm:pt-20">
      <p className="eyebrow">What I bring</p>
      <h2 className="section-title mt-4 max-w-3xl">Technical range with a product point of view.</h2>
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-3">
        {[
          ['01', 'Engineering ownership', 'I’m comfortable moving between frontend, backend, authentication, data, and deployment to get a complete system working.'],
          ['02', 'Economic reasoning', 'I think about incentives, access, adoption, and tradeoffs—not only whether a feature can be implemented.'],
          ['03', 'Community context', 'Building across Burundi and the United States has taught me to listen closely and design for the environment people actually inhabit.'],
        ].map(([number, title, copy]) => (
          <article key={title} className="bg-paper p-7 dark:bg-night sm:p-8">
            <p className="font-mono text-xs text-stone-400">{number}</p>
            <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300">{copy}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="mt-20 grid gap-10 border-t border-ink/10 pt-16 dark:border-white/10 lg:grid-cols-2 lg:gap-20">
      <div><p className="eyebrow">Relevant coursework</p><p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300">Algorithms, software engineering, systems programming, human-computer interaction, natural language processing, and econometrics.</p></div>
      <div><p className="eyebrow">Research interest</p><p className="mt-4 text-lg leading-relaxed text-stone-600 dark:text-stone-300">How autonomous agents coordinate under uncertainty, and how technical systems can be evaluated through both performance and human outcomes.</p></div>
    </section>
  </div>
);

export default About;
