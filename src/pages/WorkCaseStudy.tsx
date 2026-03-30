import { useEffect, useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import {
  defaultProjectStatus,
  getWorkProjectBySlug,
  type WorkProject,
} from '../data/workProjects';

function SectionTitle({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-playfair mb-10 flex flex-wrap items-start gap-3 text-left text-3xl font-normal tracking-tight text-stone-900 sm:text-4xl md:text-[2.65rem] ${className}`}
    >
      <Sparkles className="mt-1.5 h-7 w-7 shrink-0 text-amber-700/85" strokeWidth={1.2} aria-hidden />
      <span>{children}</span>
    </h2>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-12 mb-6 flex items-center justify-start gap-2 text-left font-sans text-lg font-semibold text-stone-900">
      <span className="h-2 w-2 shrink-0 rounded-full bg-amber-600/90" aria-hidden />
      {children}
    </h3>
  );
}

function MetaRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-stone-200/80 py-6 text-left">
      <span className="block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-amber-900/80">
        {label}
      </span>
      <div className="mt-3 font-sans text-stone-800">{children}</div>
    </div>
  );
}

function formatChallengeLine(text: string) {
  const idx = text.indexOf(':');
  if (idx > 0 && idx < 72) {
    return (
      <>
        <strong className="font-semibold text-stone-900">{text.slice(0, idx).trim()}:</strong>{' '}
        {text.slice(idx + 1).trim()}
      </>
    );
  }
  return text;
}

function buildChallengePoints(project: WorkProject): string[] {
  const fromAch = [...project.achievements];
  const fromResp = project.responsibilities
    .split(/;\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
  const merged = [...fromAch, ...fromResp];
  const out: string[] = [];
  for (const line of merged) {
    if (out.length >= 6) break;
    if (!out.includes(line)) out.push(line);
  }
  let guard = 0;
  while (out.length < 6 && guard < 12) {
    guard += 1;
    if (project.technologies.length === 0) {
      out.push('Requirements: Clarified constraints and success criteria with stakeholders before implementation.');
      continue;
    }
    const t = project.technologies[(out.length - 1) % project.technologies.length];
    out.push(`Tooling: Used ${t} where it reduced risk and simplified long-term maintenance.`);
  }
  return out.slice(0, 6);
}

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
    return chunk.slice(0, 4);
  }
  return [text];
}

const WorkCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getWorkProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const challengePoints = useMemo(
    () => (project ? buildChallengePoints(project) : []),
    [project],
  );

  const overviewParagraphs = useMemo(
    () => (project ? splitOverviewBody(project.fullDescription) : []),
    [project],
  );

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const displayTitle = `${project.title} — ${project.company}`;
  const rolePrimary = project.roleLabel ?? `${project.title}`;
  const roleSecondary = project.company;
  const platform = project.platform ?? 'Web';
  const timeline = project.period ?? '—';
  const status = defaultProjectStatus(project);
  const deliverables = project.deliverables ?? project.technologies;

  return (
    <div className="min-h-screen bg-[#faf8f3] font-sans text-stone-800 antialiased selection:bg-amber-100/80">
      <div className="mx-auto max-w-3xl px-5 py-12 text-left sm:px-8 sm:py-16 lg:py-20">
          <header className="mb-20 sm:mb-24">
            <h1 className="font-playfair text-4xl font-normal tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
              {displayTitle}
            </h1>
            <p className="mt-4 font-sans text-sm font-medium text-stone-500">{timeline}</p>
            <div className="mt-10 max-w-3xl overflow-hidden rounded-[2rem] bg-sky-100/70 p-6 sm:p-10 lg:rounded-[2.25rem]">
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-900/5">
                <img
                  src={project.featured_image}
                  alt=""
                  className="max-h-[min(480px,55vh)] w-full object-contain"
                />
              </div>
            </div>
            <p className="mt-8 max-w-2xl font-sans text-base font-light leading-relaxed text-stone-500">
              {project.shortDescription}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
              <Link
                to="/#experience"
                className="font-sans text-sm text-stone-600 underline decoration-stone-300 underline-offset-[5px] transition-colors hover:text-stone-900"
              >
                ← Back to work
              </Link>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-2.5 font-sans text-sm font-semibold text-[#faf8f3] shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Open project
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </header>

          <section id="overview" className="scroll-mt-28">
            <SectionTitle>Overview</SectionTitle>
            <div className="mb-10 max-w-3xl">
              <MetaRow label="Role">
                <p className="text-base font-bold text-stone-900">{rolePrimary}</p>
                <p className="mt-1 text-base font-bold text-stone-900">{roleSecondary}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">
                  {project.technologies.slice(0, 8).join(' · ')}
                </p>
              </MetaRow>
              <MetaRow label="Platform">
                <p className="text-base font-bold text-stone-900">{platform}</p>
              </MetaRow>
              <MetaRow label="Timeline">
                <p className="text-base font-bold text-stone-900">{timeline}</p>
              </MetaRow>
              <MetaRow label="Status">
                <p className="text-base font-bold text-stone-900">{status}</p>
              </MetaRow>
              <MetaRow label="Deliverables">
                <p className="text-base font-bold text-stone-900">Engineering and systems</p>
                <ul className="mt-2 list-inside list-disc text-sm text-stone-500">
                  {deliverables.map((d) => (
                    <li key={d} className="marker:text-amber-800/50">
                      {d}
                    </li>
                  ))}
                </ul>
              </MetaRow>
            </div>
            <div className="max-w-2xl space-y-5 font-sans text-base leading-[1.9] text-stone-600">
              <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-amber-900/80">
                Summary
              </p>
              {overviewParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          <section id="highlights" className="scroll-mt-28 pt-24">
            <SectionTitle>Outcomes and impact</SectionTitle>
            <ul className="max-w-2xl space-y-5 font-sans text-stone-600">
              {project.achievements.map((a, i) => (
                <li key={i} className="border-t border-amber-700/25 pt-5 leading-relaxed first:border-t-0 first:pt-0">
                  <span className="text-stone-900">{a}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="challenge" className="scroll-mt-28 pt-24">
            <SectionTitle>Problem and constraints</SectionTitle>
            <Subheading>Problem framing</Subheading>
            <div className="grid max-w-4xl gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="min-h-[220px] rounded-2xl border border-dashed border-stone-300/90 bg-white/50 p-8 text-left font-sans text-sm leading-relaxed text-stone-500">
                Framing the work around users, data, and production constraints—what “correct” and
                “operable” meant before choosing implementations.
              </div>
              <div className="space-y-5 font-sans text-base leading-relaxed text-stone-600">
                <p>
                  <strong className="text-stone-900">Scope.</strong> {project.shortDescription}
                </p>
                <p>
                  <strong className="text-stone-900">Tradeoffs.</strong> Balancing{' '}
                  <strong>correctness</strong>, <strong>observability</strong>, and{' '}
                  <strong>maintainability</strong> with shipping velocity so the system could evolve
                  without silent debt.
                </p>
              </div>
            </div>
            <Subheading>Pinpointing focus areas</Subheading>
            <div className="grid max-w-4xl gap-x-10 gap-y-10 sm:grid-cols-2">
              {challengePoints.map((text, i) => (
                <div key={i} className="flex gap-4 text-left">
                  <span
                    className="font-playfair text-5xl italic leading-none text-sky-600 sm:text-6xl"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <p className="pt-2 font-sans text-sm leading-relaxed text-stone-600">
                    {formatChallengeLine(text)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="solution" className="scroll-mt-28 pt-24">
            <SectionTitle>Implementation</SectionTitle>
            <div className="max-w-2xl space-y-5 font-sans text-base leading-[1.9] text-stone-600">
              {project.responsibilities.split(/;\s*/).map((sentence, i) => {
                const s = sentence.trim().replace(/\.\s*$/, '');
                if (!s) return null;
                return <p key={i}>{s}.</p>;
              })}
            </div>
          </section>

          <section id="research" className="scroll-mt-28 pt-24">
            <SectionTitle>Technical approach</SectionTitle>
            <p className="max-w-2xl font-sans text-base leading-relaxed text-stone-600">
              Grounded in requirements and existing systems: checked assumptions with stakeholders and
              data where possible, documented interfaces and failure modes, and favored incremental
              changes that reduced risk. {project.shortDescription}
            </p>
          </section>

          <section id="process" className="scroll-mt-28 pt-24">
            <SectionTitle>Stack & tooling</SectionTitle>
            <ol className="max-w-2xl list-decimal space-y-4 pl-5 font-sans text-stone-600">
              {project.technologies.map((t, i) => (
                <li key={i} className="pl-1 leading-relaxed">
                  <strong className="text-stone-900">{t}</strong> — applied where it improved
                  reliability, testability, or time-to-ship.
                </li>
              ))}
            </ol>
          </section>

          <section id="features" className="scroll-mt-28 pt-24">
            <SectionTitle>Notable contributions</SectionTitle>
            <ul className="grid max-w-4xl gap-5 sm:grid-cols-2">
              {project.achievements.map((a, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-stone-200/90 bg-white/60 p-5 font-sans text-sm leading-relaxed text-stone-600 shadow-sm"
                >
                  {a}
                </li>
              ))}
            </ul>
          </section>

          <section id="visuals" className="scroll-mt-28 pt-24">
            <SectionTitle>Gallery</SectionTitle>
            <div className="grid max-w-4xl gap-6 sm:grid-cols-2">
              {project.images.map((img) => (
                <figure
                  key={img.src}
                  className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-stone-900/5"
                >
                  <img src={img.src} alt={img.alt} className="aspect-video w-full object-cover" />
                  {img.caption ? (
                    <figcaption className="p-3 font-sans text-xs text-stone-500">{img.caption}</figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </section>

          <section id="final" className="scroll-mt-28 pt-24">
            <SectionTitle>Featured view</SectionTitle>
            <div className="max-w-3xl overflow-hidden rounded-2xl bg-white p-4 shadow-md ring-1 ring-stone-900/5">
              <img
                src={project.featured_image}
                alt=""
                className="w-full rounded-xl object-contain"
              />
            </div>
          </section>

          <section id="handoff" className="scroll-mt-28 pt-24">
            <SectionTitle>Delivery and handoff</SectionTitle>
            <p className="max-w-2xl font-sans text-base leading-relaxed text-stone-600">
              Structured for maintainability: clear module boundaries, documentation where it lowers
              bus factor, and alignment with deployment and monitoring. Live reference:{' '}
              <a
                href={project.link}
                className="font-semibold text-amber-900/90 underline decoration-amber-900/30 underline-offset-[5px] transition-colors hover:text-amber-950"
              >
                open project
              </a>
              .
            </p>
          </section>

          <section id="reflections" className="scroll-mt-28 pb-28 pt-24 lg:pb-24">
            <SectionTitle>Reflections</SectionTitle>
            <p className="max-w-2xl font-sans text-base leading-relaxed text-stone-600">
              {project.shortDescription} Small, testable steps beat big rewrites; explicit interfaces
              and logging pay off when production misbehaves; notes for your future self are part of
              the system.
            </p>
          </section>
      </div>
    </div>
  );
};

export default WorkCaseStudy;
