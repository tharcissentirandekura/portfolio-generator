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
                        real-world problems, and am currently working in an AI research lab focusing on
                        designing algorithms for AI agents to act collectively as firefighters in
                        wildfires.
                    </p>
                    <p>
                        In this research, we study how AI agents can work together like a team of
                        firefighters during a wildfire. Each AI agent acts like a team member that can
                        observe what is happening around it, such as where the fire is spreading, and
                        make decisions on what to do next. Instead of acting alone, these agents
                        communicate and coordinate with each other to decide how to best contain the fire
                        and protect important areas as conditions change. We test these ideas in
                        simulated wildfire environments to see how well the agents can work together to
                        reduce damage.
                    </p>
                    <p>
                        Apart from academics, I am an entrepreneur and have co-founded a crowdfunding
                        platform (Dufashe), an Edtech platform (Epreuves), and a waste management
                        platform (Swapp).
                    </p>
                    <p>
                        In my past work experience, I have focused more on working towards making
                        software systems more maintainable and high-performing with better scaling. I
                        currently work as a student software engineer at Oberlin College, where I work on
                        upgrading their software archive systems for better UI and performance, and work
                        with the Oberlin Bonner Center to migrate from a legacy reporting system to a
                        new, modern system, making their day-to-day work more efficient.
                    </p>
                </div>
            }
            sections={[
                <div key="personal-statement" className="max-w-3xl">
                    <h2 className="font-playfair text-4xl">Personal Statement</h2>
                    <div className="font-instrument mt-5 space-y-5 text-lg font-normal leading-snug text-gray-600 dark:text-gray-400 sm:text-xl">
                        <p>
                            My academic and professional interests lie at the intersection of computer
                            science, economics, and mathematics. Such an interdisciplinary approach
                            provides me with a deeper understanding of complex systems: how they are
                            modeled, how they function, and how they affect people and communities.
                        </p>
                        <p>
                            Approaching problems from these three perspectives has shaped the way I think
                            about designing solutions. When working on a project, I often consider how a
                            mathematician might model the problem, how a computer scientist might
                            implement the solution, and how economic principles influence how people
                            interact with the system. This interdisciplinary mindset allows me to go
                            beyond purely technical solutions and focus on building systems that are both
                            effective and meaningful in real-world contexts.
                        </p>
                        <p>
                            Because knowledge and power are intertwined, we should use knowledge to create
                            tools to serve our communities - that is my philosophy; I believe that
                            technology exists to improve everyday experiences, no matter what. The most
                            impactful systems are those that address real problems and make processes more
                            accessible and efficient for those who rely on them.
                        </p>
                        <p>
                            With my philosophy, I was able to build Dufashe (a crowdfunding platform)
                            that helps small local non-profit organizations in Burundi raise funds. I
                            have cofounded Epreuves, which helps high school students prepare well for
                            the national exam in Burundi by providing them with early and necessary
                            resources to succeed for free, and I am now working on Swapp, which is a
                            platform designed to help sustainability initiatives reduce recycling
                            contamination, especially school campuses in the US.
                        </p>
                        <p>
                            Apart from the founder experience work, I have spent quite some time
                            volunteering with non-profit organizations, including the Bonner Scholars
                            program and Cleveland GiveCamp, where I help find solutions to some of their
                            technology-related issues. I have engaged in migrating their old systems to
                            new, well-maintained ones, and now working with the Bonner Scholars Program
                            as an intern to keep the website and the reporting system updated and
                            running. I am also working as a student software engineer at Oberlin College,
                            focusing on upgrading the recording archive software for better performance,
                            high scalability, and better maintainability. I am always open to new
                            opportunities and collaboration. If you are working on something cool, please
                            reach out.
                        </p>
                    </div>
                </div>,
                <div key="skills-block">
                    <header className="max-w-2xl">
                        <h2 className="font-playfair text-4xl">Skills</h2>
                        <p className="ont-instrument mt-5 text-lg font-normal leading-snug text-gray-600 dark:text-gray-400 sm:text-xl">
                            Core skills I bring to engineering and research projects
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