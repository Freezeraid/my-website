'use client'

import MDXContent from './MDXContent'

// Version simplifiée du composant pour éviter les erreurs
export default function ClientMDXContent({ source }) {
  return (
    <div className="prose prose-lg max-w-none prose-blue">
      <MDXContent source={source} />
    </div>
  )
}
