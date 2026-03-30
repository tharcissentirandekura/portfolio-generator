import { ContentLayout } from '../layouts/ContentLayout';

const skills: string[] = [
    'Python',
    'Java',
    'TypeScript',
    'Rust',
    'Bash',
    'SQL (Postgres)',
    'NoSQL (MongoDB)',
    'HTML/CSS',
    'Django',
    'React',
    'Angular',
    'Tailwind CSS',
    'Git',
    'Docker',
    'AWS',
    'Google Cloud',
    'Matplotlib',
    'Chart.js',
    'REST APIs',
];


export const About = () => {
    return (
        <ContentLayout
            title="About"
            subtitle="Tharcisse Ntirandekura — computer science, economics, and mathematics."
            image={{ src: '/images/profile.png', alt: 'Portrait of Tharcisse Ntirandekura' }}
            socialLinks={[
                { href: 'https://www.linkedin.com/in/tharcisse-ntirandekura', label: 'LinkedIn', iconSrc: 'https://img.icons8.com/fluency/48/linkedin.png' },
                { href: 'mailto:tharcissentira@gmail.com', label: 'Email', iconSrc: 'https://img.icons8.com/fluency/48/gmail-new.png' },
                { href: 'https://github.com/tharcissentirandekura', label: 'GitHub', iconSrc: 'https://img.icons8.com/sf-black-filled/64/github.png' },
            ]}
            mainColumn={
                <div className="space-y-5 leading-[1.75] text-gray-600 dark:text-gray-400 sm:space-y-6 sm:text-[17px] md:text-lg md:leading-[1.8]">
                    <p>
                        I am a third-year computer science and economics student with a minor in
                        mathematics at Oberlin College. I am interested in how AI can be applied to
                        solve problems we live with, and am currently working in an AI research lab
                        focusing on designing algorithms for AI agents to act collectively as
                        firefighters in wildfires. Apart from academics, I am an entrepreneur and have
                        co-founded a crowdfunding platform (Dufashe), an Edtech platform (Epreuves),
                        and a waste management platform (Swapp), which I am working on now.
                    </p>
                    <p>
                        In my past work experience, I have focused more on working towards making
                        software systems more maintainable and high-performing with better scaling. I
                        currently work as a student software engineer at Oberlin College, where I work
                        on upgrading their software archive systems for better UI and performance, and
                        work with the Oberlin Bonner Center to migrate from a legacy reporting system to
                        a new, modern system, making their day-to-day work very smooth.
                    </p>
                </div>
            }
            sections={[
                <div key="skills-block">
                    <header className="max-w-2xl">
                        <h2 className="font-playfair text-4xl">Skills</h2>
                        <p className="ont-instrument mt-5 text-lg font-normal leading-snug text-gray-600 dark:text-gray-400 sm:text-xl">
                            Difference skills I possess to have me do the job
                        </p>
                    </header>
                    <div className="mt-6 flex flex-wrap gap-3 rounded-2xl bg-parchment px-4 py-12">
                        {skills.map((s) => (
                            <div key={s} className="min-w-[100px] rounded-full bg-black px-4 py-2 text-center text-white">
                                <p className="m-0">{s}</p>
                            </div>
                        ))}
                    </div>
                    <div className='mt-5'>
                        <header className="">
                            <h2 className="font-playfair text-4xl">Academics</h2>
                            <p className="font-instrument mt-5 text-lg font-normal leading-snug text-gray-600 dark:text-gray-400 sm:text-xl">
                                I am double majoring in Computer Science and Economics, with an interest in either a Mathematics minor or a concentration in Data Science. My coursework has provided me with a strong foundation in computer science, including Software Engineering, Algorithm Design and Analysis, Natural Language Processing, Systems Programming, Programming Abstractions, and Human-Computer Interaction.
                            </p>

                            <p className="font-instrument mt-5 text-lg font-normal leading-snug text-gray-600 dark:text-gray-400 sm:text-xl">
                                While I have always been drawn to computer science, I am equally interested in exploring its intersection with economics. This perspective allows me to better understand how products are built, as well as the key technical and economic considerations involved in creating solutions that effectively meet users’ needs.
                            </p>
                        </header>
                    </div>

                </div>,
            ]}
        />
    );
}