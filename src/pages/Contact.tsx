import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const Contact = () => {
    return (
        <main className="min-h-screen text-gray-900 dark:text-gray-100">
            <div className="mx-auto max-w-3xl px-4 pb-20 pt-24 xs:px-5 sm:px-8 sm:pb-24 sm:pt-28 lg:px-10">
                <Link
                    to="/"
                    className="font-instrument group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                    <ArrowLeft
                        className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-0.5"
                        aria-hidden
                    />
                    Back to home
                </Link>

                <section className="mt-12 max-w-2xl sm:mt-14">
                    <h1 className="font-playfair text-4xl tracking-tight xs:text-5xl sm:text-6xl">
                        Contact
                    </h1>
                    <p className="font-instrument mt-5 text-lg leading-snug text-gray-600 dark:text-gray-400 sm:text-xl">
                        I am always open to collaborations, research opportunities, and impactful
                        projects.
                    </p>
                </section>

                <section className="font-instrument mt-10 space-y-4 text-base text-gray-700 dark:text-gray-300 sm:text-lg">
                    <p>
                        Email:{' '}
                        <a
                            href="mailto:tharcissentira@gmail.com"
                            className="underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-900 dark:decoration-gray-600 dark:hover:text-white"
                        >
                            tharcissentira@gmail.com
                        </a>
                    </p>
                    <p>
                        LinkedIn:{' '}
                        <a
                            href="https://www.linkedin.com/in/tharcisse-ntirandekura"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-900 dark:decoration-gray-600 dark:hover:text-white"
                        >
                            tharcisse-ntirandekura
                        </a>
                    </p>
                    <p>
                        GitHub:{' '}
                        <a
                            href="https://github.com/tharcissentirandekura"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-900 dark:decoration-gray-600 dark:hover:text-white"
                        >
                            @tharcissentirandekura
                        </a>
                    </p>
                </section>
            </div>
        </main>
    );
};
