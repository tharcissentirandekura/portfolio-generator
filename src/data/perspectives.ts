export type Perspective = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  introduction: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  principles: string[];
  closing: string;
  accent: string;
};

export const PERSPECTIVES: Perspective[] = [
  {
    slug: 'engineering-ownership',
    number: '01',
    title: 'Engineering ownership',
    summary: 'Moving beyond isolated tickets to understand, improve, and care for the complete system.',
    introduction: 'To me, ownership is not about doing everything alone. It is about staying responsible for whether the whole experience works—from the first technical decision to the moment a real person relies on it.',
    sections: [
      {
        heading: 'Seeing the whole system',
        paragraphs: [
          'I enjoy moving between frontend behavior, backend services, authentication, data, and deployment because the most important problems rarely stay inside one layer. A fast interface is not useful if login is unreliable. A clean API is not enough if nobody can understand the workflow around it.',
          'Working on long-running software has also made me value maintainability. The code needs to make sense to the next person, failures need to be understandable, and small improvements should reduce future work rather than create more of it.',
        ],
      },
      {
        heading: 'Ownership is communication',
        paragraphs: [
          'Technical ownership includes asking questions early, making tradeoffs visible, and explaining decisions in language that teammates and stakeholders can evaluate. It also means being honest when the problem is not yet understood.',
          'I am still learning how to do this well. My goal is to become the kind of engineer who can take an ambiguous problem, create clarity around it, and leave both the software and the team in a stronger position.',
        ],
      },
    ],
    principles: ['Understand the user’s complete path', 'Make tradeoffs explicit', 'Design for maintenance and handoff', 'Treat reliability as a product feature'],
    closing: 'The question I keep returning to is simple: if I step away tomorrow, is the system—and the understanding around it—better than when I arrived?',
    accent: 'bg-blue-100 text-blue-950 dark:bg-blue-950 dark:text-blue-100',
  },
  {
    slug: 'economic-reasoning',
    number: '02',
    title: 'Economic reasoning',
    summary: 'Using incentives, constraints, and adoption to understand whether a technical solution can work in practice.',
    introduction: 'Economics changes the questions I ask about software. I still care about whether a system can be built, but I also want to know who can access it, what behavior it encourages, and what must remain true for it to last.',
    sections: [
      {
        heading: 'Technology creates incentives',
        paragraphs: [
          'Every product makes some actions easier and others harder. Defaults, pricing, payment methods, and even loading time influence who participates. Those choices are technical, but they also shape behavior and distribute opportunity.',
          'This perspective is especially useful when building for environments where familiar assumptions do not hold. A technically elegant payment flow has little value if it ignores the tools people already trust and use.',
        ],
      },
      {
        heading: 'Adoption is part of the design',
        paragraphs: [
          'I think about the cost of learning a new system, the friction of changing an established process, and the value a user receives before being asked to invest time or attention. A product succeeds through repeated use, not simply through deployment.',
          'Studying economics helps me see a software system as part of a larger network of choices and constraints. It pushes me to test assumptions about value instead of treating adoption as something that happens after engineering is finished.',
        ],
      },
    ],
    principles: ['Start with constraints, not ideal conditions', 'Ask who gains and who is excluded', 'Treat adoption as a design problem', 'Consider long-term operating costs'],
    closing: 'The most useful technical solution is not always the most complex one. It is the one that fits the incentives and realities surrounding it.',
    accent: 'bg-violet-100 text-violet-950 dark:bg-violet-950 dark:text-violet-100',
  },
  {
    slug: 'community-context',
    number: '03',
    title: 'Community context',
    summary: 'Designing from lived environments, careful listening, and the realities people actually navigate.',
    introduction: 'Building across Burundi and the United States has taught me that “the user” is never an abstract category. People bring language, infrastructure, trust, history, and expectations to every system they encounter.',
    sections: [
      {
        heading: 'Context changes the product',
        paragraphs: [
          'Connection speed, device access, payment habits, and institutional processes can completely change what good design looks like. Features that feel essential in one place may be distractions in another. Constraints that appear unusual from a distance may be ordinary parts of daily life.',
          'Some of my projects began because I recognized a barrier personally: access to exam materials, support for local organizations, or the friction inside a campus workflow. That proximity helps identify the problem, but it does not replace listening to the people who experience it differently.',
        ],
      },
      {
        heading: 'Build with, not simply for',
        paragraphs: [
          'Community-centered work requires feedback before the solution feels finished. It means learning how people describe the problem in their own words and being willing to change the product when the original idea does not fit.',
          'I want my work to respect the expertise already present in a community. The engineer contributes technical tools; the people living with the problem contribute knowledge that cannot be reconstructed from a requirements document.',
        ],
      },
    ],
    principles: ['Listen before defining the solution', 'Design for the available infrastructure', 'Respect local knowledge and language', 'Measure usefulness through lived experience'],
    closing: 'Context is not an edge case to handle later. It is the starting point for deciding what should be built at all.',
    accent: 'bg-amber-100 text-amber-950 dark:bg-amber-950 dark:text-amber-100',
  },
];

export const getPerspectiveBySlug = (slug?: string) => PERSPECTIVES.find((perspective) => perspective.slug === slug);
