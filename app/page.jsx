import Hero from '../components/header/Hero'
import ClientSections from '../components/ui/ClientSections'

export default function Home() {
  return (
    <>
      <main>
        {/* Hero est chargé immédiatement */}
        <Hero />
        
        {/* Utilisation du composant client pour les sections */}
        <ClientSections />
      </main>
    </>
  )
}
