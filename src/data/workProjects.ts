export type WorkProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type WorkProject = {
  slug: string;
  title: string;
  company: string;
  period?: string;
  shortDescription: string;
  fullDescription: string;
  achievements: string[];
  responsibilities: string;
  technologies: string[];
  bgColor: string;
  accentColor: string;
  link: string;
  images: WorkProjectImage[];
  featured_image: string;
  expcolor?: string;
  /** Case study meta (optional overrides) */
  platform?: string;
  roleLabel?: string;
  status?: string;
  deliverables?: string[];
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: 'bonner-online-management',
    title: 'Online Management Intern',
    expcolor: 'text-green-500',
    company: 'Oberlin College Bonner Center',
    period: '2024 – Present',
    shortDescription:
      'Assisted in managing online platforms and digital communications for community engagement.',
    fullDescription:
      'As an Online Management Intern at the Oberlin College Bonner Center, I supported the management of online platforms and digital communications to enhance community engagement. I assisted in updating the Bonner website, managed social media accounts, and contributed to digital marketing strategies. This role allowed me to develop my skills in web management, content creation, and online community building.',
    achievements: [
      'Successfully updated and maintained the Bonner Center website, improving user experience and accessibility',
      'Increased social media engagement by 15% through targeted content creation and scheduling',
      'Collaborated with the marketing team to develop digital campaigns that promoted Bonner Center events and initiatives',
    ],
    responsibilities:
      'My responsibilities included updating website content, managing social media accounts, creating digital marketing materials, and assisting with online event promotion.',
    technologies: ['WordPress', 'Canva', 'Hootsuite', 'Google Analytics'],
    bgColor: 'bg-green-50',
    accentColor: 'text-green-600',
    link: 'https://www.oberlin.edu/bonner-center',
    platform: 'Web & social',
    images: [
      {
        src: '/images/bonner-online1.png',
        alt: 'Bonner Center website update',
        caption: 'Updating the Bonner Center website for better user experience',
      },
    ],
    featured_image: '/images/bonner-online1.png',
  },
  {
    slug: 'bonner-summer-intern',
    title: 'Bonner Center Summer Intern',
    expcolor: 'text-yellow-500',
    company: 'Oberlin College',
    period: 'June 2025 - August 2025',
    shortDescription:
      'Developed system workflows while expanding technical, event, and project management skills.',
    fullDescription:
      'As a Bonner Center summer intern at Oberlin College, I balanced technical development with community engagement. I managed BWBRS data systems, organized events, onboarded new scholars, and supported communications. My experience strengthened my leadership, team collaboration, and process improvement skills, and sparked a deeper interest in using technology for social good.',
    achievements: [
      "My proudest achievement this summer was co-leading the planning and execution of the Bonner Fall Retreat, managing everything from logistics to communication and ensuring a smooth experience for over thirty scholars on a tight schedule. This responsibility, combined with being nominated to join the Bonner Leadership Team, reflected the trust my peers and supervisors placed in me. I also led the successful onboarding of new Bonner scholars, updated the BWBRS system for better tracking, and introduced more effective communication strategies that improved our team's collaboration and impact.",
    ],
    responsibilities:
      'Managed BWBRS data platform updates; facilitated event planning and execution; streamlined onboarding for new Bonner scholars; maintained internal documentation; led reflection sessions; and improved team communication strategies.',
    technologies: [
      'BWBRS',
      'Google Workspace',
      'Notion',
      'Event Management',
      'Technical Documentation',
      'Excel',
    ],
    bgColor: 'bg-yellow-50',
    accentColor: 'text-yellow-600',
    link: 'https://oberlin.digication.com/tharcisse-summer-intern/ced-summer-experience-reflection',
    platform: 'Web, data systems & events',
    images: [
      {
        src: '/images/bonner-intern1.png',
        alt: 'Bonner Center internship work',
        caption: 'Working on BWBRS system updates and data management',
      },
      {
        src: '/images/bonner-intern2.jpeg',
        alt: 'Bonner scholars onboarding session',
        caption: 'Leading new Bonner scholars onboarding process',
      },
      {
        src: '/images/bonner-intern3.jpeg',
        alt: 'Bonner Fall Retreat planning',
        caption: 'Co-leading the planning for Bonner Fall Retreat',
      },
    ],
    featured_image: '/images/bonner-intern1.png',
  },
  {
    slug: 'dufafshe',
    title: 'Co-founder & CGO',
    expcolor: 'text-blue-500',
    company: 'Dufafshe',
    period: 'Jan 2025 - Present',
    shortDescription:
      'Architected scalable backend systems and integrated local payment gateways for enhanced platform accessibility',
    fullDescription:
      'As Co-founder and CGO at Dufafshe, I strategically designed and implemented scalable backend systems to improve platform performance and user accessibility. I integrated local mobile money gateways like Lumicash and EcoCash, enabling seamless cross-border payments and campaign launches.',
    achievements: ['Still working hard to achieve more and I believe I can do it...'],
    responsibilities:
      'My responsibilities included designing and implementing scalable backend systems to ensure robust platform performance, integrating local mobile money gateways like Lumicash and EcoCash to enable seamless cross-border payments, optimizing the platform for enhanced user accessibility, and guiding the technical direction to support strategic growth initiatives.',
    technologies: ['JavaScript', 'Express.js', 'MongoDB', 'Payment APIs'],
    bgColor: 'bg-blue-50',
    accentColor: 'text-blue-600',
    link: 'https://dufashe.com',
    platform: 'Web',
    images: [
      {
        src: '/images/dufashe.png',
        alt: 'Dufafshe crowdfunding platform',
        caption: 'The Dufafshe platform enabling cross-border crowdfunding',
      },
    ],
    featured_image: '/images/dufashe.png',
  },
  {
    slug: 'conaudio-student-developer',
    title: 'Student Software Developer',
    expcolor: 'text-red-500',
    company: 'Oberlin College',
    period: 'Aug 2024 - Present',
    shortDescription:
      'Optimized system performance and implemented secure authentication for campus applications',
    fullDescription:
      'As a Student Software Developer at Oberlin College, I focused on optimizing system performance and enhancing security for campus applications. I implemented Okta Single Sign-On (SSO) and developed automation scripts to streamline operations, significantly improving efficiency and user experience.',
    achievements: [
      'Boosted concurrent user capacity by 45% through performance optimizations',
      'Reduced storage costs by 20% with automation scripts for cache management',
      'Implemented Okta SSO, streamlining logins for 500+ users',
      'Decreased password-related support tickets by 40% through enhanced security',
    ],
    responsibilities:
      'My role involved optimizing system performance for campus applications to ensure efficient operation, implementing Okta Single Sign-On for secure and streamlined user access, developing automation scripts to enhance storage efficiency and operational workflows, and collaborating with the IT team to improve overall system functionality.',
    technologies: ['React', 'Node.js', 'Okta', 'JavaScript', 'Automation Scripts', 'Git'],
    bgColor: 'bg-red-50',
    accentColor: 'text-red-600',
    link: 'https://conaudioarchive.oberlin.edu/',
    platform: 'Web',
    images: [
      {
        src: '/images/conaudio.png',
        alt: 'Conservatory Audio Archive system',
        caption: 'The Conservatory Audio Archive platform I helped develop and optimize',
      },
    ],
    featured_image: '/images/conaudio.png',
  },
  {
    slug: 'tujenge-intern',
    title: 'IT & Web Developer Intern',
    company: 'Tujenge Africa Foundation',
    period: 'Jun 2024 - Aug 2024',
    shortDescription:
      'Redesigned website sections and strengthened IT systems for educational initiatives',
    fullDescription:
      'As an IT & Web Developer Intern at Tujenge Africa Foundation, I redesigned core website sections to improve user engagement and provided technical support to over 50 students and staff. I also implemented RADIUS authentication to enhance system security.',
    achievements: [
      'Redesigned website sections, improving user engagement and satisfaction',
      'Reduced ticket resolution time by 25% through efficient IT support',
      'Enhanced system uptime by addressing technical issues for 50+ users',
      'Implemented RADIUS authentication for improved network security',
    ],
    responsibilities:
      'I was tasked with redesigning and maintaining website sections to enhance user engagement, providing technical support to over 50 students and staff, implementing RADIUS authentication to secure network access, and coordinating with the IT team to resolve technical issues efficiently.',
    technologies: ['Web Development', 'RADIUS', 'HTML', 'CSS', 'JavaScript'],
    bgColor: 'bg-green-50',
    accentColor: 'text-green-600',
    link: 'https://www.tujenge.org/',
    platform: 'Web & infrastructure',
    images: [
      {
        src: '/images/tujenge-intern.jpg',
        alt: 'Tujenge Africa Foundation internship',
        caption: 'Working on website redesign and IT system improvements at Tujenge Africa Foundation',
      },
    ],
    featured_image: '/images/tujenge-intern.jpg',
  },
  {
    slug: 'epreuves-founder',
    title: 'Founder',
    expcolor: 'text-purple-500',
    company: 'Epreuve.com',
    period: 'Ongoing',
    shortDescription:
      'Developed a national education platform to provide exam resources for underrepresented students',
    fullDescription:
      'As the Founder of Epreuve.com, I led the development of a national education platform to democratize access to exam resources for underrepresented students in Burundi. The mobile-optimized platform bridges the urban-rural education gap, serving over 1,000 students in remote areas.',
    achievements: [
      'Developed a mobile-optimized platform for exam resource access',
      'Enabled over 1,000 students in remote areas to access learning materials',
      'Bridged urban-rural education gap through accessible technology',
      'Led full-stack development using Django, Angular, and PostgreSQL',
    ],
    responsibilities:
      'My responsibilities encompassed building and maintaining a full-stack application to ensure seamless functionality, optimizing the platform for mobile accessibility to reach remote users, leading the technical and strategic development of the project, and managing PostgreSQL databases for efficient data handling.',
    technologies: ['Django', 'REST API', 'Angular', 'PostgreSQL', 'Docker', 'Nginx', 'Bash'],
    bgColor: 'bg-purple-50',
    accentColor: 'text-purple-600',
    link: 'https://epreuves.netlify.app',
    platform: 'Web & mobile web',
    images: [
      {
        src: '/images/epreuves.png',
        alt: 'Epreuve.com education platform',
        caption: 'The Epreuve.com platform providing exam resources to students in Burundi',
      },
    ],
    featured_image: '/images/epreuves.png',
  },
];

export function getWorkProjectBySlug(slug: string | undefined): WorkProject | undefined {
  if (!slug) return undefined;
  return WORK_PROJECTS.find((p) => p.slug === slug);
}

export function defaultProjectStatus(project: WorkProject): string {
  if (project.status) return project.status;
  const p = project.period ?? '';
  if (/present|ongoing|current/i.test(p)) return 'In progress';
  return 'Completed';
}
