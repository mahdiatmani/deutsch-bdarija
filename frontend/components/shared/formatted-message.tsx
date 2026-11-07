'use client'

import { Children, isValidElement, cloneElement, type ReactNode } from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

/** Colour "quoted German phrases" inside plain text runs. */
function highlightQuotes(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (typeof child === 'string') {
      return child.split(/("[^"\n]+")/).map((part, i) =>
        part.startsWith('"') && part.endsWith('"') && part.length > 2 ? (
          <span key={i} className="font-semibold text-amber-700 dark:text-amber-400">
            {part}
          </span>
        ) : (
          part
        )
      )
    }
    // Recurse into inline elements (e.g. emphasis) so nested text is highlighted too
    if (isValidElement<{ children?: ReactNode }>(child) && child.props.children) {
      return cloneElement(child, undefined, highlightQuotes(child.props.children))
    }
    return child
  })
}

const components: Components = {
  p: ({ children }) => <p className="leading-relaxed">{highlightQuotes(children)}</p>,
  h1: ({ children }) => <h3 className="font-display text-lg font-bold mt-3">{highlightQuotes(children)}</h3>,
  h2: ({ children }) => <h3 className="font-display text-base font-bold mt-3">{highlightQuotes(children)}</h3>,
  h3: ({ children }) => <h4 className="font-semibold mt-2">{highlightQuotes(children)}</h4>,
  strong: ({ children }) => <strong className="font-bold text-primary dark:text-primary-light">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  ul: ({ children }) => <ul className="space-y-1 pl-1">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal space-y-1 pl-5 marker:font-bold marker:text-primary">{children}</ol>,
  li: ({ children, node }) => {
    // Unordered items get a jade dot; ordered ones use the list's decimal markers
    const ordered = (node as { parent?: { tagName?: string } } | undefined)?.parent?.tagName === 'ol'
    return ordered ? (
      <li>{highlightQuotes(children)}</li>
    ) : (
      <li className="flex gap-2">
        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
        <span>{highlightQuotes(children)}</span>
      </li>
    )
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-saffron bg-saffron-50/60 dark:bg-saffron/10 rounded-r-lg px-3 py-2">{children}</blockquote>
  ),
  hr: () => <hr className="my-2 border-gray-200 dark:border-gray-700" />,
  code: ({ children }) => (
    <code className="rounded bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-[0.9em]">{children}</code>
  ),
  table: ({ children }) => (
    <div className="my-1 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-gray-50 dark:bg-gray-800/60">{children}</thead>,
  th: ({ children }) => <th className="px-3 py-2 text-left font-semibold">{children}</th>,
  td: ({ children }) => (
    <td className="border-t border-gray-200 dark:border-gray-700 px-3 py-2">{highlightQuotes(children)}</td>
  ),
  a: ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
      {children}
    </a>
  ),
}

const inlineComponents: Components = {
  p: ({ children }) => <>{highlightQuotes(children)}</>,
  strong: components.strong,
  em: components.em,
  code: components.code,
}

/**
 * Renders a single line of inline markdown (*Darija*, **bold**, "German") without block wrappers.
 * Underscores are escaped so exercise blanks (___) never turn into emphasis.
 */
export function InlineMarkdown({ content }: { content: string }) {
  return (
    <ReactMarkdown components={inlineComponents} allowedElements={['p', 'strong', 'em', 'code']} unwrapDisallowed>
      {content.replace(/_/g, '\\_')}
    </ReactMarkdown>
  )
}

/** Renders the AI teacher's markdown replies (headings, lists, tables...) safely. */
export function FormattedMessage({ content }: { content: string }) {
  return (
    <div className="space-y-2 break-words">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
