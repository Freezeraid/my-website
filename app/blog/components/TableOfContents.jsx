'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function TableOfContents() {
 const [activeId, setActiveId] = useState('')
 const [headings, setHeadings] = useState([])

 useEffect(() => {
  const relatedArticlesSection = document.querySelector('#similar-articles')
  
  const articleHeadings = Array.from(document.querySelectorAll('article h2'))
    .filter(heading => {
      if (relatedArticlesSection) {
        return heading.compareDocumentPosition(relatedArticlesSection) & Node.DOCUMENT_POSITION_FOLLOWING
      }
      return true
    })
    .map(heading => ({
      id: heading.id || heading.textContent.toLowerCase().replace(/\s+/g, '-'),
      text: heading.textContent,
      level: heading.tagName.toLowerCase()
    }))

  setHeadings(articleHeadings)

  const findFirstVisibleHeading = () => {
    const headingElements = articleHeadings
      .map(heading => ({
        id: heading.id,
        element: document.getElementById(heading.id)
      }))
      .filter(({ element }) => element !== null)
  
    let lastPassedHeading = null
    let firstVisibleHeading = null
  
    const headerHeight = 50
  
    for (const { id, element } of headingElements) {
      const rect = element.getBoundingClientRect()
      
      if (rect.top < headerHeight) {
        lastPassedHeading = id
      }
      else if (rect.top >= headerHeight && rect.bottom <= window.innerHeight && !firstVisibleHeading) {
        firstVisibleHeading = id
      }
    }
  
    return firstVisibleHeading || lastPassedHeading || ''
  }

  let scrollTimeout
  const handleScroll = () => {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout)
    }
  
    scrollTimeout = window.requestAnimationFrame(() => {
      const newActiveId = findFirstVisibleHeading()
      if (newActiveId !== activeId) {
        setActiveId(newActiveId)
      }
    })
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  return () => window.removeEventListener('scroll', handleScroll)
}, [activeId])

const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (!element) return

  const header = document.querySelector('nav')
  const headerHeight = header?.offsetHeight || 80
  const elementPosition = element.getBoundingClientRect().top + window.scrollY
  const offsetPosition = elementPosition - headerHeight - 20

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

 if (headings.length === 0) return null

 return (
   <nav 
     className="sticky top-24 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm"
     aria-label="Table des matières"
   >
     <h2 className="text-xl font-semibold mb-6 pb-2 border-b text-gray-900">
       Sommaire
     </h2>
     <ul className="space-y-3">
       {headings.map((heading) => (
         <li 
           key={heading.text}
           className={`
             ${heading.level === 'h3' ? 'ml-4' : ''} 
             relative
           `}
         >
           <div 
              onClick={() => heading.level === 'h2' ? scrollToHeading(heading.id) : null}
              className={`
                w-full px-4 py-2 rounded-lg 
                transition-all duration-300 group group-hover:-translate-y-0.5
                ${heading.level === 'h3' ? 'text-gray-500' : 
                  activeId === heading.id 
                    ? 'bg-blue-600 text-white font-medium cursor-pointer' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 cursor-pointer'
                }
              `}
            >
              <span className=" block">
                {heading.text}
              </span>
              {activeId === heading.id && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              )}
            </div>
         </li>
       ))}
     </ul>
   </nav>
 )
}