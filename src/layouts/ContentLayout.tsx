import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const socialButtonClass =
    'font-instrument inline-flex h-11 min-h-[44px] items-center gap-2 rounded-full border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 active:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:bg-gray-800 sm:h-9 sm:min-h-0 sm:gap-1.5 sm:px-0 sm:pl-2 sm:pr-2.5 sm:text-xs';

export interface ContentLayoutProps {
    backLink?: string;
    backText?: string;
    title: string;
    subtitle?: React.ReactNode;
    image?: {
        src: string;
        alt: string;
    };
    socialLinks?: Array<{
        href: string;
        label: string;
        iconSrc?: string;
    }>;
    // Right column of the top grid (bio, research intro, etc.)
    mainColumn?: React.ReactNode;
    //Full-width blocks under the bio statement: skills, research, 
    sections?: React.ReactNode[];
}

export const ContentLayout: React.FC<ContentLayoutProps> = ({
    backLink = '/',
    backText = 'Back to home',
    title,
    subtitle,
    image,
    socialLinks,
    mainColumn,
    sections,
}) => {
    return (
        <main className="min-h-screen text-gray-900 dark:text-gray-100">
            <div className="mx-auto max-w-6xl px-4 pb-20 pt-24 xs:px-5 sm:px-8 sm:pb-24 sm:pt-28 lg:px-10">
                <Link
                    to={backLink}
                    className="font-instrument group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                    <ArrowLeft
                        className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-0.5"
                        aria-hidden
                    />
                    {backText}
                </Link>

                <header className="mt-10 max-w-2xl sm:mt-14">
                    <h1 className="font-playfair mt-3 text-4xl font-normal tracking-tight xs:text-5xl sm:text-6xl lg:text-7xl">
                        {title}
                    </h1>
                    {subtitle != null && subtitle !== '' && (
                        <div className="font-instrument mt-5 text-lg font-normal leading-snug text-gray-600 dark:text-gray-400 sm:text-xl">
                            {subtitle}
                        </div>
                    )}
                </header>

                <div className="biography bg-parchment mt-12 grid gap-10 rounded-2xl  p-10 sm:mt-16 sm:gap-12 md:grid-cols-[minmax(0,220px)_1fr] md:items-start md:gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-20 xl:grid-cols-[minmax(0,320px)_1fr]">
                    <aside className="flex flex-col items-center gap-8 md:items-stretch md:gap-10 lg:sticky lg:top-28 lg:self-start">
                        {image && (
                            <figure className="w-full max-w-[min(100%,280px)] overflow-hidden rounded-2xl bg-gray-100 shadow-[0_1px_0_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06] dark:bg-gray-900 dark:ring-white/[0.08] md:max-w-none">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="aspect-[4/5] w-full object-cover"
                                />
                            </figure>
                        )}
                        {socialLinks && socialLinks.length > 0 && (
                            <nav
                                aria-label="Social links"
                                className="flex w-full max-w-[min(100%,280px)] flex-wrap justify-center gap-2 md:max-w-none md:justify-start md:gap-1.5"
                            >
                                {socialLinks.map(({ href, label, iconSrc }) => (
                                    <a
                                        key={href + label}
                                        href={href}
                                        target={href.startsWith('http') ? '_blank' : undefined}
                                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className={socialButtonClass}
                                    >
                                        {iconSrc ? (
                                            <img
                                                src={iconSrc}
                                                alt=""
                                                width={22}
                                                height={22}
                                                className="h-6 w-6 shrink-0 object-contain sm:h-5 sm:w-5 dark:invert dark:opacity-90 [&:not([src*='github'])]:dark:invert-0 [&:not([src*='github'])]:dark:opacity-100"
                                                aria-hidden
                                            />
                                        ) : null}
                                        {label}
                                    </a>
                                ))}
                            </nav>
                        )}
                    </aside>

                    <article className="min-w-0 w-full max-w-3xl font-instrument md:col-start-2">
                        {mainColumn}
                    </article>
                </div>

                {sections?.map((node, index) => (
                    <div key={index} className="mt-12 sm:mt-16">
                        {node}
                    </div>
                ))}
            </div>
        </main>
    );
};