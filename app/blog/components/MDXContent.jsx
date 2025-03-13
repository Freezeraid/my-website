import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrism from 'rehype-prism-plus'
import Image from 'next/image'
import Link from 'next/link'

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrism, { ignoreMissing: true, aliases: { python: ['py', 'python'] } }]
    ],
  },
};

const components = {
  h2: ({ children, ...props }) => {
    const id = typeof children === 'string' 
      ? children.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
      : '';
    
    return (
      <h2 
        className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-12 mb-6 scroll-mt-24" 
        id={id}
        {...props}
      >
        {children}
      </h2>
    );
  },
  
  h3: ({ children, ...props }) => {
    const id = typeof children === 'string' 
      ? children.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
      : '';
    
    return (
      <h3 
        className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-4 scroll-mt-24" 
        id={id}
        {...props}
      >
        {children}
      </h3>
    );
  },
  
  p: ({ children, ...props }) => (
    <p 
      className="text-base sm:text-lg leading-relaxed text-gray-700 my-4"
      {...props}
    >
      {children}
    </p>
  ),
  
  a: ({ href, children, ...props }) => {
    const isInternalLink = href?.startsWith('/');
    const isAnchorLink = href?.startsWith('#');
    
    if (isInternalLink) {
      return (
        <Link 
          href={href}
          className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors"
          {...props}
        >
          {children}
        </Link>
      );
    } else if (isAnchorLink) {
      return (
        <a 
          href={href}
          className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors"
          {...props}
        >
          {children}
        </a>
      );
    }
    
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors"
        {...props}
      >
        {children}
        <span className="inline-block ml-1">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-3.5 w-3.5 inline-block" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </span>
      </a>
    );
  },
  
  ul: ({ children, ...props }) => (
    <ul 
      className="list-disc pl-6 my-6 space-y-2 text-gray-700"
      {...props}
    >
      {children}
    </ul>
  ),
  
  ol: ({ children, ...props }) => (
    <ol 
      className="list-decimal pl-6 my-6 space-y-2 text-gray-700"
      {...props}
    >
      {children}
    </ol>
  ),
  
  li: ({ children, ...props }) => (
    <li 
      className="mb-1 leading-relaxed"
      {...props}
    >
      {children}
    </li>
  ),
  
  blockquote: ({ children, ...props }) => (
    <blockquote 
      className="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-blue-50 rounded-r-md text-gray-700 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  
  code: ({ children, className, ...props }) => {
    const isInline = !className;
    return isInline ? (
      <code 
        className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded font-mono text-sm"
        {...props}
      >
        {children}
      </code>
    ) : (
      <code 
        className={`${className} block overflow-x-auto p-4 rounded-md my-4 text-sm`}
        {...props}
      >
        {children}
      </code>
    );
  },
  
  pre: ({ children, ...props }) => (
    <pre 
      className="bg-gray-900 text-white rounded-md overflow-x-auto my-6 p-0"
      {...props}
    >
      {children}
    </pre>
  ),
  
  Image: ({ src, alt, caption, ...props }) => (
    <figure className="my-8 mx-auto w-full sm:w-4/5 flex flex-col">
      <div className="w-full">
        <div className="relative pt-[56.25%]">
          <Image
            src={src}
            alt={alt || "Image de l'article"}
            fill
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
            loading="lazy"
            {...props}
          />
        </div>
      </div>
      
      {caption && (
        <figcaption className="text-xs mt-12 sm:text-sm italic text-gray-600 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  ),
  
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-8">
      <table 
        className="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-md"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  
  th: ({ children, ...props }) => (
    <th 
      className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-900"
      {...props}
    >
      {children}
    </th>
  ),
  
  td: ({ children, ...props }) => (
    <td 
      className="px-4 py-3 border-t border-gray-200 text-sm text-gray-700"
      {...props}
    >
      {children}
    </td>
  ),
  
  hr: (props) => (
    <hr 
      className="my-8 border-t-2 border-gray-200"
      {...props}
    />
  ),
  
  FAQ: ({ children, ...props }) => (
    <div 
      className="mt-12 mb-8 space-y-6 bg-blue-50 p-6 rounded-xl border border-blue-100"
      {...props}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-8" id="faq">
        Questions fréquentes
      </h2>
      {children}
    </div>
  ),
  
  Question: ({ children, ...props }) => (
    <h3 
      className="text-xl font-semibold text-gray-800 mt-8 mb-2 flex items-center"
      {...props}
    >
      <svg 
        className="w-5 h-5 text-blue-600 mr-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
        />
      </svg>
      {children}
    </h3>
  ),
  
  Answer: ({ children, ...props }) => (
    <div 
      className="text-gray-700 text-base leading-relaxed mb-6 pl-7"
      {...props}
    >
      {children}
    </div>
  ),
  
  Note: ({ children, type = "info", ...props }) => {
    const styles = {
      info: "bg-blue-50 border-blue-500 text-blue-800",
      warning: "bg-yellow-50 border-yellow-500 text-yellow-800",
      tip: "bg-green-50 border-green-500 text-green-800",
      caution: "bg-red-50 border-red-500 text-red-800"
    };
    
    const icons = {
      info: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      warning: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      tip: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      caution: (
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    };
    
    const titles = {
      info: "Information",
      warning: "Attention",
      tip: "Conseil",
      caution: "Mise en garde"
    };
    
    return (
      <div 
        className={`my-6 p-4 border-l-4 rounded-r-md ${styles[type]}`}
        {...props}
      >
        <div className="flex items-center font-semibold mb-2">
          {icons[type]}
          {titles[type]}
        </div>
        <div className="pl-7">
          {children}
        </div>
      </div>
    );
  }
};

export default function MDXContent({ source }) {
  return (
    <div className="prose prose-lg max-w-none prose-blue">
      <MDXRemote source={source} components={components} options={options} />
    </div>
  );
}
