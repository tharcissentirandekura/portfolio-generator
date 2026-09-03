export type CourseStatus = 'Completed' | 'In progress';

export type ComputerScienceCourse = {
  id: string;
  code: string;
  title: string;
  term: string;
  status: CourseStatus;
  introduction: string;
  experience: string[];
  lessons: string[];
  advice: string[];
};

export type LearningThread = {
  number: string;
  title: string;
  description: string;
  courseIds: string[];
};

export const COMPUTER_SCIENCE_COURSES: ComputerScienceCourse[] = [
  {
    id: 'intro', code: 'CSCI 150', title: 'Introduction to Computer Science', term: 'Fall 2023', status: 'Completed',
    introduction: 'The course that gave me a durable way to turn an unfamiliar problem into something a computer—and another person—could understand.',
    experience: ['This was my formal entry into computer science. The most important shift was learning that programming is less about remembering syntax and more about decomposing a problem, testing an idea, and communicating a solution clearly.'],
    lessons: ['Break a large problem into small, testable steps.', 'Read error messages as information rather than failure.', 'Clear names and structure make code easier to trust.'],
    advice: ['Practice consistently instead of saving everything for one long session.', 'Trace your program by hand when its behavior surprises you.', 'Ask why a solution works, not only whether it passes.'],
  },
  {
    id: 'data-structures', code: 'CSCI 151', title: 'Data Structures', term: 'Spring 2024', status: 'Completed',
    introduction: 'A practical foundation for choosing how information should be represented, accessed, and changed.',
    experience: ['Data Structures made programs feel less like isolated instructions and more like designed systems. Choosing between a list, tree, stack, queue, or map changed both the clarity and performance of a solution.'],
    lessons: ['The shape of the data often determines the shape of the algorithm.', 'Runtime analysis is most useful when connected to actual design choices.', 'Implementing a structure makes its tradeoffs easier to remember.'],
    advice: ['Draw the structure before writing the operation.', 'Become comfortable with references and recursion early.', 'Test empty, single-element, and duplicate-value cases.'],
  },
  {
    id: 'systems', code: 'CSCI 241', title: 'Systems Programming', term: 'Fall 2024', status: 'Completed',
    introduction: 'The course that brought software closer to memory, processes, and the operating environment underneath it.',
    experience: ['Systems Programming made abstractions I had taken for granted feel concrete. It required more attention to memory, resource ownership, and the consequences of small implementation decisions.'],
    lessons: ['Memory safety and resource management are design concerns.', 'Tools for compiling, debugging, and inspecting programs are part of the craft.', 'A small low-level mistake can create behavior far from its source.'],
    advice: ['Get comfortable with a debugger before you urgently need one.', 'Draw memory and pointer relationships on paper.', 'Compile and test after small changes.'],
  },
  {
    id: 'architecture', code: 'CSCI 210', title: 'Computer Architecture', term: 'Fall 2025', status: 'Completed',
    introduction: 'A look beneath software at how instructions, data, memory, and processors cooperate.',
    experience: ['Computer Architecture connected the code I write to the machine that executes it. It gave me a clearer mental model for performance and for the layers between a high-level language and hardware.'],
    lessons: ['Hardware constraints influence software performance.', 'Binary representation becomes easier through repeated conversion and tracing.', 'Caches and memory hierarchy explain behavior that source code alone cannot.'],
    advice: ['Trace instructions slowly before trying to move quickly.', 'Keep a compact reference for representations and instruction formats.', 'Connect each new hardware idea back to a familiar program.'],
  },
  {
    id: 'abstractions', code: 'CSCI 275', title: 'Programming Abstractions', term: 'Spring 2025', status: 'Completed',
    introduction: 'A study of how programming languages package ideas and shape the way developers reason.',
    experience: ['This course pushed me beyond a single programming style. Comparing abstractions made it easier to separate an underlying idea from the particular syntax used to express it.'],
    lessons: ['Different paradigms make different problems easier to express.', 'An abstraction is valuable when its boundaries remain understandable.', 'Language design affects both correctness and developer thinking.'],
    advice: ['Resist translating every new paradigm into the one you already know.', 'Use small examples to test your understanding of evaluation.', 'Explain a concept without syntax before implementing it.'],
  },
  {
    id: 'algorithms', code: 'CSCI 280', title: 'Algorithms', term: 'Spring 2025', status: 'Completed',
    introduction: 'A shift from finding a working answer to defending why it works and how well it scales.',
    experience: ['Algorithms strengthened the reasoning behind my code. Correctness, efficiency, and proof stopped being separate concerns and became parts of the same design process.'],
    lessons: ['A precise problem definition prevents wasted optimization.', 'Correctness arguments reveal assumptions hidden in an implementation.', 'The right strategy often comes from recognizing a familiar structure.'],
    advice: ['Write the invariant before writing the final code.', 'Practice explaining complexity in complete sentences.', 'Compare multiple approaches before committing to one.'],
  },
  {
    id: 'nlp', code: 'CSCI 333', title: 'Natural Language Processing', term: 'Fall 2025', status: 'Completed',
    introduction: 'An exploration of how computational systems represent and make decisions about human language.',
    experience: ['NLP brought together algorithms, probability, data, and the ambiguity of language. It reinforced that model performance depends on representation, evaluation, and the data behind the system.'],
    lessons: ['Text must be represented before it can be modeled.', 'Evaluation metrics answer different questions and can hide different failures.', 'Language technology inherits limitations from its data and assumptions.'],
    advice: ['Understand the baseline before reaching for a complex model.', 'Inspect examples of model errors, not only aggregate scores.', 'Keep the human meaning of the text visible throughout the pipeline.'],
  },
  {
    id: 'software', code: 'CSCI 356', title: 'Software from Start to Start Over', term: 'Fall 2025', status: 'Completed',
    introduction: 'A broader view of software as something designed, maintained, revised, and sometimes rebuilt.',
    experience: ['This course sharpened my interest in software that lasts beyond a demonstration. I thought more deliberately about requirements, changing constraints, collaboration, and the cost of decisions over time.'],
    lessons: ['Software design continues after the first implementation.', 'Maintainability depends on communication as much as code structure.', 'Revisiting an old decision is part of responsible engineering.'],
    advice: ['Document the reason behind a decision, not just the result.', 'Create feedback loops before the project feels finished.', 'Treat changing requirements as information about the problem.'],
  },
  {
    id: 'hci', code: 'CSCI 313', title: 'Human Computer Interaction', term: 'Spring 2026', status: 'Completed',
    introduction: 'A reminder that technically correct software can still fail the person expected to use it.',
    experience: ['HCI gave me a more disciplined language for usability and human-centered design. It connected research, prototyping, accessibility, and evaluation to everyday product decisions.'],
    lessons: ['Observation can reveal needs that a direct question misses.', 'A prototype should answer a question rather than imitate a finished product.', 'Accessibility improves the structure of an experience for everyone.'],
    advice: ['Test assumptions with people as early as possible.', 'Separate personal preference from evidence about usability.', 'Record what surprised you during every evaluation.'],
  },
  {
    id: 'operating-systems', code: 'CSCI 341', title: 'Operating Systems', term: 'Fall 2026', status: 'In progress',
    introduction: 'Current work on the mechanisms that coordinate processes, memory, files, and shared hardware.',
    experience: ['I am using this course to deepen the systems perspective I began developing in Systems Programming and Computer Architecture. The focus is increasingly on coordination, isolation, and the tradeoffs behind familiar operating-system behavior.'],
    lessons: ['Concurrency requires reasoning about many valid execution orders.', 'Operating-system abstractions balance safety, performance, and convenience.', 'Strong mental models matter when behavior cannot be observed directly.'],
    advice: ['Review low-level memory and process concepts before the semester begins.', 'Draw state transitions and timelines for concurrent behavior.', 'Expect understanding to come through careful iteration.'],
  },
  {
    id: 'theory', code: 'CSCI 383', title: 'Theory of Computation', term: 'Fall 2026', status: 'In progress',
    introduction: 'Current study of the mathematical boundaries of computation and the models used to reason about them.',
    experience: ['Theory of Computation is giving me a more formal view of what problems computers can represent and solve. It rewards precision and makes intuitive claims earn their justification.'],
    lessons: ['A simpler computational model can clarify a difficult question.', 'Definitions carry much of the reasoning in formal work.', 'Some limits are properties of the problem, not failures of implementation.'],
    advice: ['Rewrite definitions in your own words before using them.', 'Draw automata and work through short strings by hand.', 'Practice proofs regularly rather than only before an assessment.'],
  },
  {
    id: 'econ-computation', code: 'CSCI 385', title: 'Economics and Computation', term: 'Fall 2026', status: 'In progress',
    introduction: 'Current work at the intersection of algorithms, incentives, strategic behavior, and market design.',
    experience: ['This course sits directly between my two majors. It is helping me examine technical systems as environments where people respond to incentives rather than as neutral collections of features.'],
    lessons: ['An algorithm can change the behavior of the people participating in a system.', 'Efficiency and fairness may point toward different design choices.', 'Mechanism design begins with careful assumptions about information and incentives.'],
    advice: ['Review both algorithmic reasoning and basic microeconomics.', 'State the actors, information, and incentives before solving the model.', 'Question whether a mathematically clean outcome fits the real setting.'],
  },
];

export const LEARNING_THREADS: LearningThread[] = [
  {
    number: '01',
    title: 'Core foundations',
    description: 'The sequence that established my approach to programming, data structures, and computational problem-solving.',
    courseIds: ['intro', 'data-structures'],
  },
  {
    number: '02',
    title: 'Systems, from hardware up',
    description: 'Understanding how programs interact with memory, architecture, and the operating system beneath them.',
    courseIds: ['systems', 'architecture', 'operating-systems'],
  },
  {
    number: '03',
    title: 'Software and interaction',
    description: 'Thinking beyond implementation toward language design, maintainable software, and the people using it.',
    courseIds: ['abstractions', 'software', 'hci'],
  },
  {
    number: '04',
    title: 'Intelligence, theory, and markets',
    description: 'Advanced work connecting algorithms with language, formal computation, and economic systems.',
    courseIds: ['algorithms', 'nlp', 'theory', 'econ-computation'],
  },
];

export const getCourse = (id: string) => COMPUTER_SCIENCE_COURSES.find((course) => course.id === id);
