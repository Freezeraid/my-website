import Image from 'next/image'
import Link from 'next/link'

const MDXComponents = {
  h2: ({ children }) => {
    const id = children.toLowerCase().replace(/\s+/g, '-');
    return (
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mt-12 mb-6" id={id}>
      {children}
    </h2>
  )},
  h3: ({ children }) => {
    return (
    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-4">
      {children}
    </h3>
  )},
  p: ({ children }) => {
    return (
    <p className="text-base sm:text-sm lg:text-lg leading-relaxed text-gray-800 mt-8 mb-4">
      {children}
    </p>
  )},
  a: ({ href, children }) => {
    const isInternalLink = href?.startsWith('/')
    if (isInternalLink) {
      return (
        <Link 
          href={href}
          className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-2"
        >
          {children}
        </Link>
      )
    }
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-2"
      >
        {children}
      </Link>
    )
  },
  img: ({ src, alt }) => (
    <div className="relative w-full aspect-video my-8 rounded-xl overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
      />
    </div>
  ),

  FAQ: ({ children }) => (
    <div className="mt-12 mb-8 space-y-6">
      <h2 className="text-xl font-bold text-gray-900 mb-8" id="FAQ">
        FAQ
      </h2>
      {children}
    </div>
  ),
  Question: ({ children }) => (
    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-4">
      {children}
    </h3>
  ),
  Answer: ({ children }) => (
    <div className="text-gray-600 text-base sm:text-sm lg:text-lg leading-relaxed mb-6 pl-4 border-l-4 border-blue-100">
      {children}
    </div>
  ),
}

export default MDXComponents