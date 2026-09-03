import { Children, isValidElement, useEffect, useId, useRef, type ReactElement, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useTheme } from '../context/ThemeContext';

const MermaidDiagram = ({ chart }: { chart: string }) => {
  const container = useRef<HTMLDivElement>(null);
  const reactId = useId();
  const { theme } = useTheme();

  useEffect(() => {
    let mounted = true;
    const diagramId = `mermaid-${reactId.replace(/:/g, '')}`;

    import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
      theme: theme === 'dark' ? 'dark' : 'neutral',
      fontFamily: 'Instrument Sans, system-ui, sans-serif',
      flowchart: { curve: 'basis' },
      });
      return mermaid.render(diagramId, chart);
    }).then(({ svg }) => {
      if (mounted && container.current) container.current.innerHTML = svg;
    }).catch(() => {
      if (mounted && container.current) container.current.textContent = 'Unable to render this diagram.';
    });

    return () => { mounted = false; };
  }, [chart, reactId, theme]);

  return <div ref={container} className="markdown-mermaid" role="img" aria-label="Diagram rendered from Mermaid" />;
};

const MarkdownArticle = ({ source }: { source: string }) => (
  <div className="markdown-article">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        a: ({ href, children, ...props }) => {
          const external = href?.startsWith('http');
          return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} {...props}>{children}</a>;
        },
        pre: ({ children }) => {
          const child = Children.only(children) as ReactElement<{ className?: string; children?: ReactNode }>;
          if (isValidElement(child) && child.props.className === 'language-mermaid') {
            return <MermaidDiagram chart={String(child.props.children).replace(/\n$/, '')} />;
          }
          return <pre>{children}</pre>;
        },
      }}
    >
      {source}
    </ReactMarkdown>
  </div>
);

export default MarkdownArticle;
