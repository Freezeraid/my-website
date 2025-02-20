// components/ui/Breadcrumb.jsx
import Link from 'next/link'

export default function Breadcrumb({ items }) {
 return (
   <nav aria-label="Fil d'ariane" className="mb-6">
     <ol className="flex flex-wrap items-center gap-2 text-sm">
       <li>
         <Link 
           href="/"
           title="Accueil"
           className="flex items-center text-blue-600 hover:text-blue-700 transition-all duration-300 hover:-translate-y-0.5"
         >
           <svg 
             className="w-5 h-5" 
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
           >
             <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
             <polyline points="9 22 9 12 15 12 15 22" />
           </svg>
           <span className="sr-only">Accueil</span>
         </Link>
       </li>

       {items.map((item, index) => (
         <li key={index} className="flex items-center">
           <svg 
             className="w-5 h-5 text-gray-400 mx-2" 
             fill="none" 
             stroke="currentColor" 
             viewBox="0 0 24 24"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
           >
             <polyline points="9 18 15 12 9 6" />
           </svg>
           {item.href ? (
             <Link 
               href={item.href}
               className="text-blue-600 hover:text-blue-700 transition-all duration-300 hover:-translate-y-0.5"
               aria-label={`Aller à ${item.label}`}
             >
               {item.label}
             </Link>
           ) : (
             <span className="text-gray-800 font-medium bg-blue-50 px-3 py-1 rounded-full">
               {item.label}
             </span>
           )}
         </li>
       ))}
     </ol>
   </nav>
 )
}