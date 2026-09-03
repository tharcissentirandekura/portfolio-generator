export type WorkProjectImage = { src: string; alt: string; caption: string };

export type WorkProject = {
  slug: string;
  title: string;
  company: string;
  period: string;
  shortDescription: string;
  fullDescription: string;
  achievements: string[];
  responsibilities: string;
  technologies: string[];
  link: string;
  images: WorkProjectImage[];
  featured_image: string;
  platform: string;
  roleLabel: string;
  status?: string;
  challenge: string;
  contribution: string;
  impact: string;
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: 'conaudio-student-developer',
    title: 'Conservatory Audio Archive',
    company: 'Oberlin College',
    period: '2024—Present',
    shortDescription: 'Modernizing a campus media archive for stronger performance, security, and day-to-day reliability.',
    fullDescription: 'The Conservatory Audio Archive is a piece of long-running campus infrastructure used to preserve and access recordings. My work focuses on making the application easier to maintain and more dependable for the students, faculty, and staff who rely on it.',
    achievements: [
      'Improved concurrent user capacity through targeted performance work.',
      'Built automation that reduced avoidable storage use.',
      'Implemented Okta single sign-on for a simpler, more secure login flow.',
    ],
    responsibilities: 'Performance optimization; authentication; automation; frontend and backend maintenance',
    technologies: ['React', 'Node.js', 'TypeScript', 'Okta', 'MongoDB'],
    link: 'https://conaudioarchive.oberlin.edu/',
    images: [{ src: '/images/conaudio.png', alt: 'Conservatory Audio Archive interface', caption: 'The archive interface used by the Oberlin community.' }],
    featured_image: '/images/conaudio.png',
    platform: 'Campus software',
    roleLabel: 'Student Software Developer',
    status: 'In progress',
    challenge: 'A long-running archive needed to support more users while becoming easier to secure and maintain.',
    contribution: 'I worked across authentication, performance, storage automation, and application maintenance rather than treating each issue in isolation.',
    impact: 'A more dependable archive experience for the students, faculty, and staff who rely on it.',
  },
  {
    slug: 'epreuves-founder',
    title: 'Epreuves',
    company: 'Independent project',
    period: 'Ongoing',
    shortDescription: 'A mobile-first education platform that makes national exam materials easier to access for students in Burundi.',
    fullDescription: 'Epreuves began with a simple access problem: students preparing for national exams do not all have the same materials. I built a lightweight platform designed to work well on mobile devices and help students find preparation resources without unnecessary friction.',
    achievements: [
      'Designed the experience around mobile access and slower connections.',
      'Made exam preparation materials easier for students to find and use.',
      'Led product decisions and full-stack implementation.',
    ],
    responsibilities: 'Product design; full-stack development; infrastructure; content architecture',
    technologies: ['Django', 'Angular', 'PostgreSQL', 'Docker', 'REST API'],
    link: 'https://epreuves.netlify.app',
    images: [{ src: '/images/epreuves.png', alt: 'Epreuves education platform', caption: 'A simple route to exam preparation resources.' }],
    featured_image: '/images/epreuves.png',
    platform: 'Education technology',
    roleLabel: 'Founder & Developer',
    status: 'In progress',
    challenge: 'Exam preparation resources are unevenly distributed, especially for students outside major cities or using limited mobile connections.',
    contribution: 'I shaped the product, information architecture, and full-stack implementation around quick access on everyday devices.',
    impact: 'Free preparation materials made easier to access across different devices and connection speeds.',
  },
  {
    slug: 'dufafshe',
    title: 'Dufashe',
    company: 'Venture project',
    period: '2025—Present',
    shortDescription: 'Crowdfunding infrastructure that helps Burundian organizations reach supporters and accept local payment methods.',
    fullDescription: 'Dufashe explores what crowdfunding should look like in a market where familiar global payment tools are not always available. I worked on the backend architecture and payment integrations needed to make campaigns more accessible to organizations and supporters in Burundi.',
    achievements: [
      'Designed backend services around reliable campaign and contribution flows.',
      'Integrated regional mobile-money payment options.',
      'Helped translate a local access problem into a focused product.',
    ],
    responsibilities: 'Backend architecture; payment integrations; technical strategy; product development',
    technologies: ['JavaScript', 'Express', 'MongoDB', 'Payment APIs'],
    link: 'https://dufashe.com',
    images: [{ src: '/images/dufashe.png', alt: 'Dufashe crowdfunding platform', caption: 'Campaign discovery and fundraising for local organizations.' }],
    featured_image: '/images/dufashe.png',
    platform: 'Financial technology',
    roleLabel: 'Co-founder & Developer',
    status: 'In progress',
    challenge: 'Global crowdfunding patterns do not map neatly to Burundi, where local organizations and supporters use different payment rails.',
    contribution: 'I designed backend services and integrated regional mobile-money options while helping define the product’s technical direction.',
    impact: 'A fundraising flow designed around the payment habits of the communities it serves.',
  },
];

export const getWorkProjectBySlug = (slug?: string) => WORK_PROJECTS.find((project) => project.slug === slug);
export const defaultProjectStatus = (project: WorkProject) => project.status ?? 'Completed';
