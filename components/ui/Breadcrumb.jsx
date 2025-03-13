'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumb({ items }) {
  const pathname = usePathname();
  const baseUrl = 'https://killiandoubre.com';
  
  const getBreadcrumbStructuredData = () => {
    const itemListElement = [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Accueil',
        'item': baseUrl
      }
    ];
    
    let position = 2;
    let path = '';
    
    items.forEach((item) => {
      path = item.href || pathname;
      
      const cleanPath = path.replace(/#.*$/, '');
      const fullPath = cleanPath.startsWith('http') ? cleanPath : `${baseUrl}${cleanPath}`;
      
      itemListElement.push({
        '@type': 'ListItem',
        'position': position,
        'name': item.label,
        'item': fullPath
      });
      
      position++;
    });

    if (itemListElement.length > 0) {
      const lastItem = itemListElement[itemListElement.length - 1];
      delete lastItem.item;
    }
    
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': itemListElement
    };
  };
  
  const structuredData = getBreadcrumbStructuredData();
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <nav 
        aria-label="Fil d'ariane" 
        className="mb-6"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li 
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
            className="flex items-center"
          >
            <Link 
              href="/"
              title="Accueil"
              className="flex items-center text-blue-600 hover:text-blue-700 transition-all duration-300 hover:-translate-y-0.5 shrink-0"
              itemProp="item"
            >
              <svg 
                className="w-5 h-5" 
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="sr-only" itemProp="name">Accueil</span>
              <meta itemProp="position" content="1" />
            </Link>
          </li>

          {items.map((item, index) => (
            <li 
              key={index} 
              className="flex items-center min-w-0"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <svg 
                className="w-5 h-5 text-gray-400 mx-2 shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              {item.href ? (
                <Link 
                  href={item.href}
                  className="text-blue-600 hover:text-blue-700 transition-all duration-300 hover:-translate-y-0.5 truncate"
                  aria-label={`Aller à ${item.label}`}
                  title={item.label}
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span 
                  className="text-gray-800 font-medium bg-blue-50 px-3 py-1 rounded-full truncate max-w-[130px] sm:max-w-[200px] lg:max-w-[800px] block"
                  title={item.label}
                  itemProp="name"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={index + 2} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
