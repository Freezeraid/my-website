"use client"
import { useState, useRef, useEffect } from 'react'
import ArticlePreview from './ArticlePreview'

export default function RelatedArticles({ articles }) {
  if (!articles?.length) return null
  
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  useEffect(() => {
    const checkScroll = () => {
      if (!containerRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('load', checkScroll);
      window.addEventListener('resize', checkScroll);

      setTimeout(checkScroll, 100);
      
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('load', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [articles]);
  
  const scroll = (direction) => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -clientWidth / 3 : clientWidth / 3,
        behavior: 'smooth'
      });
    }
  };
  
  const onMouseDown = (e) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.style.userSelect = 'none';
  };
  
  const onMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const x = e.pageX;
    const delta = startX - x;
    
    containerRef.current.scrollLeft = scrollLeft + delta;
    
    e.preventDefault();
  };
  
  const onMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleClick = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleWheel = (e) => {
    if (containerRef.current) {
      e.preventDefault();
      
      containerRef.current.scrollBy({
        left: e.deltaY > 0 ? 100 : -100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="mt-16 pt-16 border-t border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900" id="similar-articles">
          Articles similaires
        </h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => scroll('left')} 
            className={`p-2 rounded-full bg-blue-50 text-blue-600 transition-opacity duration-300 ${showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Voir articles précédents"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')} 
            className={`p-2 rounded-full bg-blue-50 text-blue-600 transition-opacity duration-300 ${showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Voir plus d'articles"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 cursor-grab touch-pan-x"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUpOrLeave}
          onMouseLeave={onMouseUpOrLeave}
          onClick={handleClick}
          onWheel={handleWheel}
        >
          {articles.map((article) => (
            <div 
              key={article.slug} 
              className="flex-none w-full sm:w-1/2 lg:w-1/3 pr-4 snap-start"
            >
              <ArticlePreview 
                article={article}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}