import dynamic from 'next/dynamic'
import { Suspense } from 'react' 
import Navbar from '../components/navigation/Navbar'
import Hero from '../components/header/Hero'
import Loading from '../components/ui/Loading'

const Services = dynamic(() => import('../components/sections/Services'), {
  loading: () => <Loading />,
  ssr: true // Active le rendu côté serveur pour le SEO
})
const Contact = dynamic(() => import('../components/sections/Contact'), {
  loading: () => <Loading />,
  ssr: true // Active le rendu côté serveur pour le SEO
})
const Footer = dynamic(() => import('../components/footer/Footer'), {
  loading: () => <Loading />,
  ssr: true // Active le rendu côté serveur pour le SEO
})

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<Loading />}>
          <Services />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}