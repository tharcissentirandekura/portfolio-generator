import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import LandscapeDivider from '../components/LandscapeDivider';
import { getPerspectiveBySlug, PERSPECTIVES } from '../data/perspectives';

const Perspective = () => {
  const { slug } = useParams<{ slug: string }>();
  const perspective = getPerspectiveBySlug(slug);

  if (!perspective) return <Navigate to="/about" replace />;

  const currentIndex = PERSPECTIVES.findIndex((item) => item.slug === perspective.slug);
  const next = PERSPECTIVES[(currentIndex + 1) % PERSPECTIVES.length];

  return (
    <article>
      <header className="page-shell page-top pb-16 sm:pb-20">
        <Link to="/about" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-ink dark:text-stone-400 dark:hover:text-white">
          <ArrowLeft size={16} /> About me
        </Link>
        <div className="mt-16 grid gap-8 lg:grid-cols-[0.3fr_1fr] lg:gap-16">
          <div><span className={`inline-flex rounded-full px-4 py-2 font-mono text-xs ${perspective.accent}`}>{perspective.number} · Reflection</span></div>
          <div>
            <h1 className="page-title">{perspective.title}</h1>
            <p className="page-intro">{perspective.introduction}</p>
          </div>
        </div>
      </header>

      <LandscapeDivider />

      <div className="page-shell py-16 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-20">
          {perspective.sections.map((section, index) => (
            <section key={section.heading} className="grid gap-6 sm:grid-cols-[3rem_1fr] sm:gap-8">
              <span className="font-mono text-xs text-stone-400">0{index + 1}</span>
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{section.heading}</h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-stone-600 dark:text-stone-300">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </section>
          ))}

          <section className={`rounded-[1.75rem] p-7 sm:p-10 ${perspective.accent}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] opacity-60">Principles I return to</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {perspective.principles.map((principle, index) => (
                <li key={principle} className="flex gap-3 text-base font-medium"><span className="font-mono text-xs opacity-50">0{index + 1}</span>{principle}</li>
              ))}
            </ul>
          </section>

          <blockquote className="font-display text-3xl leading-snug tracking-tight sm:text-5xl">“{perspective.closing}”</blockquote>
        </div>
      </div>

      <LandscapeDivider />
      <div className="page-shell py-16 sm:py-20">
        <Link to={`/perspectives/${next.slug}`} className="group flex items-end justify-between gap-8 rounded-[1.75rem] bg-ink p-7 text-white dark:bg-white dark:text-ink sm:p-10">
          <span><span className="text-xs uppercase tracking-[0.15em] opacity-60">Next reflection</span><span className="mt-3 block font-display text-3xl font-semibold sm:text-4xl">{next.title}</span></span>
          <ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};

export default Perspective;
