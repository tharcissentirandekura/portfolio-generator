import { useEffect, useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { defaultProjectStatus, getWorkProjectBySlug } from '../data/workProjects';

const COL = 'mx-auto w-full max-w-[50rem] px-5 sm:px-6';

const textLink =
  'text-neutral-900 underline decoration-neutral-400 underline-offset-[0.2em] transition-[text-decoration-color] hover:decoration-neutral-900';

function splitOverviewBody(text: string): string[] {
  const parts = text.match(/[^.!?]+[.!?]+/g);
  if (parts && parts.length >= 2) {
    const chunk: string[] = [];
    let buf = '';
    for (const p of parts) {
      buf += p.trim() + ' ';
      if (buf.length > 220) {
        chunk.push(buf.trim());
        buf = '';
      }
    }
    if (buf.trim()) chunk.push(buf.trim());
    return chunk.slice(0, 6);
  }
  return [text];
}

const WorkCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getWorkProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const overviewParagraphs = useMemo(
    () => (project ? splitOverviewBody(project.fullDescription) : []),
    [project],
  );

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const rolePrimary = project.roleLabel ?? project.title;
  const platform = project.platform ?? 'Web';
  const timeline = project.period ?? '—';
  const status = defaultProjectStatus(project);
  const deliverables = project.deliverables ?? project.technologies;
  const galleryExtras = project.images.filter((img) => img.src !== project.featured_image);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 antialiased selection:bg-neutral-200">
      <header className={`${COL} pt-16 text-center sm:pt-20 md:pt-28`}>
        <h1 className="text-[2.125rem] font-semibold leading-[1.1] tracking-[-0.02em] text-neutral-950 sm:text-5xl md:text-6xl md:leading-[1.06]">
          {project.title}
        </h1>
        <p className="mt-8 text-lg leading-snug text-neutral-600 sm:text-xl">
          By {rolePrimary}
          <span className="text-neutral-400"> · </span>
          {project.company}
        </p>
        <p className="mt-3 text-base text-neutral-500 sm:text-lg">{timeline}</p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link to="/#experience" className={`text-base sm:text-lg ${textLink}`}>
            ← Back to work
          </Link>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-neutral-800 sm:px-7 sm:py-3.5 sm:text-lg"
          >
            Open project
            <ArrowUpRight className="h-5 w-5 shrink-0 sm:h-5 sm:w-5" strokeWidth={2} aria-hidden />
          </a>
        </div>
      </header>

      <div className={`${COL} mt-14 sm:mt-16 md:mt-20`}>
        <img
          src={project.featured_image}
          alt=""
          className="w-full rounded-xl object-cover shadow-sm ring-1 ring-black/5 sm:rounded-2xl sm:max-h-[min(72vh,560px)]"
        />
      </div>

      <article className={`${COL} pb-32 pt-16 text-left sm:pt-20 md:pt-24`}>
        <p className="text-xl leading-[1.65] text-neutral-800 sm:text-2xl sm:leading-[1.6]">
          {project.shortDescription}
        </p>

        <div className="mt-16 space-y-10 text-lg leading-[1.65] text-neutral-700 sm:text-xl sm:leading-[1.65]">
          <p>
            <span className="text-neutral-500">Context — </span>
            {platform}
            <span className="text-neutral-400"> · </span>
            {status}
          </p>
          <p>
            <span className="text-neutral-500">Stack — </span>
            {deliverables.join(' · ')}
          </p>
        </div>

        <div className="mt-20 space-y-10 text-xl leading-[1.65] text-neutral-800 sm:text-2xl sm:leading-[1.65]">
          {overviewParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {project.achievements.length > 0 ? (
          <section className="mt-24 md:mt-32">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-[2.75rem]">
              Highlights
            </h2>
            <ul className="mt-10 list-none space-y-10 text-xl leading-[1.65] text-neutral-800 sm:text-2xl sm:leading-[1.65]">
              {project.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.responsibilities.trim() ? (
          <section className="mt-24 md:mt-32">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-[2.75rem]">
              Responsibilities
            </h2>
            <div className="mt-10 space-y-10 text-xl leading-[1.65] text-neutral-800 sm:text-2xl sm:leading-[1.65]">
              {project.responsibilities.split(/;\s*/).map((sentence, i) => {
                const s = sentence.trim().replace(/\.\s*$/, '');
                if (!s) return null;
                return <p key={i}>{s}.</p>;
              })}
            </div>
          </section>
        ) : null}

        {galleryExtras.length > 0 ? (
          <section className="mt-24 md:mt-32">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-[2.75rem]">
              More
            </h2>
            <div className="mt-10 space-y-16">
              {galleryExtras.map((img) => (
                <figure key={img.src} className="space-y-5">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full rounded-xl object-cover shadow-sm ring-1 ring-black/5 sm:rounded-2xl"
                  />
                  {img.caption ? (
                    <figcaption className="text-lg leading-relaxed text-neutral-500 sm:text-xl">
                      {img.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <footer className="mt-24 md:mt-32">
          <Link to="/#experience" className={`text-lg sm:text-xl ${textLink}`}>
            ← All work
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default WorkCaseStudy;
