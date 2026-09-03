export type CourseStatus = 'Completed' | 'In progress';

export type ComputerScienceCourse = {
  id: string;
  code: string;
  title: string;
  term: string;
  status: CourseStatus;
  progress: number;
  x: number;
  y: number;
};

export type CourseConnection = {
  from: string;
  to: string;
};

export const COMPUTER_SCIENCE_COURSES: ComputerScienceCourse[] = [
  { id: 'intro', code: 'CSCI 150', title: 'Introduction to Computer Science', term: 'Fall 2023', status: 'Completed', progress: 100, x: 470, y: 55 },
  { id: 'data-structures', code: 'CSCI 151', title: 'Data Structures', term: 'Spring 2024', status: 'Completed', progress: 100, x: 470, y: 245 },

  { id: 'systems', code: 'CSCI 241', title: 'Systems Programming', term: 'Fall 2024', status: 'Completed', progress: 100, x: 25, y: 465 },
  { id: 'abstractions', code: 'CSCI 275', title: 'Programming Abstractions', term: 'Spring 2025', status: 'Completed', progress: 100, x: 325, y: 465 },
  { id: 'algorithms', code: 'CSCI 280', title: 'Algorithms', term: 'Spring 2025', status: 'Completed', progress: 100, x: 625, y: 465 },
  { id: 'hci', code: 'CSCI 313', title: 'Human Computer Interaction', term: 'Spring 2026', status: 'Completed', progress: 100, x: 925, y: 465 },

  { id: 'architecture', code: 'CSCI 210', title: 'Computer Architecture', term: 'Fall 2025', status: 'Completed', progress: 100, x: 95, y: 705 },
  { id: 'software', code: 'CSCI 356', title: 'Software from Start to Start Over', term: 'Fall 2025', status: 'Completed', progress: 100, x: 470, y: 705 },
  { id: 'nlp', code: 'CSCI 333', title: 'Natural Language Processing', term: 'Fall 2025', status: 'Completed', progress: 100, x: 845, y: 705 },

  { id: 'operating-systems', code: 'CSCI 341', title: 'Operating Systems', term: 'Fall 2026', status: 'In progress', progress: 28, x: 95, y: 975 },
  { id: 'theory', code: 'CSCI 383', title: 'Theory of Computation', term: 'Fall 2026', status: 'In progress', progress: 28, x: 625, y: 975 },
  { id: 'econ-computation', code: 'CSCI 385', title: 'Economics and Computation', term: 'Fall 2026', status: 'In progress', progress: 28, x: 925, y: 975 },
];

export const COURSE_CONNECTIONS: CourseConnection[] = [
  { from: 'intro', to: 'data-structures' },
  { from: 'data-structures', to: 'systems' },
  { from: 'data-structures', to: 'abstractions' },
  { from: 'data-structures', to: 'algorithms' },
  { from: 'data-structures', to: 'hci' },
  { from: 'data-structures', to: 'architecture' },
  { from: 'abstractions', to: 'software' },
  { from: 'algorithms', to: 'nlp' },
  { from: 'systems', to: 'operating-systems' },
  { from: 'architecture', to: 'operating-systems' },
  { from: 'algorithms', to: 'theory' },
  { from: 'algorithms', to: 'econ-computation' },
];
