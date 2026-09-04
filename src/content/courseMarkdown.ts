const courseFiles = import.meta.glob('./courses/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

export const getCourseMarkdown = (courseId: string) => courseFiles[`./courses/${courseId}.md`];
